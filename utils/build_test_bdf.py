import json
import ipdb

with open('test.json', 'r', encoding='utf-8') as f:
    docs = json.load(f)

with open('test.bdf', 'w') as f:
    for card in docs['BULK']:
        f.write(card.ljust(8) + ''.join([str(i).rjust(8) for i in range(1, 10)]) + '\n')
        # if 'EXAMPLE' in docs['BULK'][card]:
        #     f.write(docs['BULK'][card]['EXAMPLE'].split('$---10--$\n')[1].replace('```\n', ''))