from typing import Callable
import os
import json

from utils.read_docs import SECTION_KEY

# Read regex strings from syntax
REGEX_KEY = {}
with open(os.path.join('syntaxes', 'nastran.json')) as f:
    d = json.load(f)
for key in d['repository'].keys():
    REGEX_KEY[key.upper()] = d['repository'][key]['match']

def get_section(line, lines) -> str:
    # Determine index of current line
    ind = lines.index(line)
    # Strip to left of string
    raw = line.lstrip()
    if raw.startswith('*'):
        return 'BULK'
    if raw.startswith('$') and not raw.startswith('$S700'):
        return ''
    
    # If special character detected, strip everything after that character
    card = raw
    for char in [",", "*", " ", "=", "\n", "("]:
        if char in card:
            card = card.split(char)[0].strip()
    
    # Determine relative position in file and return section if detected
    CEND = [i for i, line in enumerate(lines) if 'CEND' in line]
    CEND = 0 if not CEND else CEND[0]
    BBULK = [i for i, line in enumerate(lines) if 'BEGIN BULK' in line]
    BBULK = 0 if not BBULK else BBULK[0]
    if CEND > 0 and BBULK > 0:
        if ind <= CEND and any([name for name in SECTION_KEY['FMS'] if name.startswith(card)]):
            return 'FMS'
        elif ind <= CEND and any([name for name in SECTION_KEY['EXEC'] if name.startswith(card)]):
            return 'EXEC'
        elif ind > CEND and ind <= BBULK and any([name for name in SECTION_KEY['CASE'] if name.startswith(card)]):
            return 'CASE'
        elif ind > BBULK and card in SECTION_KEY['BULK']:
            return 'BULK'

    # Test for raw line
    for section, cards in SECTION_KEY.items():
        if raw.strip() in cards:
            return section
   
    # Catch any partial cards
    for section, cards in SECTION_KEY.items():
        if any([name for name in cards if name.startswith(card)]):
            return section

    return 'BULK'

def exec_regex(re_func: Callable, regex: str, line: str) -> str:
    """Searches for regex match

    Args:
        re_func (Callable): Python regex function to use
        regex (str): Regex string
        line (str): Line to search via regex

    Returns:
        str: Regex match string
    """
    card = re_func(regex, line)
    if card:
        card = card.groups()[0]
        if not card:
            return ''
    else:
        return ''
    return card
