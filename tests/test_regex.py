import os
from glob import glob
import re

from utils.parse_file import exec_regex, REGEX_KEY

def test_bulk_regex():
    # Define BULK_LABEL variables
    bulk_label = ("MONSUMT", "MONSUM1", "MONSUM", "MONPNT3", "MONPNT2", "MONPNT1", "MONGRP", "MONDSP1", "MONCNCM")
    # Get lines to test
    for file in glob(os.path.join('utils', 'docs', 'BULK', '*.md')):
        # Skip DTI, cards for now
        if 'DTI,' in file:
            continue
        # Parse card
        card = os.path.basename(file).replace('.md', '')
        if card.startswith(bulk_label):
            # Regex string to test
            regex = REGEX_KEY['BULK_LABEL']
        else:
            # Regex string to test
            regex = REGEX_KEY['BULK']
        # Construct test line with short field
        line = card.ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with free field
        line = (card + ',').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with long field
        line = (card + '*').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        line = (card.ljust(7) + '*').ljust(80)
        assert card == exec_regex(re.match, regex, line)

def test_param_regex():
    # Regex string to test
    regex = REGEX_KEY['PARAM']
    # Get lines to test
    for file in glob(os.path.join('utils', 'docs', 'BULK', 'PARAM', '*.md')):
        # Parse card
        card = os.path.basename(file).replace('.md', '')
        # Construct test line with short field
        line = ('PARAM'.ljust(8) + card.ljust(8) + 'test'.ljust(8)).ljust(80)
        assert card == exec_regex(re.search, regex, line)
        # Construct test line with free field
        line = (','.join(['PARAM', card, 'test'])).ljust(80)
        assert card == exec_regex(re.search, regex, line)

def test_case_regex():
    # Regex string to test
    regex = REGEX_KEY['CASE']
    # Get lines to test
    for file in glob(os.path.join('utils', 'docs', 'CASE', '*.md')):
        # Skip $S700 and MAXMIN(DEF) cards for now
        if '$' in file or 'MAXMIN(DEF)' in file:
            continue
        # Parse card
        card = os.path.basename(file).replace('.md', '')
        # Construct test line with card by itself and no leading whitespace
        line = card.ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with card by itself and leading whitespace
        line = (' '*4 + card).ljust(80)
        assert card == exec_regex(re.match, regex, line)
        
        # Construct test line with "card =" and no leading whitespace
        line = (card + '=').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with "card =" and leading whitespace
        line = (' '*4 + card + '=').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        
        # Construct test line with "card(" and no leading whitespace
        line = (card + '(').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with "card(" and leading whitespace
        line = (' '*4 + card + '(').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        
        # Construct test line with "card," and no leading whitespace
        line = (card + ',').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with "card," and leading whitespace
        line = (' '*4 + card + ',').ljust(80)
        assert card == exec_regex(re.match, regex, line)

def test_exec_regex():
    # Regex string to test
    regex = REGEX_KEY['EXEC']
    # Get lines to test
    for file in glob(os.path.join('utils', 'docs', 'EXEC', '*.md')):
        # SOL 700,ID cards for now
        if 'SOL 700,ID' in file:
            continue
        # Parse card
        card = os.path.basename(file).replace('.md', '')
        # Construct test line
        line = card.ljust(80)
        assert card == exec_regex(re.match, regex, line)

def test_fms_regex():
    # Regex string to test
    regex = REGEX_KEY['FMS']
    # Get lines to test
    for file in glob(os.path.join('utils', 'docs', 'FMS', '*.md')):
        # Parse card
        card = os.path.basename(file).replace('.md', '')
        # Construct test line
        line = card.ljust(80)
        assert card == exec_regex(re.match, regex, line)
