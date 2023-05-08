import os

URL = "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/"

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
        for section in ["BULK", "CASE", "EXEC", "SUBS", "DMAP", "PLOT"]:
            out = funcs[version](card, section)
            if out:
                break
    # If documentation found, convert to markdown otherwise return empty string
    if version == 'NASTRAN-95':
        return convert_to_markdown(out) if out else out
    else:
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

def read_MSC_Nastran_docs(card: str, section: str) -> str:
    """Parse MSC Nastran documentation given Nastran entry and section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str): Section the entry belongs to to specifically
                       search.

    Returns:
        str: Documentation for Nastran entry
    """
    def get_bulk_url(card: str) -> str:
        """Builds Hexagon QRG URL for given bulk data entry"""
        if card == "INCLUDE":
            return get_case_url(card)
        chars = card[0]
        if chars == "C":
            chars = chars = card[:2]

        if chars in ['A', 'B']:
            bulk = 'bulkab'
        elif chars in ['CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN']:
            bulk = 'bulkc1'
        elif chars in ['CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ']:
            bulk = 'bulkc2'
        elif chars in ['D', 'E']:
            bulk = 'bulkde'
        elif chars in ['F', 'G', 'H', 'I', 'J', 'K', 'L']:
            bulk = 'bulkfgil'
        elif chars in ['M', 'N', 'O']:
            bulk = 'bulkmno'
        elif chars in ['P']:
            bulk = 'bulkp'
        elif chars in ['Q', 'R', 'S']:
            bulk = 'bulkqrs'
        elif chars in ['T', 'U', 'V', 'W', 'X', 'Y', 'Z']:
            bulk = 'bulktuv'

        return URL + bulk +'/TOC.' + card + '.xhtml'

    def get_case_url(card: str) -> str:
        """Builds Hexagon QRG URL for given case control entry"""
        return URL + 'casecontrol4a' + '/TOC.' + card + '.Case.xhtml'

    def get_exec_url(card: str) -> str:
        """Builds Hexagon QRG URL for given executive control entry"""
        return URL + 'executive' + '/TOC.' + card + '.xhtml'

    def get_fms_url(card: str) -> str:
        """Builds Hexagon QRG URL for given file management entry"""
        return URL + 'fms' + '/TOC.' + card + '.xhtml'

    sections = {
        "BULK": get_bulk_url,
        "CASE": get_case_url,
        "EXEC": get_exec_url,
        "FMS": get_fms_url,
    }
    if '$' not in card:
        if section in sections:
            url = sections[section](card)
            return f'Open documentation for [{card}]({url})'
    return ''

def convert_to_markdown(lines: str) -> str:
    return f"```text\n{lines}```"

if __name__ == "__main__":
    # Used for debugging
    os.chdir('..')
    print(get_docs('ALTER'))