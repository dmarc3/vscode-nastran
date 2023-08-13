import json
import os
import re
from time import time

from bs4 import BeautifulSoup as bs
from bs4.element import NavigableString
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from tabulate import tabulate
import unmarkd
import ipdb

URL = "https://help.hexagonmi.com"
DELAY = 30

def main():
    options = webdriver.chrome.options.Options()
    options.add_argument("--headless")
    options.add_argument("--log-level=3")
    driver = webdriver.Chrome(options=options)
    # Get MSC Nastran documentation URLs
    print("\nAcquiring MSC Nastran cards and URLs\n")
    docs = get_urls(driver)
    # Read MSC Nastran documentation pages
    print("\nProcessing MSC Nastran URLs and appending page information\n")
    docs = process_url(docs, driver)
    # Write to json file
    with open('test.json', 'w', encoding='utf-8') as f:
        json.dump(docs, f, indent=4)

def expand_contents(tag):
    contents = tag.contents
    for i, content in enumerate(contents):
        try:
            if content.contents:
                contents[i] = content.contents
        except AttributeError:
            pass
    # Flatten list
    out = []
    for item in contents:
        if isinstance(item, list):
            for i in item:
                out.append(i)
        else:
            out.append(item)
    return out

def process_descendants(tag):
    out = []
    if 'FM_bulletsub' in str(tag) or 'FM_listtext' in str(tag):
        out += ['    ']
    contents = expand_contents(tag)
    for desc in contents:
        if desc.name in ['p', 'span', 'b', 'sup']:
            out += [desc.text]
        elif desc.name == 'img':
            out += [unmarkd.unmark(str(desc))]
        elif isinstance(desc, NavigableString):
            out += [str(desc)]
        elif desc.name in ['sub', 'a']:
            continue
            # tag_str.append(process_descendants(desc))
        elif desc.name == 'br':
            out += '\n\n'
        else:
            ipdb.set_trace()
    return ' '.join(out) + '\n\n'

def process_url(docs, driver):
    for section in docs:
        for card in docs[section]:
            if 'DYPARAM' in card:
                continue
            # if card != 'CQUAD4':
            #     continue
            print(f"  Processing {card}...", end='\r')
            try:
                start = time()
                url = docs[section][card]['URL']
                driver.get(url)
                html_id = ('bundle:'+url.split('bundle')[1][1:]).replace('/page/', '/enus/')
                element_present = EC.presence_of_element_located((By.ID, html_id))
                WebDriverWait(driver, DELAY).until(element_present)
                soup = bs(driver.page_source, features="lxml")
                # Get all tags in article
                # tags = soup.find("article", {"id": html_id}).find_all()
                tags = soup.find("article", {"id": html_id})
                # import ipdb; ipdb.set_trace()
                out = ''
                for tag in tags.children:
                    if tag.name == 'a':
                        continue
                    if tag.get('class'):
                        if tag.get('class')[0] == 'topictitle1':
                            continue
                    # print(str(tag)+'\n')
                    # Process header
                    if 'FM_hheader' in str(tag):
                        for p in tag.find_all("p"):
                            if p.get('class')[0] == "FM_hheader":
                                out += f"## [{p.text}]({docs[section][card]['URL']}) - "
                            if p.get('class')[0] == 'FM_hheadersub':
                                out += p.text + '\n\n'
                            if p.get('class')[0] == 'FM_body':
                                out += p.text + '\n\n'
                                out += '--------------------\n\n'
                    # Process p tags
                    elif tag.name == 'p':
                        out += process_descendants(tag)
                    # Process body
                    elif 'FM_body' in str(tag):
                        if tag.name != "p":
                            for p in tag.find_all("p"):
                                out += p.text + '\n\n'
                        else:
                            out += tag.text + '\n\n'
                        out += '--------------------\n\n'
                    # Process numbered / bulleted items
                    elif tag.name == 'p' and tag.find('span'):
                        for p in tag:
                            out += p.text + ' '
                        out = out[:-1] + '\n\n'
                    # Process tables
                    elif tag.name == 'div':
                        if 'Describer' in str(tag) or card not in str(tag) and tag.text:
                            # print(str(tag)+'\n')
                            out += build_table_markdown(tag)
                        elif tag.text:
                            out += build_nastran_markdown(card, tag)
                        elif 'img' in str(tag):
                            out += unmarkd.unmark(str(tag.find('img'))) + '\n\n'
                    else:
                        # Process everything else
                        try:
                            out += unmarkd.unmark(str(tag)) + '\n\n'
                        except:
                            print(f"    Error encountered. Skipping {tag.name} for {card}: {tag.text}!")
                docs[section][card]['MARKDOWN'] = out
                if '*' in card:
                    card = card.replace('*', '')
                with open(os.path.join('docs', section, card+'.md'), 'w', encoding='utf-8') as f:
                    f.write(out)
                end = time()
                print(f"  Processing {card}...".ljust(30) + "Completed in " + f"{(end-start):.2f}".rjust(5) + " seconds!")
            except TimeoutException: 
                print(f"  Processing {card}...".ljust(30) + f"ERROR: Timeout Exception encountered for {card}!")
    return docs

def get_urls(driver):
    """Acquire URLs for MSC Nastran documentation

    Args:
        driver: Selenium webdriver

    Returns:
        dict: Dictionary containing URLs for all MSC Nastran cards per section
    """
    urls = {
        # 'BULK': [
        #     "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulk_data/bulk.data.xhtml#TOC_Bulk_Data_Entries"
        #     ],
        # "CASE": [
        #     "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.Case.Control.Commands1.xhtml",
        #     ],
        # "EXEC": [
        #     "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.Executive.Control2.xhtml",
        #     ],
        # "FMS": [
        #     "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.File.Management3.xhtml",
        #     ],
        "DMAP": [
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/dmap/modules1/TOC.Detailed.Descriptions.of.xhtml",
        ]
    }
    docs = dict(BULK={}, CASE={}, EXEC={}, FMS={}, DMAP={})
    for section in urls:
        for url in urls[section]:
            print(f"  Processing {section}")
            # Get webpage content
            driver.get(url)
            element_present = EC.presence_of_element_located((By.ID, 'zDocsContent'))
            WebDriverWait(driver, DELAY).until(element_present)
            # sleep(DELAY)
            # Load in BeautifulSoup
            soup = bs(driver.page_source, features="lxml")
            # Load bulk hyperlinks
            if section == "EXEC":
                li = soup.find('ul', {"id": "MSCNastran20224-ExecutiveControlStatementDescriptions"}).find_all('li')
                for link in li:
                    if link.text in ['$', '/']:
                        continue
                    hyperlink = link.find('a')['href']
                    card = link.text
                    docs[section][card] = {}
                    docs[section][card]['URL'] = URL+hyperlink
            elif section == "DMAP":
                li = soup.find('ul', {"id": "MSCNastran20224-DetailedDescriptionsofDMAPModulesandStatements"}).find_all('li')
                for link in li:
                    if link.text in ['$', '/']:
                        continue
                    hyperlink = link.find('a')['href']
                    card = link.text
                    docs[section][card] = {}
                    docs[section][card]['URL'] = URL+hyperlink
            elif section == "BULK":
                suburls = [
                    "MSCNastran20224-EntriesAB",
                    "MSCNastran20224-EntriesCACM",
                    "MSCNastran20224-EntriesCOCY",
                    "MSCNastran20224-EntriesDE",
                    "MSCNastran20224-EntriesFL",
                    "MSCNastran20224-EntriesMO",
                    "MSCNastran20224-EntriesP",
                    "MSCNastran20224-EntriesQS",
                    "MSCNastran20224-EntriesTY"
                ]
                for sub in suburls:
                    li = soup.find('ul', {"id": sub}).find_all('li')
                    for link in li:
                        if link.text in ['$', '/']:
                            continue
                        hyperlink = link.find('a')['href']
                        card = link.text
                        docs[section][card] = {}
                        docs[section][card]['URL'] = URL+hyperlink
            else:
                li = soup.find_all('div', class_="zDocsTopicPageBodyContent")[0].find_all('li')
                for link in li:
                    if link.text in ['$', '/']:
                        continue
                    hyperlink = link.find('a')['href']
                    card = link.text
                    docs[section][card] = {}
                    docs[section][card]['URL'] = URL+hyperlink
    return docs

def build_nastran_markdown(card, tag):
    out = "```nastran\n"
    tag = tag.find('table')
    fields = []
    if card+'*' in str(tag):
        out += '$---1---$-------2-------$-------3-------$-------4-------$-------5-------$---6---$\n'
    else:
        out += '$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$\n'
    for tr in tag.find_all("tr"):
        row = []
        for i, td in enumerate(tr.find_all("td")):
            field = td.text.strip()
            # Skip field designation row
            if i == 0 and field == '1':
                break
            row.append(field)
        if row: fields.append(row)
    # Build out string
    for row in fields:
        # Determine maximum rows to display for current row
        max_len = 0
        if '\n' in ''.join(row):
            max_len = max([len(field.split('\n')) for field in row])
        # Loop through row and build string
        entries = []
        for field in row:
            if max_len:
                field = field.split('\n')
                if isinstance(field, str):
                    field = list(field)
                if len(field) < max_len:
                    field += [''] * (max_len - len(field))
                entries.append(field)
            else:
                if len(field) > 8 and card not in ['ABSNMVS', 'ACCEL', 'CINTC', 'DRESP3', 'FBODYLD', 'FBODYSB', 'GRIDA']:
                    field = field.ljust(8)[:8]
                    out += field[:-3]+'...'
                else:
                    out += field.ljust(8)[:8]
        if entries:
            for i in range(max_len):
                for field in entries:
                    out += field[i].ljust(8)
                out += '\n'
        else:
            out += '\n'
    out += '```\n'
    return out

def build_format_text(card, tag, header):
    out = f"{header}\n```nastran\n"
    i = 0
    # Acquire raw fields
    if tag.find('table'):
        tag = tag.find('table')
        fields = []
        out += '$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$\n'
        for tr in tag.find_all("tr"):
            row = []
            for i, td in enumerate(tr.find_all("td")):
                field = td.text.strip()
                # Skip field designation row
                if i == 0 and field == '1':
                    break
                row.append(field)
            if row: fields.append(row)
        # Build out string
        for row in fields:
            # Determine maximum rows to display for current row
            max_len = 0
            if '\n' in ''.join(row):
                max_len = max([len(field.split('\n')) for field in row])
            # Loop through row and build string
            entries = []
            for field in row:
                if max_len:
                    field = field.split('\n')
                    if isinstance(field, str):
                        field = list(field)
                    if len(field) < max_len:
                        field += [''] * (max_len - len(field))
                    entries.append(field)
                else:
                    if len(field) > 8 and card not in ['ABSNMVS', 'ACCEL', 'CINTC', 'DRESP3']:
                        field = field.ljust(8)[:8]
                        out += field[:-3]+'...'
                    else:
                        out += field.ljust(8)[:8]
            if entries:
                for i in range(max_len):
                    for field in entries:
                        out += field[i].ljust(8)
                    out += '\n'
            else:
                out += '\n'
    else:
        if ',' in tag.text:
            inds = [m.start() for m in re.finditer(',', tag.text)]
            inds = [0] + inds + [len(tag.text)-1]
            for i, ind in enumerate(inds[:-1]):
                width = inds[i+1]-ind
                lead = round((width-2)/2)
                trail = width - (lead + 1 + len(str(i+1)))
                out += '$'+'-'*round((width-2)/2)+str(i+1)+'-'*trail
            out += '$\n'
        else:
            out += '$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$\n'
        out += tag.text+'\n'
    out += '```\n'
    return out

def build_example_text(card, tag, header):
    out = f"{header}\n```nastran\n$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$\n"
    i = 0
    for tr in tag.find_all("tr"):
        for i, td in enumerate(tr.find_all("td")):
            field = td.text.strip()
            if i == 0 and field == '1':
                break
            if len(field) > 8 and card not in ['ABSNMVS', 'ACCEL', 'CINTC', 'DRESP3']:
                field = field.replace('\n', '')[:8]
            out += field.ljust(8)
        out += '\n' if i != 0 else ''
    out += '```\n'
    return out

def build_table_markdown(tag):
    out = []
    # Process table
    for tr in tag.find_all("tr"):
        inner = []
        for element in tr:
            if element.name in ["td", "th"]:
                inner.append(element.text.strip())
        out.append(inner)
    # Add missing columns
    cols = [len(row) for row in out]
    num_cols = max(cols)
    for i, row in enumerate(out):
        if len(row) < num_cols:
            for _ in range(num_cols-len(row)):
                out[i] = row + ['']
    # Remove empty columns
    out_t = [list(i) for i in zip(*out)]
    out_t = [row for row in out_t if not all(a == '' for a in row)]
    out = [list(i) for i in zip(*out_t)]
    # Remove empty rows
    out = [row for row in out if not all(a == '' for a in row)]
    # Column widths
    if out:
        if len(out[0]) == 1:
            maxcolwidths = [len(out[0][0])] if len(out[0]) < 120 else [120]
        else:
            maxcolwidths = [12]
            while len(maxcolwidths) != num_cols:
                maxcolwidths.append(int((110-maxcolwidths[0])/(num_cols-1)))
        return '```text\n'+tabulate(out, tablefmt='simple_grid', maxcolwidths=maxcolwidths)+'\n```\n'
    return ''



if __name__ == "__main__":
    main()