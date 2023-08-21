from typing import Optional
import os
from glob import glob

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

from utils.read_docs import get_docs

# Build section dict
SECTIONS = ['FMS', 'EXEC', 'CASE', 'BULK']
SECTION_KEY = {}
for section in SECTIONS:
    files = glob(os.path.join('utils', 'docs', 'MSC_Nastran', section, '*.md'))
    cards = [os.path.basename(os.path.splitext(file)[0]) for file in files]
    SECTION_KEY[section] = cards

class NastranLanguageServer(LanguageServer):
    """Subclass of pygls LanguageServer"""

    CONFIGURATION_SECTION = "nastranServer"

    def __init__(self, *args):
        super().__init__(*args)

# Initialize server class
server = NastranLanguageServer("NastranLanguageServer", "v0.1")

def get_section(line, lines):
    # Determine index of current line
    ind = lines.index(line)
    # Strip to left of string
    raw = line.lstrip()
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

    return ''

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
    # Strip leading white space
    card = line.lstrip()

    # If special character detected, strip everything after that character
    for char in [",", "*", " ", "=", "\n", "("]:
        if char in card:
            card = card.split(char)[0].strip()
    # If card is not blank and not a comment, find hover text
    if "$" not in card or card != "":
        # Only provide hover if cursor is near or on top of card
        logic = (params.position.character >= line.index(card))
        logic = logic and (params.position.character  <= line.index(card)+len(card))
        if logic:
            # Find what section of Nastran file cursor is at
            section = get_section(line, doc.lines)
            # Calculate hover text
            hover_txt = get_docs(card, section=section)
            contents = MarkupContent(kind=MarkupKind.Markdown, value=hover_txt)
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
            # Determine if long or short format
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
                
        # Process the SUBSTRUCTURE section
        if section == "SUBS":
            # Skip ENDSUBS and SUBTRUCTURE cards
            if "ENDSUBS" not in line and "SUBSTRUCTURE" not in line:
                # Find start of SUBTRUCTURE card
                start = len(line) - len(line.lstrip())
                # Find end of SUBTRUCTURE card
                end = min([line.lstrip().index(char) for char in ["\n", " ", "=", "("] if char in line.lstrip()])+start
                # Save SemanticToken data
                data += [
                    (lineno - last_line),
                    (start - last_start),
                    (end - start),
                    1,
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
