import os
from glob import glob
import subprocess
import ipdb

folder = 'docs/MSC_Nastran/CASE/'
# Get all case control cards and sort
cards = []
for file in glob(folder + '*.md'):
    cards.append(os.path.basename(file).replace('.md', ''))
cards.sort()

# Write to file and include
with open('case.txt', 'w', newline='\n') as f:
    for card in cards:
        count = len(card)
        while len(card[:count]) >= 4:
            f.write(card[:count] + '|')
            count -= 1

# Sort output file
# subprocess.call("sort case.txt -o case.txt".split()) 