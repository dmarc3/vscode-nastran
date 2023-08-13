import os
from glob import glob
import ipdb

folders = [
    os.path.join('docs', 'MSC_Nastran', 'FMS'),
    os.path.join('docs', 'MSC_Nastran', 'EXEC'),
    os.path.join('docs', 'MSC_Nastran', 'CASE'),
    os.path.join('docs', 'MSC_Nastran', 'BULK'),
]
with open('test.bdf', 'w') as f:
    # FMS
    for file in glob(os.path.join('docs', 'MSC_Nastran', 'FMS', '*.md')):
        f.write(os.path.basename(file).replace('.md', '') + '\n')
    # EXEC
    for file in glob(os.path.join('docs', 'MSC_Nastran', 'EXEC', '*.md')):
        if 'CEND' in file:
            continue
        f.write(os.path.basename(file).replace('.md', '') + '\n')
    f.write('CEND\n')
    # CASE
    for file in glob(os.path.join('docs', 'MSC_Nastran', 'CASE', '*.md')):
        if 'CASE' in file and 'BEGIN BULK' in file:
            continue
        f.write(os.path.basename(file).replace('.md', '') + '\n')
    f.write('BEGIN BULK\n')
    # BULK
    for file in glob(os.path.join('docs', 'MSC_Nastran', 'BULK', '*.md')):
        f.write(os.path.basename(file).replace('.md', '').ljust(8) + ''.join([str(i).rjust(8) for i in range(1, 10)]) + '\n')
    
        
# with open('test.bdf', 'w') as f:
#     for card in docs['BULK']:
#         f.write(card.ljust(8) + ''.join([str(i).rjust(8) for i in range(1, 10)]) + '\n')
        # if 'EXAMPLE' in docs['BULK'][card]:
        #     f.write(docs['BULK'][card]['EXAMPLE'].split('$---10--$\n')[1].replace('```\n', ''))