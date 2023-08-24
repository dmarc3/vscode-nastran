import os
from glob import glob

folder = 'docs/BULK/PARAM/'
# Get all case control cards and sort
cards = []
for file in glob(folder + '*.md'):
    cards.append(os.path.basename(file).replace('.md', ''))
cards.sort(reverse=True)

with open('param.txt', 'w', newline='\n') as f:
    for card in cards:
        f.write(card + '|')
