import os
import string
import re

def get_docs(card: str, section='') -> str:
    if section:
        out = read_docs(card, section)
    else:
        for section in ['BULK', 'CASE', 'EXEC', 'SUBS', 'DMAP', 'PLOT']:
            out = read_docs(card, section)
            if out:
                break
    return convert_to_markdown(out)

def read_docs(card: str, section: str) -> str:
    # Read raw NASTRAN-95 documentation
    with open(file=os.path.join('utils', 'um', section+'.TXT'), mode='r') as f:
        lines = f.read()
    # Remove unknown characters
    lines = re.sub('[^'+string.printable+']+', ' ', lines)
    # Split by =PAGE=
    lines = lines.split('=PAGE=\n')
    # Find index of desired card
    ind = [i for i, line in enumerate(lines) if line.startswith(card.upper())]
    return lines[ind[0]] if ind else ''

def convert_to_markdown(lines: str) -> str:
        return f"```text\n{lines}\n```" if lines else ''

if __name__ == "__main__":
    os.chdir('..')
    print(get_docs('GRID'))