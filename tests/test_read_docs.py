import os

from utils.read_docs import get_completion_item, get_docs

def test_read_docs():
    # Test full name
    out = get_docs('GRID', 'BULK', 'GRID')
    expected = open(os.path.join('utils', 'docs', 'BULK', 'GRID.md'), 'r', encoding='utf-8').read()
    assert out == expected
    # Test PARAM
    out = get_docs('POST', 'BULK', 'PARAM,POST')
    expected = open(os.path.join('utils', 'docs', 'BULK', 'PARAM', 'POST.md'), 'r', encoding='utf-8').read()
    assert out == expected
    # Test partial  (CASE only)
    out = get_docs('ACCELER', 'CASE', 'ACCELER')
    expected = open(os.path.join('utils', 'docs', 'CASE', 'ACCELERATION.md'), 'r', encoding='utf-8').read()
    assert out == expected

def test_get_docs():
    # ACCEL shows up as BULK as well as shortened CASE
    # Test BULK
    out = get_docs('ACCEL', 'BULK', 'ACCEL')
    expected = open(os.path.join('utils', 'docs', 'BULK', 'ACCEL.md'), 'r', encoding='utf-8').read()
    assert out == expected
    # Test CASE
    out = get_docs('ACCEL', 'CASE', 'ACCEL')
    expected = open(os.path.join('utils', 'docs', 'CASE', 'ACCELERATION.md'), 'r', encoding='utf-8').read()
    assert out == expected

def test_completion():
    # Read file and parse completion
    # Successful read
    out = get_completion_item(get_docs('GRID', 'BULK', 'GRID'))
    assert out == 'GRID    ID      CP      X1      X2      X3      CD      PS      SEID\n'
    # Unsuccessful read (Skip entries with " See " text)
    out = get_completion_item(get_docs('BCBODY', 'BULK', 'BCBODY'))
    assert out == ''
    # Unsuccessful read (No "```nastran" example)
    out = get_completion_item(get_docs('TEMPP3', 'BULK', 'TEMPP3'))
    assert out == ''
