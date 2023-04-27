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
    """Subclass of pygls LanguageServer"""

    CONFIGURATION_SECTION = "nastranServer"

    def __init__(self, *args):
        super().__init__(*args)

# Initialize server class
server = NastranLanguageServer("NastranLanguageServer", "v0.1")

def find_section(lines: list, section: str) -> Optional[int]:
    """Finds line with given section divider token.

    Args:
        lines (list): List of all lines as strings in current file
        section (str): Section divider token

    Returns:
        Optional[int]: Index of section divider if found otherwise None
    """
    ind = [i for i, line in enumerate(lines) if line.lstrip().upper().startswith(section)]
    return ind[0] if ind else None

def detect_section(line: int, ind: dict) -> str:
    """Determines the section the provided line is in

    Args:
        line (int): Index of the current line
        ind (dict): Dictionary containing all section divider indeces found

    Returns:
        str: Section the current line is in
    """
    # If CEND and BEGIN BULK exist in file, assume at least EXEC,
    # CASE, and BULK sections exist.
    if ind["CEND"] and ind["BEGIN BULK"]:
        # Detect DMAP section
        if ind["ALTER"] and ind["ENDALTER"]:
            if line > ind["ALTER"] and line < ind["ENDALTER"]:
                return "DMAP"
        # Detect EXEC section
        if line <= ind["CEND"]:
            return "EXEC"
        # Detect SUBS section
        if ind["SUBSTRUCTURE"] and ind["ENDSUBS"]:
            if line >= ind["SUBSTRUCTURE"] and line <= ind["ENDSUBS"]:
                return "SUBS"
        # Detect CASE section
        if line <= ind["BEGIN BULK"] and line >= ind["CEND"]:
            return "CASE"
    # Assume BULK section
    return "BULK"

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
    orig_line = doc.lines[params.position.line]
    # Strip leading white space and grab first 8 characters
    # TODO: Change logic such that it grabs more than 8 characters?
    card = orig_line.lstrip()[:8]
    # If special character detected, strip everything after that character
    for char in [",", "*", " ", "=", "\n", "("]:
        if char in card:
            card = card.split(char)[0]
    # If card is not blank and not a comment, find hover text
    if "$" not in card or card != "":
        # Only provide hover if cursor is near or on top of card
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

@server.feature(
    TEXT_DOCUMENT_SEMANTIC_TOKENS_FULL,
    SemanticTokensLegend(
        token_types=["field", "subs", "dmap"],
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
    # For each line in the document...
    for lineno, line in enumerate(doc.lines):
        # Determine the section of current line
        section = detect_section(lineno, ind)
        last_start = 0
        # Process the BULK section
        # Ignore comments and lines with free format (comma separated)
        if section == "BULK" and "$" not in line.lstrip() and "," not in line and "'" not in line and '\t' not in line:
            # Determine if long or short format
            n = 16 if "*" in line else 8
            # Split the line by fields
            line_by_fields = [line[i:i+n] for i in range(0, len(line), n)]
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
