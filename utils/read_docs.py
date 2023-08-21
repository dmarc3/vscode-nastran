import os
from glob import glob

# Build section dict
MSC_SECTIONS = ['FMS', 'EXEC', 'CASE', 'BULK']
MSC_SECTION_KEY = {}
for section in MSC_SECTIONS:
    files = glob(os.path.join('utils', 'docs', 'MSC_Nastran', section, '*.md'))
    cards = [os.path.basename(os.path.splitext(file)[0]) for file in files]
    MSC_SECTION_KEY[section] = cards

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
        out = read_MSC_Nastran_docs(card, section)
    else:
        # If section not provided, search in this order till entry is found
        for section in ["FMS", "EXEC", "SUBS", "DMAP", "PLOT", "CASE", "BULK"]:
            out = read_MSC_Nastran_docs(card, section)
            if out:
                break
    return out

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
    print(get_docs('ALTER', section='EXEC'))