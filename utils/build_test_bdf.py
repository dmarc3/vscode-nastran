import json
import ipdb

with open('test.json', 'r', encoding='utf-8') as f:
    docs = json.load(f)

with open('test.bdf', 'w') as f:
    for card in docs['BULK']:
        if 'EXAMPLE' in docs['BULK'][card]:
            f.write(docs['BULK'][card]['EXAMPLE'].split('$---10--$\n')[1].replace('```\n', ''))