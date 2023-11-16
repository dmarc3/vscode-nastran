var assert = require('chai').assert

var fs = require('fs');
var vm = require('vm');
var path = 'client/src/femload.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('Convert string field to float', function () {
    it('Processing default', function () {
        assert.equal(str2float("        "), 0.)
    });
    it('Processing decimal float', function () {
        assert.equal(2., str2float("     2.0"))
        assert.equal(2., str2float("  2.    "))
        assert.equal(2., str2float("2.0     "))
        assert.equal(-2., str2float("    -2.0"))
    });
    it('Processing scientific notation', function () {
        assert.equal(2.4e-10, str2float("2.4E-10 "))
        assert.equal(2.4e-10, str2float("2.4e-10 "))
        assert.equal(2.4e+10, str2float("2.4E+10 "))
        assert.equal(2.4e+10, str2float("2.4E10 "))
        assert.equal(-2.4e-10, str2float("-2.4E-10"))
        assert.equal(-2.4e+10, str2float("-2.4E+10"))
        assert.equal(-2.4e+10, str2float("-2.4E10"))
        assert.equal(2.4e+10, str2float("2.4D+10 "))
        assert.equal(2.4e+10, str2float("2.4+10 "))
        assert.equal(2.4e-10, str2float("2.4-10 "))
        assert.equal(-2.4e+10, str2float("-2.4+10"))
        assert.equal(-2.4e-10, str2float("-2.4-10"))
    })
    it('Processing non-floats', function () {
        assert.isNaN(str2float("not float"))
    })
});

describe('Load GRID from lines', function () {
    it('Processing short field grid', function () {
        const lines = [
            'GRID    1       2       3.0     4.0     5.0     6       7       8',
            ''
        ]
        const expected = {
            "GRID": [
                {
                    "ID": 1,
                    "CP": 2,
                    "X1": 3.,
                    "X2": 4.,
                    "X3": 5.,
                    "CD": 6,
                    "PS": 7,
                    "SEID": 8,
                }
            ]
        }
        const actual = process_grid({}, lines);
        assert.equal(expected['GRID'][0]['ID'], actual['GRID'][0]['ID'])
        assert.equal(expected['GRID'][0]['CP'], actual['GRID'][0]['CP'])
        assert.equal(expected['GRID'][0]['X1'], actual['GRID'][0]['X1'])
        assert.equal(expected['GRID'][0]['X2'], actual['GRID'][0]['X2'])
        assert.equal(expected['GRID'][0]['X3'], actual['GRID'][0]['X3'])
        assert.equal(expected['GRID'][0]['CD'], actual['GRID'][0]['CD'])
        assert.equal(expected['GRID'][0]['PS'], actual['GRID'][0]['PS'])
        assert.equal(expected['GRID'][0]['SEID'], actual['GRID'][0]['SEID'])
    });
    it('Processing long field grid', function () {
        var lines = [
            'GRID*   1               2               3.0             4.0',
            '*       5.0             6               7               8'
        ]
        var expected = {
            "GRID": [
                {
                    "ID": 1,
                    "CP": 2,
                    "X1": 3.,
                    "X2": 4.,
                    "X3": 5.,
                    "CD": 6,
                    "PS": 7,
                    "SEID": 8,
                }
            ]
        }
        var actual = process_grid({}, lines);
        assert.equal(expected['GRID'][0]['ID'],   actual['GRID'][0]['ID'])
        assert.equal(expected['GRID'][0]['CP'],   actual['GRID'][0]['CP'])
        assert.equal(expected['GRID'][0]['X1'],   actual['GRID'][0]['X1'])
        assert.equal(expected['GRID'][0]['X2'],   actual['GRID'][0]['X2'])
        assert.equal(expected['GRID'][0]['X3'],   actual['GRID'][0]['X3'])
        assert.equal(expected['GRID'][0]['CD'],   actual['GRID'][0]['CD'])
        assert.equal(expected['GRID'][0]['PS'],   actual['GRID'][0]['PS'])
        assert.equal(expected['GRID'][0]['SEID'], actual['GRID'][0]['SEID'])
        lines = [
            'GRID   *1               2               3.0             4.0',
            '*       5.0             6               7               8'
        ]
        expected = {
            "GRID": [
                {
                    "ID": 1,
                    "CP": 2,
                    "X1": 3.,
                    "X2": 4.,
                    "X3": 5.,
                    "CD": 6,
                    "PS": 7,
                    "SEID": 8,
                }
            ]
        }
        actual = process_grid({}, lines);
        assert.equal(expected['GRID'][0]['ID'],   actual['GRID'][0]['ID'])
        assert.equal(expected['GRID'][0]['CP'],   actual['GRID'][0]['CP'])
        assert.equal(expected['GRID'][0]['X1'],   actual['GRID'][0]['X1'])
        assert.equal(expected['GRID'][0]['X2'],   actual['GRID'][0]['X2'])
        assert.equal(expected['GRID'][0]['X3'],   actual['GRID'][0]['X3'])
        assert.equal(expected['GRID'][0]['CD'],   actual['GRID'][0]['CD'])
        assert.equal(expected['GRID'][0]['PS'],   actual['GRID'][0]['PS'])
        assert.equal(expected['GRID'][0]['SEID'], actual['GRID'][0]['SEID'])
    });
});