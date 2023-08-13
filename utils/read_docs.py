import os
from glob import glob

# Build section dict
MSC_SECTIONS = ['FMS', 'EXEC', 'CASE', 'BULK']
MSC_SECTION_KEY = {}
for section in MSC_SECTIONS:
    files = glob(os.path.join('utils', 'docs', 'MSC_Nastran', section, '*.md'))
    cards = [os.path.basename(os.path.splitext(file)[0]) for file in files]
    MSC_SECTION_KEY[section] = cards

def get_docs(card: str, section='', version='NASTRAN-95') -> str:
    """Retrieves documentation for given Nastran entry and specified section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str, optional): Section the entry belongs to to specifically
                                 search. Defaults to ''.

    Returns:
        str: Documentation for Nastran entry
    """
    funcs = {
        'NASTRAN-95': read_NASTRAN_95_docs,
        'MSC Nastran': read_MSC_Nastran_docs,
    }
    # If section provided, search that section
    if section:
        out = funcs[version](card, section)
    else:
        # If section not provided, search in this order till entry is found
        for section in ["FMS", "EXEC", "SUBS", "DMAP", "PLOT", "CASE", "BULK"]:
            out = funcs[version](card, section)
            if out:
                break
    # If documentation found, convert to markdown otherwise return empty string
    if version == 'NASTRAN-95':
        out = convert_to_markdown(out) if out else out
    return out

def read_NASTRAN_95_docs(card: str, section: str) -> str:
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
    with open(file=os.path.join("utils", "docs", "NASTRAN-95", f"{section}.TXT"), mode="r") as f:
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

def read_MSC_Nastran_docs(card: str, section: str) -> str:
    """Parse MSC Nastran documentation given Nastran entry and section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str): Section the entry belongs to to specifically
                       search.

    Returns:
        str: Documentation for Nastran entry
    """
    out = ''
    # No section
    if section not in MSC_SECTION_KEY:
        return out
    # Search for full card name
    filename = os.path.join('utils', 'docs', 'MSC_Nastran', section, card+'.md')
    if os.path.exists(filename):
        out = open(filename, 'r', encoding='utf-8').read()
    # Search for partial card name
    elif any([name for name in MSC_SECTION_KEY[section] if name.startswith(card)]):
        for name in MSC_SECTION_KEY[section]:
            if name.startswith(card) and '$' not in name:
                card = name
                break
        filename = os.path.join('utils', 'docs', 'MSC_Nastran', section, card+'.md')
        if os.path.exists(filename):
            out = open(filename, 'r', encoding='utf-8').read()

    return out

def convert_to_markdown(lines: str) -> str:
    return f"```text\n{lines}```"

if __name__ == "__main__":
    # Used for debugging
    os.chdir('..')
    print(get_docs('ALTER', section='EXEC', version='MSC Nastran'))