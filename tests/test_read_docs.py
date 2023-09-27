import os

from utils.read_docs import get_completion_item, get_docs, read_MSC_Nastran_docs

def test_read_docs():
    # Test unknown section
    out = read_MSC_Nastran_docs('GRID', 'FAKE')
    expected = ''
    assert out == expected
    # Test full name
    out = read_MSC_Nastran_docs('GRID', 'BULK')
    expected = open(os.path.join('utils', 'docs', 'BULK', 'GRID.md'), 'r', encoding='utf-8').read()
    assert out == expected
    # Test PARAM
    out = read_MSC_Nastran_docs('POST', 'BULK')
    expected = open(os.path.join('utils', 'docs', 'BULK', 'PARAM', 'POST.md'), 'r', encoding='utf-8').read()
    assert out == expected
    # Test partial  (CASE only)
    out = read_MSC_Nastran_docs('ACCELER', 'CASE')
    expected = open(os.path.join('utils', 'docs', 'CASE', 'ACCELERATION.md'), 'r', encoding='utf-8').read()
    assert out == expected

def test_get_docs():
    # ACCEL shows up as BULK as well as shortened CASE
    # Test BULK
    out = get_docs('ACCEL', 'BULK')
    expected = open(os.path.join('utils', 'docs', 'BULK', 'ACCEL.md'), 'r', encoding='utf-8').read()
    assert out == expected
    # Test CASE
    out = get_docs('ACCEL', 'CASE')
    expected = open(os.path.join('utils', 'docs', 'CASE', 'ACCELERATION.md'), 'r', encoding='utf-8').read()
    assert out == expected
    # Test no section provided
    out = get_docs('ACCEL')
    expected = open(os.path.join('utils', 'docs', 'CASE', 'ACCELERATION.md'), 'r', encoding='utf-8').read()
    assert out == expected

def test_completion():
    # Read file and parse completion
    # Successful read
    out = get_completion_item(read_MSC_Nastran_docs('GRID', 'BULK'))
    assert out == 'GRID    ID      CP      X1      X2      X3      CD      PS      SEID\n'
    # Unsuccessful read (Skip entries with " See " text)
    out = get_completion_item(read_MSC_Nastran_docs('BCBODY', 'BULK'))
    assert out == ''
    # Unsuccessful read (No "```nastran" example)
    out = get_completion_item(read_MSC_Nastran_docs('TEMPP3', 'BULK'))
    assert out == ''
