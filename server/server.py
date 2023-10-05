from typing import Optional
import os, re

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
    TEXT_DOCUMENT_FOLDING_RANGE,
    FoldingRange,
    FoldingRangeOptions,
    FoldingRangeParams,
)

from utils.read_docs import get_docs, get_completion_item, SECTION_KEY
from utils.parse_file import get_section, exec_regex, REGEX_KEY

class NastranLanguageServer(LanguageServer):
    """Subclass of pygls LanguageServer"""

    CONFIGURATION_SECTION = "nastranServer"

    def __init__(self, *args):
        super().__init__(*args)

# Initialize server class
server = NastranLanguageServer("NastranLanguageServer", "v1.0.6")

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
    if not doc.uri.endswith('.f06'):
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
                card = exec_regex(re.match, REGEX_KEY[section], line)
            else:
                card = exec_regex(re.search, REGEX_KEY['PARAM'], line)
        else:
            card = exec_regex(re.match, REGEX_KEY[section], line)
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
    TEXT_DOCUMENT_SEMANTIC_TOKENS_RANGE,
    SemanticTokensLegend(
        token_types=["field", "subs", "dmap", "file", "comments"],
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
    
    # Initialize counters and SemanticToken data
    last_line = 0
    last_start = 0
    data = []
    
    if doc.uri.endswith('.f06'):
        # For each line in the current range...
        for lineno in range(params.range.start.line, params.range.end.line):
            line = doc.lines[lineno]
            # Comment lines only
            if '$' in line:
                # Save SemanticToken data
                data += [
                    lineno-last_line,
                    line.index('$'),
                    len(line)-1,
                    4,
                    0
                ]
                last_line = lineno
    else:
        # For each line in the current range...
        for lineno in range(params.range.start.line, params.range.end.line):
            line = doc.lines[lineno]
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
                    
            # # Process DMAP section
            # if section == "DMAP":
            #     # Skip comments and ALTER lines
            #     if line.lstrip()[0] != "$":
            #         if "ALTER" not in line:
            #             # Find end of DMAP card
            #             start = len(line) - len(line.lstrip())
            #             # Find end of DMAP card
            #             end = min([line.lstrip().index(char) for char in ["\n", " ", "=", "("] if char in line.lstrip()])+start
            #             # Save SemanticToken data
            #             data += [
            #                 (lineno - last_line),
            #                 (start - last_start),
            #                 (end - start),
            #                 2,
            #                 0
            #             ]
            #             last_line = lineno
            #             last_start = start

    return SemanticTokens(data=data)

@server.feature(TEXT_DOCUMENT_COMPLETION)
def completions(params: CompletionParams) -> CompletionList:
    doc = server.workspace.get_document(params.text_document.uri)
    if not doc.uri.endswith('.f06'):
        line = doc.lines[params.position.line].strip()
        items = []
        for card in SECTION_KEY['BULK']:
            if card.startswith(line.upper()):
                items.append(CompletionItem(label=get_completion_item(get_docs(card, 'BULK'))))
        return CompletionList(is_incomplete=True, items=items)

@server.feature(
    TEXT_DOCUMENT_FOLDING_RANGE,
    FoldingRangeOptions(),
    )
def folding(params: FoldingRangeParams) -> Optional[FoldingRange]:
    doc = server.workspace.get_document(params.text_document.uri)
    fold = []
    # Folding logic for *.f06 files
    if doc.language_id is 'f06':
        ind = [[i-1, i] for i, line in enumerate(doc.lines) if line.startswith('1')]
        ind[0] = [0]
        ind[-1] = ind[-1]+[len(doc.lines)-1]
        ind = [item for sublist in ind for item in sublist]
        for start, end in zip(*[iter(ind)]*2):
            # Add 5 line buffer to all PAGE sections
            if 'PAGE' in doc.lines[start]:
                start += 5
            fold.append(
                FoldingRange(
                    start_line=start,
                    end_line=end,
                    start_character=1,
                    end_character=1,
                )
            )
        return fold
    # elif doc.language_id is 'nastran':
    #     white_space = [len(line) - len(line.lstrip()) for line in doc.lines]
    #     ind = [i-1 for i in range(1, len(white_space)) if white_space[i] != white_space[i-1]]
    #     for start, end in zip(*[iter(ind)]*2):
    #         fold.append(
    #             FoldingRange(
    #                 start_line=start,
    #                 end_line=end,
    #                 start_character=1,
    #                 end_character=1,
    #             )
    #         )
    #     return fold
    return None


def main():
    # Start server
    server.start_io()
    
if __name__ == "__main__":
    main()
