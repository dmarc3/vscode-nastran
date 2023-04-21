import os

def get_docs(card: str, section='') -> str:
    if section:
        out = read_docs(card, section)
    else:
        for section in ['BULK', 'CASE', 'EXEC', 'SUBS', 'DMAP', 'PLOT']:
            out = read_docs(card, section)
            if out:
                break
    return convert_to_markdown(out) if out else out

def read_docs(card: str, section: str) -> str:
    # Ignore hover for comment
    if card == '$':
        return ''
    # Read raw NASTRAN-95 documentation
    with open(file=os.path.join('utils', 'um', section+'.TXT'), mode='r') as f:
        lines = f.read()
    # Remove unknown characters
    # lines = re.sub('[^'+string.printable+']+', ' ', lines)
    lines = lines.replace('Ä','─')
    lines = lines.replace('Å','┼')
    lines = lines.replace('Â','┬')
    lines = lines.replace('³','│').replace('º','│')
    lines = lines.replace('Á','┴')
    lines = lines.replace('Ú','┌').replace('É','┌')
    lines = lines.replace('Ã','├')
    lines = lines.replace('À','└').replace('È','└')
    lines = lines.replace('¿','┐').replace('»','┐')
    lines = lines.replace('´','┤')
    lines = lines.replace('Ù','┘').replace('¼','┘')
    lines = lines.replace('é', 'θ')
    lines = lines.replace('è', 'φ').replace('í', 'φ')
    lines = lines.replace('à', 'α')
    # Split by =PAGE=
    lines = lines.split('=PAGE=\n')
    # Find index of desired card
    ind = [i for i, line in enumerate(lines) if line.startswith(card.upper())]
    # If not found, try trimming last char
    # (i.e. PDUM1 needs to use PDUMi documetation -> search for PDUM)
    if not ind:
        ind = [i for i, line in enumerate(lines) if line.startswith(card.upper()[:-1])]
    return lines[ind[0]] if ind else ''

def convert_to_markdown(lines: str) -> str:
    # lines = lines.split('\n')
    # lines = [f"```nastran\n{lines[0]}\n```"]+["```text"]+lines[1:]+["```"]
    # lines = '\n'.join(lines)
    lines = f"```text\n{lines}```"
    return lines if lines else ''

if __name__ == "__main__":
    os.chdir('..')
    print(get_docs('ALTER'))