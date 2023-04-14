from typing import Optional
from pygls.server import LanguageServer
from lsprotocol.types import (
    TEXT_DOCUMENT_HOVER,
    Hover,
    HoverParams,
    MarkupContent,
    MarkupKind,
)
from utils.read_docs import get_docs

class NastranLanguageServer(LanguageServer):

    CONFIGURATION_SECTION = 'nastranServer'

    def __init__(self, *args):
        super().__init__(*args)

server = NastranLanguageServer("NastranLanguageServer", "v0.1")

def find_cend(lines: list) -> Optional[int]:
    ind = [i for i, line in enumerate(lines) if line.lstrip().upper().startswith('CEND')]
    return ind[0] if ind else None

def find_bbulk(lines: list) -> Optional[int]:
    ind = [i for i, line in enumerate(lines) if line.lstrip().upper().startswith('BEGIN BULK')]
    return ind[0] if ind else None

def find_endsubs(lines: list) -> Optional[int]:
    ind = [i for i, line in enumerate(lines) if line.lstrip().upper().startswith('ENDSUBS')]
    return ind[0] if ind else None

def find_section(ind: int,
                 cend: Optional[int],
                 bbulk: Optional[int],
                 endsubs: Optional[int]) -> str:
    if cend:
        if ind <= cend:
            return 'EXEC'
    if endsubs:
        if ind <= endsubs:
            return 'SUBS'
    if bbulk:
        if ind <= bbulk:
            return 'CASE'
    return ''

@server.feature(TEXT_DOCUMENT_HOVER)
async def hovers(ls: NastranLanguageServer, params: HoverParams):
    # ls.show_message(f"file: {params.text_document.uri}; line: {params.position.line}; character: {params.position.character}")
    document = server.workspace.get_document(params.text_document.uri)
    current_line = document.lines[params.position.line]
    current_line = current_line.lstrip()
    card = current_line[:8]
    for char in [',', '*', ' ', '=']:
        if char in card:
            card = card.split(char)[0]
    if '$' not in card or card != '':
        if params.position.character < 8:
            # Find what section of Nastran file cursor is at
            cend = find_cend(document.lines)
            bbulk = find_bbulk(document.lines)
            endsubs = find_endsubs(document.lines)
            section = find_section(params.position.line, cend, bbulk, endsubs)
            # Calculate hover text
            hover_txt = get_docs(card, section=section)
            if not hover_txt:
                hover_txt = get_docs(card)
            contents = MarkupContent(kind=MarkupKind.Markdown, value=hover_txt)
            # contents = MarkupContent(kind=MarkupKind.Markdown, value=section)
            return Hover(contents=contents)

server.start_io()
