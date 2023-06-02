import json
import re

from bs4 import BeautifulSoup as bs
from bs4 import Tag
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from tabulate import tabulate
from lxml import html
import unmarkd
import html2text
from markdownify import markdownify as md
import antimarkdown
import ipdb

URL = "https://help.hexagonmi.com"
WAIT = 20

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
    with open('test.json', 'w') as f:
        json.dump(docs, f)


def process_url(docs, driver):
    for section in docs:
        for card in docs[section]:
            if 'DYPARAM' in card:
                continue
            if card != 'GRID':
                continue
            print(f"  Processing {card}...")
            url = docs[section][card]['URL']
            driver.get(url)
            html_id = ('bundle:'+url.split('bundle')[1][1:]).replace('/page/', '/enus/')
            element_present = EC.presence_of_element_located((By.ID, html_id))
            WebDriverWait(driver, WAIT).until(element_present)
            soup = bs(driver.page_source, features="lxml")
            # Get all tags in article
            # tags = soup.find("article", {"id": html_id}).find_all()
            tags = soup.find("article", {"id": html_id})
            out = ''
            for i, tag in enumerate(tags.children):
                if i == 3:
                    continue
                if tag.name == 'a':
                    continue
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
                # Process body
                elif 'FM_body' in str(tag):
                    if tag.name != "p":
                        for p in tag.find_all("p"):
                            out += p.text + '\n\n'
                    else:
                        out += tag.text + '\n\n'
                    out += '--------------------\n\n'
                # Process tables
                elif tag.name == 'div':
                    out += build_table_markdown(card, tag)
                    # out += md(str(tag.find("table"))) + '\n\n\n\n'
                else:
                    # Process everything else
                    out += unmarkd.unmark(str(tag)) + '\n\n\n\n'
            # for a in tags.findAll('a'):
            #     a.replaceWithChildren()
            # out = md(str(tags))
            # out = antimarkdown.to_markdown(str(tags).replace('\n', ''))
            # tags = ''.join([unmarkd.unmark(tag) for tag in tags.children])
            # ipdb.set_trace()
            # # Try html2text
            # text_maker = html2text.HTML2Text()
            # text_maker.ignore_links = False
            # text_maker.bypass_tables = False
            # out = text_maker.handle(str(tags))
            # Try unmarkd
            # out = unmarkd.unmark(tags)
            docs[section][card]['MARKDOWN'] = out
            # ind = 0
            # # Jump to header + subheader
            # while tags[ind].name != 'div':
            #     ind += 1
            # # Header Table
            # docs[section][card]['HEADER'] = ''
            # docs[section][card]['SUBHEADER'] = ''
            # docs[section][card]['BODY'] = ''
            # for tr in tags[ind].find_all("tr"):
            #     for p in tr.find_all("p"):
            #         # Header
            #         if p.attrs['class'][0] == 'FM_hheader':
            #             docs[section][card]['HEADER'] = p.text
            #         # Subheader
            #         elif p.attrs['class'][0] == 'FM_hheadersub':
            #             docs[section][card]['SUBHEADER'] = p.text
            #         # Body
            #         else:
            #             docs[section][card]['BODY'] = p.text
            # # Body
            # if not docs[section][card]['BODY']:
            #     body = []
            #     while tags[ind].name != 'h4':
            #         if tags[ind].name == 'p' and tags[ind].attrs['class'][0] == 'FM_body':
            #             body.append(tags[ind].text)
            #         ind += 1
            #     body = '\n'.join(body) if body else ''
            #     docs[section][card]['BODY'] = body
            # # # Format
            # # format_found = False
            # # format_table = ''
            # # for tag in tags[ind:]:
            # #     if format_found:
            # #         format_table += build_format_text(card, tag, header)
            # #         format_found = False
            # #     if 'format' in tag.text.lower():
            # #         format_found = True
            # #         header = tag.text
            # # ipdb.set_trace()
            # while 'Format' not in tags[ind].text:
            #     ind += 1
            # header = tags[ind-1].text
            # format_table = build_format_text(card, tags[ind], header)
            # docs[section][card]['FORMAT'] = format_table if format_table else ''
            # ind += 1
            # # Example
            # while not tags[ind].text.startswith('Example'):
            #     ind += 1
            # header = tags[ind].text
            # ind += 1
            # example_table = build_example_text(card, tags[ind], header)
            # if 'EXAMPLE' not in docs[section][card]:
            #     docs[section][card]['EXAMPLE'] = ''
            # if example_table:
            #     docs[section][card]['EXAMPLE'] += example_table if example_table else ""
            # ind += 1
            # # Describer
            # docs[section][card]['DESCRIBER'] = ''
            # while not docs[section][card]['DESCRIBER']:
            #     try:
            #         while tags[ind].name != 'div':
            #             ind += 1
            #         describer = build_describer_text(tags[ind].find("table")) if tags[ind].find("table") else ""
            #         if 'Describer' in describer or 'Field' in describer:
            #             docs[section][card]['DESCRIBER'] = describer
            #             break
            #         ind += 1
            #     except IndexError:
            #         break
    return docs

def get_urls(driver):
    """Acquire URLs for MSC Nastran documentation

    Args:
        driver: Selenium webdriver

    Returns:
        dict: Dictionary containing URLs for all MSC Nastran cards per section
    """
    urls = {
        'BULK': [
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/bulkab.xhtml",      # Entries A - B
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/bulkc1.xhtml",      # Entries CA - CM
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/bulkc2.xhtml",      # Entries CO - CY
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/bulkde.xhtml",      # Entries D - E
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/bulkfgil.xhtml",  # Entries F - L
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/bulkmno.xhtml",    # Entries M - O
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/bulkp.xhtml",        # Entries P
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/bulkqrs.xhtml",    # Entries Q - S
            # "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/bulktuv.xhtml",    # Entries T - Y
            ],
        # "CASE": [
        #     "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.Case.Control.Commands1.xhtml",
        #     ],
        # "EXEC": [
        #     "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.Executive.Control2.xhtml",
        #     ],
        # "FMS": [
        #     "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.File.Management3.xhtml",
        #     ],
    }
    docs = dict(BULK={}, CASE={}, EXEC={}, FMS={})
    for section in urls:
        for url in urls[section]:
            print(f"   Processing {url}")
            # Get webpage content
            driver.get(url)
            element_present = EC.presence_of_element_located((By.ID, 'zDocsContent'))
            WebDriverWait(driver, WAIT).until(element_present)
            # sleep(WAIT)
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

def build_table_markdown(card, tag):
    out = "```nastran\n"
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

def build_describer_text(tag):
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
    maxcolwidths = [12]
    while len(maxcolwidths) != num_cols:
        maxcolwidths.append(int((120-maxcolwidths[0])/(num_cols-1)))
    return '```text\n'+tabulate(out, tablefmt='simple_grid', maxcolwidths=maxcolwidths)+'\n'



if __name__ == "__main__":
    main()