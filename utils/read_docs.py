import os
import json

def get_docs(card: str, section='', version='NASTRAN-95') -> str:
    """Retrieves documentation for given Nastran entry and specified section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str, optional): Section the entry belongs to to specifically
                                 search. Defaults to ''.

    Returns:
        str: Documentation for Nastran entry
    """
    funcs = {
        'NASTRAN-95': read_NASTRAN_95_docs,
        'MSC Nastran': read_MSC_Nastran_docs,
    }
    # If section provided, search that section
    if section:
        out = funcs[version](card, section)
    else:
        # If section not provided, search in this order till entry is found
        for section in ["BULK", "CASE", "EXEC", "SUBS", "DMAP", "PLOT"]:
            out = funcs[version](card, section)
            if out:
                break
    # If documentation found, convert to markdown otherwise return empty string
    if version == 'NASTRAN-95':
        return convert_to_markdown(out) if out else out
    else:
#         out = R"""<h1 id="sample-markdown">Sample Markdown</h1>
# <p>This is some basic, sample markdown.</p>
# <h2 id="second-heading">Second Heading</h2>
# <ul>
# <li>Unordered lists, and:<ol>
# <li>One</li>
# <li>Two</li>
# <li>Three</li>
# </ol>
# </li>
# <li>More</li>
# </ul>
# <blockquote>
# <p>Blockquote</p>
# </blockquote>
# <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
# <p>And code highlighting:</p>
# <pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

# <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
#    <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
# }
# </code></pre>
# <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
# <p>Or an image of bears</p>
# <p><img src="http://placebear.com/200/200" alt="bears"></p>
# <p>The end ...</p>
# """
#         import unmarkd
#         out = unmarkd.unmark(out)
        return out

def read_NASTRAN_95_docs(card: str, section: str) -> str:
    """Parse NASTRAN-95 documentation given Nastran entry and section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str): Section the entry belongs to to specifically
                       search.

    Returns:
        str: Documentation for Nastran entry
    """
    # Ignore hover for comment
    if card == "$":
        return ''
    # Read raw NASTRAN-95 documentation
    with open(file=os.path.join("utils", "um", f"{section}.TXT"), mode="r") as f:
        lines = f.read()
    # Remove unknown characters
    lines = lines.replace("Ä","─")
    lines = lines.replace("Å","┼")
    lines = lines.replace("Â","┬")
    lines = lines.replace("³","│").replace("º","│")
    lines = lines.replace("Á","┴")
    lines = lines.replace("Ú","┌").replace("É","┌")
    lines = lines.replace("Ã","├")
    lines = lines.replace("À","└").replace("È","└")
    lines = lines.replace("¿","┐").replace("»","┐")
    lines = lines.replace("´","┤")
    lines = lines.replace("Ù","┘").replace("¼","┘")
    lines = lines.replace("é", "θ")
    lines = lines.replace("è", "φ").replace("í", "φ")
    lines = lines.replace("à", "α")
    # Split by =PAGE=
    lines = lines.split("=PAGE=\n")
    # Find index of desired card
    ind = [i for i, line in enumerate(lines) if line.startswith(card.upper())]
    # If not found, try trimming last char
    # (i.e. PDUM1 needs to use PDUMi documetation -> search for PDUM)
    if not ind:
        ind = [i for i, line in enumerate(lines) if line.startswith(card.upper()[:-1])]
    # TODO: Add logic to search all found cards and return the closest match
    #       instead of simply the first match
    return lines[ind[0]] if ind else ''

def read_MSC_Nastran_docs(card: str, section: str) -> str:
    """Parse MSC Nastran documentation given Nastran entry and section.

    Args:
        card (str): Nastran entry to provide documentation for
        section (str): Section the entry belongs to to specifically
                       search.

    Returns:
        str: Documentation for Nastran entry
    """
    # with open(os.path.join('utils', 'MSC_Nastran_urls.json'), 'r') as f:
    with open(os.path.join('utils', 'test.json'), 'r', encoding='utf-8') as f:
        docs = json.load(f)
    # if '$' not in card:
    #     if card in docs[section]:
    #         url = docs[section][card]
    #     else:
    #         for sect in docs:
    #             if card in docs[sect]:
    #                 url = docs[sect][card]
    #         if not url:
    #             return f"No documentation found for {card}"
    #     return f'Open documentation for [{card}]({url})'
    # return ''
    out = ""
    if card not in docs[section]:
        card = card[:-1]+'i'
    out = docs[section][card]['MARKDOWN']
    # if '$' not in card:
    #     doc = docs[section][card]
    #     out = ""
    #     if 'HEADER' in doc and 'URL' in doc:
    #         out += f"[{doc['HEADER']}]({doc['URL']})"
    #         if 'SUBHEADER' in doc:
    #             out += f" - {doc['SUBHEADER']}"
    #         out += "\n"
    #         out += "---------------------------------------\n"
    #     if 'BODY' in doc:
    #         out += f"{doc['BODY']}\n\n"
    #         out += "---------------------------------------\n"
    #     if 'FORMAT' in doc:
    #         out += f"{doc['FORMAT']}\n"
    #         out += "---------------------------------------\n"
    #     if 'EXAMPLE' in doc:
    #         out += f"{doc['EXAMPLE']}\n"
    #         out += "---------------------------------------\n"
    #     if 'DESCRIBER' in doc:
    #         out += "&nbsp;\n"
    #         out += f"{doc['DESCRIBER']}\n"
    return out

def convert_to_markdown(lines: str) -> str:
    return f"```text\n{lines}```"

if __name__ == "__main__":
    # Used for debugging
    os.chdir('..')
    print(get_docs('ALTER', section='EXEC', version='MSC Nastran'))