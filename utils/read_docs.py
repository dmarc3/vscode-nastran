import os
from glob import glob
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
    filename = os.path.join('utils', 'docs', section, 'COMPLETE', card+'.md')
    if os.path.exists(filename):
        out = open(filename, 'r', encoding='utf-8').read()
    else:
        filename = glob(os.path.join('utils', 'docs', section, 'COMPLETE', card+'*.md'))
        if filename:
            filename = filename[0]
            out = open(filename, 'r', encoding='utf-8').read()
        else:
            out = ''
    return out

def convert_to_markdown(lines: str) -> str:
    return f"```text\n{lines}```"

if __name__ == "__main__":
    # Used for debugging
    os.chdir('..')
    print(get_docs('ALTER', section='EXEC', version='MSC Nastran'))