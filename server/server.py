from typing import Optional
import os
import re

from pygls.server import LanguageServer
from lsprotocol.types import (
    TEXT_DOCUMENT_HOVER,
    Hover,
    HoverParams,
    MarkupContent,
    MarkupKind,
    TEXT_DOCUMENT_SEMANTIC_TOKENS_RANGE,
    SemanticTokensLegend,
    SemanticTokensRangeParams,
    SemanticTokens,
    SemanticTokensPartialResult,
    TEXT_DOCUMENT_COMPLETION,
    CompletionItem,
    CompletionList,
    CompletionParams,
)

from utils.read_docs import get_docs, get_completion_item, SECTION_KEY
from utils.parse_file import get_section, exec_regex, REGEX_KEY

class NastranLanguageServer(LanguageServer):
    """Subclass of pygls LanguageServer"""
    CMD_GET_INCLUDES = "custom/getIncludes"
    CMD_GET_SECTIONS = "custom/getSections"
    CMD_GET_LINES = "custom/getLines"

    CONFIGURATION_SECTION = "nastranServer"

    def __init__(self, *args):
        super().__init__(*args)
        self.includes = []
        self.sections = None

# Initialize server class
server = NastranLanguageServer("NastranLanguageServer", "v1.0.10")

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
    # Find index of include file
    filename = os.path.basename(params.text_document.uri)
    for include in server.includes:
        if include.endswith(filename):
            break
    line = doc.lines[params.position.line]
    # Find what section of Nastran file cursor is at
    section = get_section(server, include, params.position.line)
    # Execute regex search
    if section == 'BULK' and 'PARAM' in line.lstrip().upper():
        # Process PARAM
        logic = (params.position.character >= line.upper().index('PARAM')) and (params.position.character <= line.upper().index('PARAM')+len('PARAM'))
        if logic:
            card = exec_regex(re.match, REGEX_KEY[section], line)
        else:
            card = exec_regex(re.search, REGEX_KEY['PARAM'], line)
    else:
        card = exec_regex(re.match, REGEX_KEY[section], line)
    # Calculate hover text
    hover_txt = get_docs(card, section=section, line=line) if card else ''
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
    TEXT_DOCUMENT_SEMANTIC_TOKENS_RANGE,
    SemanticTokensLegend(
        token_types=["field", "subs", "dmap", "file"],
        token_modifiers=[],
    )
)
def semantic_tokens(params: SemanticTokensRangeParams) -> SemanticTokensPartialResult:
    """Semantic token provider

    Args:
        params (SemanticTokensParams): Semantic token params from extension

    Returns:
        SemanticTokens: Semantic token type
    """
    # Acquire document
    doc = server.workspace.get_document(params.text_document.uri)
    # Find index of include file
    filename = os.path.basename(params.text_document.uri)
    include_no = 0
    for include_no, include in enumerate(server.includes):
        if include.endswith(filename):
            break
    
    # Initialize counters and SemanticToken data
    last_line = 0
    last_start = 0
    data = []
    
    # For each line in the current range...
    for line_no in range(params.range.start.line, params.range.end.line):
        line = doc.lines[line_no]
        # Determine the section of current line
        section = get_section(server, include, line_no)
        last_start = 0
        # Process the BULK section
        # Ignore comments and lines with free format (comma separated)
        if section == "BULK" and not line.lstrip().startswith('$') and "," not in line and "'" not in line and '\t' not in line:
            # Determine long or short field
            if line.startswith('*'):
                count = 1
                parent = doc.lines[line_no-count]
                while parent.startswith('*'):
                    count += 1
                    parent = doc.lines[line_no-count]
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
                    (line_no - last_line),
                    (start - last_start),
                    (end - start),
                    0,
                    0
                ]
                last_line = line_no
                last_start = start
        elif section == "BULK" and not line.lstrip().startswith('$') and "," in line:
            # Split the line by fields
            line_by_fields = line.split(",")
            for i, field in enumerate(line_by_fields[2::2]):
                start = line.index(field)
                end = start + len(field)
                data += [
                    (line_no - last_line),
                    (start - last_start),
                    (end - start),
                    0,
                    0
                ]
                last_line = line_no
                last_start = start
        elif section == "BULK" and not line.lstrip().startswith('$') and "\t" in line:
            # Split the line by fields
            line_by_fields = line.split("\t")
            for i, field in enumerate(line_by_fields[2::2]):
                start = line.index(field)
                end = start + len(field)
                data += [
                    (line_no - last_line),
                    (start - last_start),
                    (end - start),
                    0,
                    0
                ]
                last_line = line_no
                last_start = start
        # Process file:// detection
        if 'file://' in line:
            start = line.index('file://')
            end = len(line)-1
            # Save SemanticToken data
            data += [
                (line_no - last_line),
                (start - last_start),
                (end - start),
                3,
                0
            ]
            last_line = line_no
            last_start = start

    return SemanticTokens(data=data)

@server.feature(TEXT_DOCUMENT_COMPLETION)
def completions(params: CompletionParams) -> CompletionList:
    doc = server.workspace.get_document(params.text_document.uri)
    line = doc.lines[params.position.line].strip()
    items = []
    for card in SECTION_KEY['BULK']:
        if card.startswith(line.upper()):
            items.append(CompletionItem(label=get_completion_item(get_docs(card, 'BULK', line))))
    return CompletionList(is_incomplete=True, items=items)

@server.feature(NastranLanguageServer.CMD_GET_INCLUDES)
def get_includes(includes: list):
    # Get include files from client
    server.includes = includes[0]

@server.feature(NastranLanguageServer.CMD_GET_SECTIONS)
def get_sections(sections):
    # Get sections from client
    server.sections = sections

@server.feature(NastranLanguageServer.CMD_GET_LINES)
def get_lines(lines):
    # Get lines from client
    server.lines = lines[0]

# Start server
server.start_io()
