import os

def get_docs(card: str, section='') -> str:
    """Retrieves documentation for given Nastran entry and specified section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str, optional): Section the entry belongs to to specifically
                                 search. Defaults to ''.

    Returns:
        str: Documentation for Nastran entry
    """
    # If section provided, search that section
    if section:
        out = read_docs(card, section)
    else:
        # If section not provided, search in this order till entry is found
        for section in ["BULK", "CASE", "EXEC", "SUBS", "DMAP", "PLOT"]:
            out = read_docs(card, section)
            if out:
                break
    # If documentation found, convert to markdown otherwise return empty string
    return convert_to_markdown(out) if out else out

def read_docs(card: str, section: str) -> str:
    """Parse NASTRAN-95 documentation given Nastran entry and section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str): Section the entry belongs to to specifically
                       search.

    Returns:
        str: Documentation for Nastran entry
    """
    # Ignore hover for comment
    if card == "$":
        return ''
    # Read raw NASTRAN-95 documentation
    with open(file=os.path.join("utils", "um", f"{section}.TXT"), mode="r") as f:
        lines = f.read()
    # Remove unknown characters
    lines = lines.replace("Ä","─")
    lines = lines.replace("Å","┼")
    lines = lines.replace("Â","┬")
    lines = lines.replace("³","│").replace("º","│")
    lines = lines.replace("Á","┴")
    lines = lines.replace("Ú","┌").replace("É","┌")
    lines = lines.replace("Ã","├")
    lines = lines.replace("À","└").replace("È","└")
    lines = lines.replace("¿","┐").replace("»","┐")
    lines = lines.replace("´","┤")
    lines = lines.replace("Ù","┘").replace("¼","┘")
    lines = lines.replace("é", "θ")
    lines = lines.replace("è", "φ").replace("í", "φ")
    lines = lines.replace("à", "α")
    # Split by =PAGE=
    lines = lines.split("=PAGE=\n")
    # Find index of desired card
    ind = [i for i, line in enumerate(lines) if line.startswith(card.upper())]
    # If not found, try trimming last char
    # (i.e. PDUM1 needs to use PDUMi documetation -> search for PDUM)
    if not ind:
        ind = [i for i, line in enumerate(lines) if line.startswith(card.upper()[:-1])]
    # TODO: Add logic to search all found cards and return the closest match
    #       instead of simply the first match
    return lines[ind[0]] if ind else ''

def convert_to_markdown(lines: str) -> str:
    return f"```text\n{lines}```"

if __name__ == "__main__":
    # Used for debugging
    os.chdir('..')
    print(get_docs('ALTER'))