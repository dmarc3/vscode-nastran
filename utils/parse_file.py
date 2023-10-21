from typing import Callable
import os
import re
import json


from utils.read_docs import SECTION_KEY

# Read regex strings from syntax
REGEX_KEY = {}
with open(os.path.join('syntaxes', 'nastran.json')) as f:
    d = json.load(f)
for key in d['repository'].keys():
    REGEX_KEY[key.upper()] = d['repository'][key]['match']

def get_section(include_no: int, line_no: int, sections, line: str) -> str:
    if sections:
        if sections.CEND and sections.BEGIN_BULK:
            if include_no <= sections.CEND[0] and line_no <= sections.CEND[1]:
                if exec_regex(re.match, REGEX_KEY['EXEC'], line):
                    return 'EXEC'
                else:
                    return 'FMS'
            elif include_no <= sections.BEGIN_BULK[0] and line_no <= sections.BEGIN_BULK[1]:
                return 'CASE'
            elif include_no >= sections.BEGIN_BULK[0] and line_no > sections.BEGIN_BULK[1]:
                return 'BULK'
        else:
            return 'BULK'
    else:
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
