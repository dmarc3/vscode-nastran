import os
from glob import glob

# Build section dict
SECTIONS = ['FMS', 'EXEC', 'CASE', 'BULK']
SECTION_KEY = {}
for section in SECTIONS:
    files = glob(os.path.join('utils', 'docs', section, '*.md'))
    if section == 'BULK':
        files += glob(os.path.join('utils', 'docs', section, 'PARAM', '*.md'))
    if section == 'CASE':
        files += glob(os.path.join('utils', 'docs', section, 'PLOT', '*.md'))
    cards = [os.path.basename(os.path.splitext(file)[0]) for file in files]
    SECTION_KEY[section] = cards

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
        for section in ["FMS", "EXEC", "CASE", "BULK"]:
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
    if section not in SECTION_KEY:
        return out
    # Search for full card name
    filename = os.path.join('utils', 'docs', section, card+'.md')
    if os.path.exists(filename):
        out = open(filename, 'r', encoding='utf-8').read()
        return out
    elif section == 'BULK':
        filename = os.path.join('utils', 'docs', section, 'PARAM', card+'.md')
        if os.path.exists(filename):
            out = open(filename, 'r', encoding='utf-8').read()
            return out
    elif section == 'CASE':
        filename = os.path.join('utils', 'docs', section, 'PLOT', card+'.md')
        if os.path.exists(filename):
            out = open(filename, 'r', encoding='utf-8').read()
            return out
    # Search for partial card name
    if any([name for name in SECTION_KEY[section] if name.startswith(card)]):
        for name in SECTION_KEY[section]:
            if name.startswith(card) and '$' not in name:
                card = name
                break
        filename = os.path.join('utils', 'docs', section, card+'.md')
        if os.path.exists(filename):
            out = open(filename, 'r', encoding='utf-8').read()
        elif section == 'BULK':
            filename = os.path.join('utils', 'docs', section, 'PARAM', card+'.md')
            if os.path.exists(filename):
                out = open(filename, 'r', encoding='utf-8').read()
        elif section == 'CASE':
            filename = os.path.join('utils', 'docs', section, 'PLOT', card+'.md')
            if os.path.exists(filename):
                out = open(filename, 'r', encoding='utf-8').read()

    return out

if __name__ == "__main__":
    # Used for debugging
    print(read_MSC_Nastran_docs('CSCALE', 'CASE'))