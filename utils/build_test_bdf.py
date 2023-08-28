import os
from glob import glob
import ipdb

folders = [
    os.path.join('docs', 'FMS'),
    os.path.join('docs', 'EXEC'),
    os.path.join('docs', 'CASE'),
    os.path.join('docs', 'BULK', 'PARAM'),
    os.path.join('docs', 'BULK'),
]
with open('test.bdf', 'w') as f:
    # FMS
    for file in glob(os.path.join('docs', 'FMS', '*.md')):
        f.write(os.path.basename(file).replace('.md', '') + '\n')
    # EXEC
    for file in glob(os.path.join('docs', 'EXEC', '*.md')):
        if 'CEND' in file:
            continue
        f.write(os.path.basename(file).replace('.md', '') + '\n')
    f.write('CEND\n')
    # CASE
    for file in glob(os.path.join('docs', 'CASE', '*.md')):
        if 'CASE' in file and 'BEGIN BULK' in file:
            continue
        if os.path.basename(file).startswith('END'):
            f.write(os.path.basename(file).replace('.md', '') + '\n')
        else:
            f.write(os.path.basename(file).replace('.md', '') + '=n\n')
    f.write('BEGIN BULK\n')
    # PARAM
    for file in glob(os.path.join('docs', 'BULK', 'PARAM', '*.md')):
        f.write('PARAM,'+os.path.basename(file).replace('.md', '') + ',n\n')
    # BULK
    for file in glob(os.path.join('docs', 'BULK', '*.md')):
        f.write(os.path.basename(file).replace('.md', '').ljust(8) + ''.join([str(i).rjust(8) for i in range(1, 10)]) + '\n')
    
        
# with open('test.bdf', 'w') as f:
#     for card in docs['BULK']:
#         f.write(card.ljust(8) + ''.join([str(i).rjust(8) for i in range(1, 10)]) + '\n')
        # if 'EXAMPLE' in docs['BULK'][card]:
        #     f.write(docs['BULK'][card]['EXAMPLE'].split('$---10--$\n')[1].replace('```\n', ''))