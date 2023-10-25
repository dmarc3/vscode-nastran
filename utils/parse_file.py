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

def get_section(server, filename, line_no) -> str:
    if server.sections:
        if server.sections.CEND and server.sections.BEGIN_BULK:
            for ind, content in enumerate(server.lines):
                if content['include'].endswith(filename):
                    line_no += ind
                    break
            if line_no <= server.sections.CEND:
                if exec_regex(re.match, REGEX_KEY['EXEC'], server.lines[line_no]['line']):
                    return 'EXEC'
                else:
                    return 'FMS'
            elif line_no <= server.sections.BEGIN_BULK:
                return 'CASE'
            elif line_no > server.sections.BEGIN_BULK:
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
