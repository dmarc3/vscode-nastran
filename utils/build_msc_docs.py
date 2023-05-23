import json
from time import sleep

from bs4 import BeautifulSoup as bs
from selenium import webdriver
import pandas as pd
import numpy as np
import ipdb

URL = "https://help.hexagonmi.com"
WAIT = 2

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
            print(f"Processing {card}...")
            driver.get(docs[section][card]['URL'])
            sleep(WAIT)
            soup = bs(driver.page_source, features="lxml")
            # Header
            header = soup.find("p", class_="FM_hheader")
            if header: header = header.text
            docs[section][card]['HEADER'] = header if header else ""
            # Subheader
            subheader = soup.find("p", class_="FM_hheadersub")
            if subheader: subheader = subheader.text
            docs[section][card]['SUBHEADER'] = subheader if subheader else ""
            # Body
            body = soup.find("p", class_="FM_body")
            if body: body = body.text
            docs[section][card]['BODY'] = body if body else ""
            # Tables
            article = soup.find("article", {"id": "zDocsContent"})
            if article: article = article.find_all(["h4", "table"])
            format_bool = False
            if article:
                for tag in article:
                    if tag.name == "h4" and tag.text == "Format:":
                        format_bool = True
                        continue
                    if 'table' in tag.name and format_bool:
                        format_table = update_format(pd.read_html(tag.prettify(), flavor="bs4")[0])
                        docs[section][card]['FORMAT'] = format_table if format_table else ""
                        format_bool = False
                        continue
                    if 'table' in tag.name:
                        table = pd.read_html(tag.prettify(), flavor="bs4")[0]
                        if 'Describer' in table.columns or 'Contests' in table.columns:
                            describer_table = update_describer(table)
                            docs[section][card]['DESCRIBER'] = describer_table if describer_table else ""
                            break
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
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/bulkab.xhtml",      # Entries A - B
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/bulkc1.xhtml",      # Entries CA - CM
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/bulkc2.xhtml",      # Entries CO - CY
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/bulkde.xhtml",      # Entries D - E
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/bulkfgil.xhtml",  # Entries F - L
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/bulkmno.xhtml",    # Entries M - O
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/bulkp.xhtml",        # Entries P
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/bulkqrs.xhtml",    # Entries Q - S
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/bulktuv.xhtml",    # Entries T - Y
            ],
        "CASE": [
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.Case.Control.Commands1.xhtml",
            ],
        "EXEC": [
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.Executive.Control2.xhtml",
            ],
        "FMS": [
            "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.File.Management3.xhtml",
            ],
    }
    docs = dict(BULK={}, CASE={}, EXEC={}, FMS={})
    for section in urls:
        for url in urls[section]:
            print(f"   Processing {url}")
            # Get webpage content
            driver.get(url)
            sleep(WAIT)
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

def update_format(table):
    table = table[1:]
    table = table.replace(np.nan, '', regex=True)
    out = "Format:\n```nastran\n$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$\n"
    for row in table.values:
        for value in row:
            out += str(value).ljust(8)
        out += '\n'
    out += '```\n'
    return out

def update_describer(table):
    table.columns = table.columns.where(~table.columns.str.contains('Unnamed'), '')
    if '' in table.columns:
        table.loc[table['Meaning'] == table[''], ''] = ''
    table = table.replace(np.nan, '', regex=True)
    return table.to_markdown(index=False)


if __name__ == "__main__":
    main()