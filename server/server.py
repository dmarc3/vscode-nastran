from typing import Optional
import re
import json
import os

from pygls.server import LanguageServer
from lsprotocol.types import (
    TEXT_DOCUMENT_HOVER,
    Hover,
    HoverParams,
    MarkupContent,
    MarkupKind,
    TEXT_DOCUMENT_SEMANTIC_TOKENS_FULL,
    SemanticTokensLegend,
    SemanticTokensParams,
    SemanticTokens,
)

# Read regex strings from syntax
REGEX_KEY = {}
with open(os.path.join('syntaxes', 'nastran.json')) as f:
    d = json.load(f)
for key in d['repository'].keys():
    REGEX_KEY[key.upper()] = d['repository'][key]['match']

from utils.read_docs import get_docs, SECTION_KEY

class NastranLanguageServer(LanguageServer):
    """Subclass of pygls LanguageServer"""

    CONFIGURATION_SECTION = "nastranServer"

    def __init__(self, *args):
        super().__init__(*args)

# Initialize server class
server = NastranLanguageServer("NastranLanguageServer", "v0.1")

def get_section(line, lines) -> str:
    # Determine index of current line
    ind = lines.index(line)
    # Strip to left of string
    raw = line.lstrip()
    if raw.startswith('*'):
        return 'BULK'
    if raw.startswith('$') and not raw.startswith('$S700'):
        return ''
    
    # If special character detected, strip everything after that character
    card = raw
    for char in [",", "*", " ", "=", "\n", "("]:
        if char in card:
            card = card.split(char)[0].strip()
    
    # Determine relative position in file and return section if detected
    CEND = [i for i, line in enumerate(lines) if 'CEND' in line]
    CEND = 0 if not CEND else CEND[0]
    BBULK = [i for i, line in enumerate(lines) if 'BEGIN BULK' in line]
    BBULK = 0 if not BBULK else BBULK[0]
    if CEND > 0 and BBULK > 0:
        if ind <= CEND and any([name for name in SECTION_KEY['FMS'] if name.startswith(card)]):
            return 'FMS'
        elif ind <= CEND and any([name for name in SECTION_KEY['EXEC'] if name.startswith(card)]):
            return 'EXEC'
        elif ind > CEND and ind <= BBULK and any([name for name in SECTION_KEY['CASE'] if name.startswith(card)]):
            return 'CASE'
        elif ind > BBULK and card in SECTION_KEY['BULK']:
            return 'BULK'

    # Test for raw line
    for section, cards in SECTION_KEY.items():
        if raw.strip() in cards:
            return section
   
    # Catch any partial cards
    for section, cards in SECTION_KEY.items():
        if any([name for name in cards if name.startswith(card)]):
            return section

    return 'BULK'

@server.feature(TEXT_DOCUMENT_HOVER)
async def hovers(params: HoverParams) -> Optional[Hover]:
    """Hover provider

    Args:
        params (HoverParams): Hover parameters from VS Code client

    Returns:
        Optional[Hover]: Returns Hover class if documentation found else None
    """
    # Acquire current line
    doc = server.workspace.get_document(params.text_document.uri)
    line = doc.lines[params.position.line]
    # Find what section of Nastran file cursor is at
    section = get_section(line, doc.lines)
    if not section:
        return None
    # Execute regex search
    if section == 'BULK' and 'param' in line.lstrip().lower():
        # Process PARAM
        logic = (params.position.character >= line.lower().index('param')) and (params.position.character <= line.lower().index('param')+len('param'))
        if logic:
            card = re.match(REGEX_KEY[section], line)
            if card:
                card = card.groups()[0]
                if not card:
                    card = ''
            else:
                card = ''
        else:
            card = re.search(REGEX_KEY['PARAM'], line)
            if card:
                card = card.groups()[0]
                if not card:
                    card = ''
            else:
                card = ''
    else:
        card = re.match(REGEX_KEY[section], line)
        if card:
            card = card.groups()[0]
            if not card:
                card = ''
        else:
            card = ''
    # Calculate hover text
    hover_txt = get_docs(card, section=section)
    # If card is not blank and not a comment, find hover text
    if "$" not in line or line != "":
        # Only provide hover if cursor is near or on top of card
        logic = (params.position.character >= line.index(card))
        logic = logic and (params.position.character  <= line.index(card)+len(card))
        if logic:
            contents = MarkupContent(kind=MarkupKind.Markdown, value=hover_txt)
            # contents = MarkupContent(kind=MarkupKind.Markdown, value=card)
            # contents = MarkupContent(kind=MarkupKind.Markdown, value=section)
            return Hover(contents=contents)
    return None

@server.feature(
    TEXT_DOCUMENT_SEMANTIC_TOKENS_FULL,
    SemanticTokensLegend(
        token_types=["field", "subs", "dmap", "file"],
        token_modifiers=[],
    )
)
def semantic_tokens(params: SemanticTokensParams) -> SemanticTokens:
    """Semantic token provider

    Args:
        params (SemanticTokensParams): Semantic token params from extension

    Returns:
        SemanticTokens: Semantic token type
    """
    # Acquire document
    doc = server.workspace.get_document(params.text_document.uri)
    
    # Initialize counters and SemanticToken data
    last_line = 0
    last_start = 0
    data = []
    
    # For each line in the document...
    for lineno, line in enumerate(doc.lines):
        # Determine the section of current line
        section = get_section(line, doc.lines)
        last_start = 0
        # Process the BULK section
        # Ignore comments and lines with free format (comma separated)
        if section == "BULK" and not line.lstrip().startswith('$') and "," not in line and "'" not in line and '\t' not in line:
            # Determine long or short field
            if line.startswith('*'):
                count = 1
                parent = doc.lines[lineno-count]
                while parent.startswith('*'):
                    count += 1
                    parent = doc.lines[lineno-count]
                n = 16 if "*" in parent else 8
            else:
                n = 16 if "*" in line else 8
            # Split the line by fields
            bulk_line_end = len(line) if len(line)<108 else 108
            if '$' in line:
                bulk_line_end = line.index('$')
            line_by_fields = [line[i:i+n] for i in range(0, bulk_line_end, n)]
            for i, _ in enumerate(line_by_fields[2::2]):
                start = 2*n*(i)+n+8
                end = start + n
                # Save SemanticToken data
                data += [
                    (lineno - last_line),
                    (start - last_start),
                    (end - start),
                    0,
                    0
                ]
                last_line = lineno
                last_start = start
        # Process file:// detection
        if 'file://' in line:
            start = line.index('file://')
            end = len(line)-1
            # Save SemanticToken data
            data += [
                (lineno - last_line),
                (start - last_start),
                (end - start),
                3,
                0
            ]
            last_line = lineno
            last_start = start
                
        # Process DMAP section
        if section == "DMAP":
            # Skip comments and ALTER lines
            if line.lstrip()[0] != "$":
                if "ALTER" not in line:
                    # Find end of DMAP card
                    start = len(line) - len(line.lstrip())
                    # Find end of DMAP card
                    end = min([line.lstrip().index(char) for char in ["\n", " ", "=", "("] if char in line.lstrip()])+start
                    # Save SemanticToken data
                    data += [
                        (lineno - last_line),
                        (start - last_start),
                        (end - start),
                        2,
                        0
                    ]
                    last_line = lineno
                    last_start = start

    return SemanticTokens(data=data)

# Start server
server.start_io()
