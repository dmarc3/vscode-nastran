from pygls.server import LanguageServer
from lsprotocol.types import (
    TEXT_DOCUMENT_HOVER,
    Hover,
    HoverParams,
    MarkupContent,
    MarkupKind,
)
from mscqrg.bulk_data import BULK_DATA

class NastranLanguageServer(LanguageServer):

    CONFIGURATION_SECTION = 'nastranServer'

    def __init__(self, *args):
        super().__init__(*args)

server = NastranLanguageServer("NastranLanguageServer", "v0.1")

@server.feature(TEXT_DOCUMENT_HOVER)
async def hovers(ls: NastranLanguageServer, params: HoverParams):
    # ls.show_message(f"file: {params.text_document.uri}; line: {params.position.line}; character: {params.position.character}")
    if params.position.character < 8:
        document = server.workspace.get_document(params.text_document.uri)
        card = document.word_at_position(params.position)
        docs = BULK_DATA(card)
        contents = MarkupContent(kind=MarkupKind.Markdown, value=str(docs))
        return Hover(contents=contents)

server.start_io()
