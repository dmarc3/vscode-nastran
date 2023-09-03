import os
from glob import glob
import re

from utils.parse_file import exec_regex, REGEX_KEY

def test_bulk_regex():
    # Regex string to test
    regex = REGEX_KEY['BULK']
    # Get lines to test
    for file in glob(os.path.join('utils', 'docs', 'BULK', '*.md')):
        # Skip DTI, cards for now
        if 'DTI,' in file:
            continue
        # Parse card
        card = os.path.basename(file).replace('.md', '')
        # Construct test line with short field
        line = card.ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with free field
        line = (card + ',').ljust(80)
        assert card == exec_regex(re.match, regex, line)
        # Construct test line with long field
        line = (card + '*').ljust(80)
        assert card == exec_regex(re.match, regex, line)