from typing import Optional

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

class NastranLanguageServer(LanguageServer):

    CONFIGURATION_SECTION = 'nastranServer'

    def __init__(self, *args):
        super().__init__(*args)

server = NastranLanguageServer("NastranLanguageServer", "v0.1")

def find_section(lines: list, section: str) -> Optional[int]:
    ind = [i for i, line in enumerate(lines) if line.lstrip().upper().startswith(section)]
    return ind[0] if ind else None

def detect_section(line: int, ind: dict) -> str:
    # If CEND and BEGIN BULK exist in file, assume at least EXEC,
    # CASE, and BULK sections exist.
    if ind['CEND'] and ind['BEGIN BULK']:
        # Detect DMAP section
        if ind['ALTER'] and ind['ENDALTER']:
            if line > ind['ALTER'] and line < ind['ENDALTER']:
                return 'DMAP'
        # Detect EXEC section
        if line <= ind['CEND']:
            return 'EXEC'
        # Detect SUBS section
        if ind['SUBSTRUCTURE'] and ind['ENDSUBS']:
            if line >= ind['SUBSTRUCTURE'] and line <= ind['ENDSUBS']:
                return 'SUBS'
        # Detect CASE section
        if line <= ind['BEGIN BULK'] and line >= ind['CEND']:
            return 'CASE'
    # Assume BULK section
    return 'BULK'

@server.feature(TEXT_DOCUMENT_HOVER)
async def hovers(ls: NastranLanguageServer, params: HoverParams) -> Optional[Hover]:
    # ls.show_message(f"file: {params.text_document.uri}; line: {params.position.line}; character: {params.position.character}")
    doc = server.workspace.get_document(params.text_document.uri)
    orig_line = doc.lines[params.position.line]
    card = orig_line.lstrip()[:8]
    for char in [',', '*', ' ', '=', '\n', '(']:
        if char in card:
            card = card.split(char)[0]
    if '$' not in card or card != '':
        logic = (params.position.character >= orig_line.index(card))
        logic = logic and (params.position.character  <= orig_line.index(card)+len(card))
        if logic:
            # Find what section of Nastran file cursor is at
            ind = {
                "ID": find_section(doc.lines, "ID"),
                "ALTER": find_section(doc.lines, "ALTER"),
                "ENDALTER": find_section(doc.lines, "ENDALTER"),
                "CEND": find_section(doc.lines, "CEND"),
                "SUBSTRUCTURE": find_section(doc.lines, "SUBSTRUCTURE"),
                "ENDSUBS": find_section(doc.lines, "ENDSUBS"),
                "BEGIN BULK": find_section(doc.lines, "BEGIN BULK"),
            }
            section = detect_section(params.position.line, ind)
            # Calculate hover text
            hover_txt = get_docs(card, section=section)
            if not hover_txt:
                hover_txt = get_docs(card)
            contents = MarkupContent(kind=MarkupKind.Markdown, value=hover_txt)
            return Hover(contents=contents)
    return None

# Derived from:
# https://github.com/openlawlibrary/pygls/blob/master/examples/json-vscode-extension/server/server.py
@server.feature(
    TEXT_DOCUMENT_SEMANTIC_TOKENS_FULL,
    SemanticTokensLegend(
        token_types=["field", "subs", "dmap"],
        token_modifiers=[],
    )
)
def semantic_tokens(ls: NastranLanguageServer, params: SemanticTokensParams):
    """Used to signal to the client that we support semantic tokens."""

    uri = params.text_document.uri
    doc = ls.workspace.get_document(uri)
    
    last_line = 0
    last_start = 0
    
    data = []
    
    # Find section designators
    ind = {
        "ID": find_section(doc.lines, "ID"),
        "ALTER": find_section(doc.lines, "ALTER"),
        "ENDALTER": find_section(doc.lines, "ENDALTER"),
        "CEND": find_section(doc.lines, "CEND"),
        "SUBSTRUCTURE": find_section(doc.lines, "SUBSTRUCTURE"),
        "ENDSUBS": find_section(doc.lines, "ENDSUBS"),
        "BEGIN BULK": find_section(doc.lines, "BEGIN BULK"),
    }
    for lineno, line in enumerate(doc.lines):
        section = detect_section(lineno, ind)
        last_start = 0
        if section == 'BULK' and '$' not in line.lstrip() and ',' not in line:
            if '*' in line:
                n = 16
            else:
                n =  8
            line_by_fields = [line[i:i+n] for i in range(0, len(line), n)]
            for i, _ in enumerate(line_by_fields[2::2]):
                start = 2*n*(i)+n+8
                end = start + n
                data += [
                    (lineno - last_line),
                    (start - last_start),
                    (end - start),
                    0,
                    0
                ]
                last_line = lineno
                last_start = start
                
        if section == 'SUBS':
            if 'ENDSUBS' not in line and 'SUBSTRUCTURE' not in line:
                start = len(line) - len(line.lstrip())
                end = min([line.lstrip().index(char) for char in ['\n', ' ', '=', '('] if char in line.lstrip()])+start
                data += [
                    (lineno - last_line),
                    (start - last_start),
                    (end - start),
                    1,
                    0
                ]
                last_line = lineno
                last_start = start
        
        if section == 'DMAP':
            if line.lstrip()[0] != '$':
                if 'ALTER' not in line:
                    start = len(line) - len(line.lstrip())
                    end = min([line.lstrip().index(char) for char in ['\n', ' ', '=', '('] if char in line.lstrip()])+start
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

server.start_io()
