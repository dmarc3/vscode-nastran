from typing import Tuple
from textwrap import wrap
import os
import shutil

import fitz

PDF_PATH = "MSC_Nastran_2022.4_Quick_Reference_Guide.pdf"
URL = "https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/"
FOLDER = 'hovers'

def gen_hovers():
    # Get all bulk data entries in QRG
    cards = get_bulk_data_cards()
    # Check if folder exists and delete
    if os.path.exists(FOLDER):
        shutil.rmtree(FOLDER)
    os.mkdir(FOLDER)
    # Loop through all cards:
    for card in cards:
        print(f"Generating hover text for {card}.")
        # Get raw text and location information from QRG
        text, location = get_bulk_data_doc(card)
        # Create formatted string output of bulk data entry hover
        text = get_bulk_data_txt(text, location)
        try:
            text = reformat_bulk_data_txt(text)
        except Exception as e:
            import ipdb; ipdb.set_trace()
            print(e)
        # Save results to file
        with open(os.path.join(FOLDER, card) + '.md', 'w', errors='ignore') as f:
            f.write(text)

def get_bulk_data_cards() -> list:
    """Retrieve a list of all bulk data entry cards in Quick Reference Guide

    Returns:
        list: List of strings representing all bulk data entry cards
              (i.e. GRID, CQUAD4, etc)
    """
    with fitz.open(PDF_PATH) as doc:
        # Read table of contents
        toc = doc.get_toc()
        # Get indeces of bulk data section
        indeces = [ind for ind, lst in enumerate(toc) if 'ABINFL' in lst[1] or 'Appendix A' in lst[1]]
        # Get all bulk data names
        return [lst[1] for lst in toc[indeces[0]:indeces[1]]]

def get_bulk_data_doc(card) -> Tuple[list, list]:
    with fitz.open(PDF_PATH) as doc:
        # Get page numbers of interest
        toc = doc.get_toc()
        for i, section in enumerate(toc):
            if section[1] == card:
                break
        page = toc[i][2]
        # Get raw page data
        pages = []
        for page in doc.pages(section[2]-1, toc[i+1][2]-1, 1):
            text = page.get_text("dict")
            # Sort text by boundary box location
            text['blocks'] = sorted(text['blocks'], key=lambda d: d['bbox'][1])
            pages.append(text['blocks'][1:-3])
        # Get raw text data
        text = []
        location = []
        found_card = True
        for sections in pages:
            for section in sections:
                txt = []
                loc = []
                if 'lines' in section:
                    for line in section['lines']:
                        for span in line['spans']:
                            if span['text'] == card:
                                found_card = not found_card
                            if found_card:
                                if len(span['text']) > 8:
                                    for item in span['text'].split():
                                        txt.append(item)
                                        x0 = span['bbox'][0]
                                        x1 = (span['bbox'][2]-span['bbox'][0])/2 + span['bbox'][0]
                                        loc.append(x0)
                                        loc.append(x1)
                                else:
                                    txt.append(span['text'])
                                    loc.append(span['origin'][0])
                            else:
                                txt.append(span['text'])
                                loc.append(span['origin'][0])
                    text.append(txt)
                    location.append(loc)
        return text, location

def get_bulk_data_txt(text, location) -> list:
    i = 0
    describer = False
    out = []
    while i < len(text):
        line = text[i]
        delta = [y-x for x, y in zip(location[i], location[i][1:])]
        if len(line) > 2 and not describer:
            new_line = []
            for j, txt in enumerate(line[:-1]):
                if delta[j] > 180:
                    new_line.append(txt.ljust(40))
                elif delta[j] > 120:
                    new_line.append(txt.ljust(32))
                elif delta[j] > 60:
                    new_line.append(txt.ljust(16))
                else:
                    new_line.append(txt.ljust(8))
            new_line += [line[-1].ljust(8)]
            new_line = ''.join(new_line)
        elif describer and line[0].isupper():
            tmp = [''.join(line[1:])]
            if ' ' not in ''.join(tmp):
                tmp = [' '.join(line[1:])]
            new_line = [line[0].ljust(16)] + tmp
            new_line = ''.join(new_line)
            new_line = [new_line]
            count = 0
            while any(len(y)>80 for y in new_line):
                if len(new_line) == 1:
                    new_line = wrap(new_line[count], 80) 
                else:
                    new_line = new_line[:count] + wrap(new_line[count], 80)
                count += 1
                new_line[count] = ' '*16 + new_line[count]
                new_line = new_line[:count] + [''.join(new_line[count:])]
            new_line = '\n'.join(new_line)
        elif line == ['Describer', 'Meaning']:
            new_line = [i.ljust(16) for i in line]
            new_line = ''.join(new_line)
            describer = True
        elif len(line) == 1 and line[0][-1] == ':':
            new_line = line[0]
        else:
            new_line = '\n'.join(wrap(' '.join(line), 80))
        out.append(new_line)
        i += 1
    return out

def reformat_bulk_data_txt(text) -> str:
    def add_divider(inp):
        ''' Method to add markdown divider to string '''
        inp += '-'*80+'\n'
        return inp
    # Preallocate string
    out = ""
    # Format Short Description
    short_description = text[0].split(" ", 1)
    short_description[0] = '__**['+short_description[0]+']('+build_bulk_data_url(short_description[0])+')**__   -   '
    out += ''.join(short_description)+'\n\n'
    out = add_divider(out)
    # Format Long Description
    indeces = [i for i, txt in enumerate(text) if txt.startswith('Format:')]
    if indeces:
        indeces = [1] + indeces
        long_description = '\n'.join(text[indeces[0]:indeces[1]]) + '\n\n'
        out += long_description.replace("  ", " ")
        out = add_divider(out)
    # Format Format
    indeces = [i for i, txt in enumerate(text) if txt.startswith('Format:')]
    if indeces:
        indeces += [i for i, txt in enumerate(text) if txt.startswith('Example')]
        format = text[indeces[0]:indeces[1]]
        format = "```text\n\n" + format[0] + '\n' + '\n'.join(format[1:]) + '\n\n\n```\n\n'
        out += format
        out = add_divider(out)
    # Format Example
    indeces = [i for i, txt in enumerate(text) if txt.startswith('Example')]
    if indeces and 'Describer       Meaning         ' in text:
        indeces += [text.index('Describer       Meaning         ')]
        example = text[indeces[0]:indeces[1]]
        example = "```text\n\n" + example[0] + '\n' + '\n'.join(example[1:]) + '\n\n\n```\n\n'
        out += example
        out = add_divider(out)
    # Format Describer / Meaning
    indeces = [i for i, txt in enumerate(text) if txt.startswith('Remarks')]
    if indeces and 'Describer       Meaning         ' in text:
        indeces = [text.index('Describer       Meaning         ')] + indeces
        describer = text[indeces[0]:indeces[1]]
        describer = "```text\n\n" + describer[0] + '\n' + '-'*80 + '\n' + '\n'.join(describer[1:]) + '\n\n\n```\n\n'
        out += describer
        out = add_divider(out)
    
    return out
    

def build_bulk_data_url(card):
    """Builds Hexagon QRG URL for given bulk data entry
    """
    chars = card[0]
    if chars == "C":
        chars = card[:2]

    if chars in ['A', 'B']:
        bulk = 'bulkab'
    elif chars in ['CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN']:
        bulk = 'bulkc1'
    elif chars in ['CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ']:
        bulk = 'bulkc2'
    elif chars in ['D', 'E']:
        bulk = 'bulkde'
    elif chars in ['F', 'G', 'H', 'I', 'J', 'K', 'L']:
        bulk = 'bulkfgil'
    elif chars in ['M', 'N', 'O']:
        bulk = 'bulkmno'
    elif chars in ['P']:
        bulk = 'bulkp'
    elif chars in ['Q', 'R', 'S']:
        bulk = 'bulkqrs'
    elif chars in ['T', 'U', 'V', 'W', 'X', 'Y', 'Z']:
        bulk = 'bulktuv'

    return URL + bulk +'/TOC.' + card + '.xhtml'

if __name__ == "__main__":
    gen_hovers()
