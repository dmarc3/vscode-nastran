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

def get_docs(card: str, section: str, line: str) -> str:
    """Retrieves documentation for given Nastran entry and specified section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str, optional): Section the entry belongs to to specifically
                                 search. Defaults to ''.

    Returns:
        str: Documentation for Nastran entry
    """
    out = ''
    # Search for full card name
    filename = os.path.join('utils', 'docs', section, card+'.md')
    if 'PARAM' in line.upper() and card.upper() != 'PARAM':
        filename = os.path.join('utils', 'docs', section, 'PARAM', card+'.md')
        if os.path.exists(filename):
            out = open(filename, 'r', encoding='utf-8').read()
            return out
    else:
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

    return out

def get_completion_item(text: str) -> str:
    try:
        example = text.split('```nastran\n', 1)[1].split('```\n', 1)[0]
        out = '\n'.join(example.split('\n')[1:]).strip()+'\n'
        if ' See ' in out:
            out=''
    except IndexError:
        out=''
    return out

if __name__ == "__main__":
    # Used for debugging
    print(get_completion_item(get_docs('GRID')))