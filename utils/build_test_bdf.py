import os
from glob import glob
import ipdb

folders = [
    os.path.join('docs', 'CASE', 'COMPLETE'),
    os.path.join('docs', 'BULK', 'COMPLETE'),
]
with open('test.bdf', 'w') as f:
    f.write('ID\n')
    f.write('SOL 101\n')
    f.write('CEND\n')
    # CASE
    for file in glob(os.path.join('docs', 'CASE', 'COMPLETE', '*.md')):
        if 'CASE' in file and 'BEGIN BULK' in file:
            continue
        f.write('    ' + os.path.basename(file).replace('.md', '') + '\n')
    f.write('BEGIN BULK\n')
    # BULK
    for file in glob(os.path.join('docs', 'BULK', 'COMPLETE', '*.md')):
        f.write(os.path.basename(file).replace('.md', '').ljust(8) + ''.join([str(i).rjust(8) for i in range(1, 10)]) + '\n')
    
        
# with open('test.bdf', 'w') as f:
#     for card in docs['BULK']:
#         f.write(card.ljust(8) + ''.join([str(i).rjust(8) for i in range(1, 10)]) + '\n')
        # if 'EXAMPLE' in docs['BULK'][card]:
        #     f.write(docs['BULK'][card]['EXAMPLE'].split('$---10--$\n')[1].replace('```\n', ''))