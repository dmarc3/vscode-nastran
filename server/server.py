import os
from pygls.server import LanguageServer
from lsprotocol.types import (
    TEXT_DOCUMENT_HOVER,
    Hover,
    HoverParams,
    MarkupContent,
    MarkupKind,
)
# from mscqrg.bulk_data import BULK_DATA

class NastranLanguageServer(LanguageServer):

    CONFIGURATION_SECTION = 'nastranServer'

    def __init__(self, *args):
        super().__init__(*args)

server = NastranLanguageServer("NastranLanguageServer", "v0.1")

@server.feature(TEXT_DOCUMENT_HOVER)
async def hovers(ls: NastranLanguageServer, params: HoverParams):
    # ls.show_message(f"file: {params.text_document.uri}; line: {params.position.line}; character: {params.position.character}")
    document = server.workspace.get_document(params.text_document.uri)
    current_line = document.lines[params.position.line]
    card = current_line[:8]
    if ',' in card:
        card = card.split(',')[0]
    if '*' in card:
        card = card.split('*')[0]
    if '$' not in card or card != '':
        if params.position.character < 8:
            with open(os.path.join(os.path.dirname(__file__), '..', 'utils', 'hovers', card.strip()+'.md'), 'r') as f:
                docs = f.readlines()
            docs = ''.join(docs)
            contents = MarkupContent(kind=MarkupKind.Markdown, value=docs)
            return Hover(contents=contents)

server.start_io()
