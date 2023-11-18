import { assert, expect } from 'chai'

import * as fl from '../client/src/femload.mjs'

describe('Convert string field to float', function () {
    it('Processing default', function () {
        assert.equal(fl.str2float("        "), 0.)
    });
    it('Processing decimal float', function () {
        assert.equal(fl.str2float("     2.0"), 2.)
        assert.equal(fl.str2float("  2.    "), 2.)
        assert.equal(fl.str2float("2.0     "), 2.)
        assert.equal(fl.str2float("    -2.0"), -2.)
    });
    it('Processing scientific notation', function () {
        assert.equal(fl.str2float("2.4E-10 "), 2.4e-10)
        assert.equal(fl.str2float("2.4e-10 "), 2.4e-10)
        assert.equal(fl.str2float("2.4E+10 "), 2.4e+10)
        assert.equal(fl.str2float("2.4E10 "), 2.4e+10)
        assert.equal(fl.str2float("-2.4E-10"), -2.4e-10)
        assert.equal(fl.str2float("-2.4E+10"), -2.4e+10)
        assert.equal(fl.str2float("-2.4E10"), -2.4e+10)
        assert.equal(fl.str2float("2.4D+10 "), 2.4e+10)
        assert.equal(fl.str2float("2.4+10 "), 2.4e+10)
        assert.equal(fl.str2float("2.4-10 "), 2.4e-10)
        assert.equal(fl.str2float("-2.4+10"), -2.4e+10)
        assert.equal(fl.str2float("-2.4-10"), -2.4e-10)
    })
    it('Processing non-floats', function () {
        assert.isNaN(fl.str2float("not float"))
    })
});

describe('Load GRID from lines', function () {
    it('Processing short field', function () {
        const lines = ['GRID    1       2       3.0     4.0     5.0     6       7       8']
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
        const actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][0]['ID'],   expected['GRID'][0]['ID'])
        assert.equal(actual['GRID'][0]['CP'],   expected['GRID'][0]['CP'])
        assert.equal(actual['GRID'][0]['X1'],   expected['GRID'][0]['X1'])
        assert.equal(actual['GRID'][0]['X2'],   expected['GRID'][0]['X2'])
        assert.equal(actual['GRID'][0]['X3'],   expected['GRID'][0]['X3'])
        assert.equal(actual['GRID'][0]['CD'],   expected['GRID'][0]['CD'])
        assert.equal(actual['GRID'][0]['PS'],   expected['GRID'][0]['PS'])
        assert.equal(actual['GRID'][0]['SEID'], expected['GRID'][0]['SEID'])
    });
    it('Processing long field', function () {
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
        var actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][0]['ID'],   expected['GRID'][0]['ID'])
        assert.equal(actual['GRID'][0]['CP'],   expected['GRID'][0]['CP'])
        assert.equal(actual['GRID'][0]['X1'],   expected['GRID'][0]['X1'])
        assert.equal(actual['GRID'][0]['X2'],   expected['GRID'][0]['X2'])
        assert.equal(actual['GRID'][0]['X3'],   expected['GRID'][0]['X3'])
        assert.equal(actual['GRID'][0]['CD'],   expected['GRID'][0]['CD'])
        assert.equal(actual['GRID'][0]['PS'],   expected['GRID'][0]['PS'])
        assert.equal(actual['GRID'][0]['SEID'], expected['GRID'][0]['SEID'])
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
        actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][0]['ID'],   expected['GRID'][0]['ID'])
        assert.equal(actual['GRID'][0]['CP'],   expected['GRID'][0]['CP'])
        assert.equal(actual['GRID'][0]['X1'],   expected['GRID'][0]['X1'])
        assert.equal(actual['GRID'][0]['X2'],   expected['GRID'][0]['X2'])
        assert.equal(actual['GRID'][0]['X3'],   expected['GRID'][0]['X3'])
        assert.equal(actual['GRID'][0]['CD'],   expected['GRID'][0]['CD'])
        assert.equal(actual['GRID'][0]['PS'],   expected['GRID'][0]['PS'])
        assert.equal(actual['GRID'][0]['SEID'], expected['GRID'][0]['SEID'])
    });
    it('Processing free field', function () {
        const lines = ['GRID,1,2,3.0,4.0,5.0,6,7,8']
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
        const actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][0]['ID'],   expected['GRID'][0]['ID'])
        assert.equal(actual['GRID'][0]['CP'],   expected['GRID'][0]['CP'])
        assert.equal(actual['GRID'][0]['X1'],   expected['GRID'][0]['X1'])
        assert.equal(actual['GRID'][0]['X2'],   expected['GRID'][0]['X2'])
        assert.equal(actual['GRID'][0]['X3'],   expected['GRID'][0]['X3'])
        assert.equal(actual['GRID'][0]['CD'],   expected['GRID'][0]['CD'])
        assert.equal(actual['GRID'][0]['PS'],   expected['GRID'][0]['PS'])
        assert.equal(actual['GRID'][0]['SEID'], expected['GRID'][0]['SEID'])
    });
    it('Processing field validation', function () {
        const lines = ['GRID    THIS    IS      NOT     A       REAL    GRID']
        expect(function() {fl.process_grid({}, lines)}).to.throw('ID is not an integer!');
    });
});

describe('Load 2D 3-edge elements from lines', function () {
    it('Processing short field', function () {
        const lines = ['CTRIA3  1       2       3       4       5']
        const expected = {
            "2D_3e": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5
                }
            }
        }
        const actual = fl.process_2D_3e({}, lines);
        assert.equal(actual['2D_3e']['1']['G1'], expected['2D_3e']['1']['G1'])
        assert.equal(actual['2D_3e']['1']['G2'], expected['2D_3e']['1']['G2'])
        assert.equal(actual['2D_3e']['1']['G3'], expected['2D_3e']['1']['G3'])
    })
    it('Processing long field', function () {
        const lines = [
            'CTRIA3* 1               2               3                4               ',
            '        5'
        ]
        const expected = {
            "2D_3e": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5
                }
            }
        }
        const actual = fl.process_2D_3e({}, lines);
        assert.equal(actual['2D_3e']['1']['G1'], expected['2D_3e']['1']['G1'])
        assert.equal(actual['2D_3e']['1']['G2'], expected['2D_3e']['1']['G2'])
        assert.equal(actual['2D_3e']['1']['G3'], expected['2D_3e']['1']['G3'])
    })
    it('Processing free field', function () {
        const lines = ['CTRIA3,1,2,3,4,5']
        const expected = {
            "2D_3e": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5
                }
            }
        }
        const actual = fl.process_2D_3e({}, lines);
        assert.equal(actual['2D_3e']['1']['G1'], expected['2D_3e']['1']['G1'])
        assert.equal(actual['2D_3e']['1']['G2'], expected['2D_3e']['1']['G2'])
        assert.equal(actual['2D_3e']['1']['G3'], expected['2D_3e']['1']['G3'])
    });
    it('Processing field validation', function () {
        const lines = ['CTRIA3  THIS    IS      NOT     A       REAL    TRI']
        expect(function() {fl.process_2D_3e({}, lines)}).to.throw('G1 is not an integer!');
    });
});

describe('Load 2D 4-edge elements from lines', function () {
    it('Processing short field', function () {
        const lines = ['CQUAD4  1       2       3       4       5       6       ']
        const expected = {
            "2D_4e": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6
                }
            }
        }
        const actual = fl.process_2D_4e({}, lines);
        assert.equal(actual['2D_4e']['1']['G1'], expected['2D_4e']['1']['G1'])
        assert.equal(actual['2D_4e']['1']['G2'], expected['2D_4e']['1']['G2'])
        assert.equal(actual['2D_4e']['1']['G3'], expected['2D_4e']['1']['G3'])
        assert.equal(actual['2D_4e']['1']['G4'], expected['2D_4e']['1']['G4'])
    })
    it('Processing long field', function () {
        const lines = [
            'CQUAD4* 1               2               3                4               ',
            '        5               6'
        ]
        const expected = {
            "2D_4e": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6
                }
            }
        }
        const actual = fl.process_2D_4e({}, lines);
        assert.equal(actual['2D_4e']['1']['G1'], expected['2D_4e']['1']['G1'])
        assert.equal(actual['2D_4e']['1']['G2'], expected['2D_4e']['1']['G2'])
        assert.equal(actual['2D_4e']['1']['G3'], expected['2D_4e']['1']['G3'])
        assert.equal(actual['2D_4e']['1']['G4'], expected['2D_4e']['1']['G4'])
    })
    it('Processing free field', function () {
        const lines = ['CQUAD4,1,2,3,4,5,6']
        const expected = {
            "2D_4e": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6
                }
            }
        }
        const actual = fl.process_2D_4e({}, lines);
        assert.equal(actual['2D_4e']['1']['G1'], expected['2D_4e']['1']['G1'])
        assert.equal(actual['2D_4e']['1']['G2'], expected['2D_4e']['1']['G2'])
        assert.equal(actual['2D_4e']['1']['G3'], expected['2D_4e']['1']['G3'])
        assert.equal(actual['2D_4e']['1']['G4'], expected['2D_4e']['1']['G4'])
    });
    it('Processing field validation', function () {
        const lines = ['CQUAD4  THIS    IS      NOT     A       REAL    QUAD']
        expect(function() {fl.process_2D_4e({}, lines)}).to.throw('G1 is not an integer!');
    });
});

describe('Load 3D 4-sided elements from lines', function () {
    it('Processing short field', function () {
        const lines = ['CTETRA  1       2       3       4       5       6       ']
        const expected = {
            "3D_4s": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6
                }
            }
        }
        const actual = fl.process_3D_4s({}, lines);
        assert.equal(actual['3D_4s']['1']['G1'], expected['3D_4s']['1']['G1'])
        assert.equal(actual['3D_4s']['1']['G2'], expected['3D_4s']['1']['G2'])
        assert.equal(actual['3D_4s']['1']['G3'], expected['3D_4s']['1']['G3'])
        assert.equal(actual['3D_4s']['1']['G4'], expected['3D_4s']['1']['G4'])
    })
    it('Processing long field', function () {
        const lines = [
            'CTETRA* 1               2               3                4               ',
            '        5               6'
        ]
        const expected = {
            "3D_4s": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6
                }
            }
        }
        const actual = fl.process_3D_4s({}, lines);
        assert.equal(actual['3D_4s']['1']['G1'], expected['3D_4s']['1']['G1'])
        assert.equal(actual['3D_4s']['1']['G2'], expected['3D_4s']['1']['G2'])
        assert.equal(actual['3D_4s']['1']['G3'], expected['3D_4s']['1']['G3'])
        assert.equal(actual['3D_4s']['1']['G4'], expected['3D_4s']['1']['G4'])
    })
    it('Processing free field', function () {
        const lines = ['CTETRA,1,2,3,4,5,6']
        const expected = {
            "3D_4s": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6
                }
            }
        }
        const actual = fl.process_3D_4s({}, lines);
        assert.equal(actual['3D_4s']['1']['G1'], expected['3D_4s']['1']['G1'])
        assert.equal(actual['3D_4s']['1']['G2'], expected['3D_4s']['1']['G2'])
        assert.equal(actual['3D_4s']['1']['G3'], expected['3D_4s']['1']['G3'])
        assert.equal(actual['3D_4s']['1']['G4'], expected['3D_4s']['1']['G4'])
    });
    it('Processing field validation', function () {
        const lines = ['CTETRA  THIS    IS      NOT     A       REAL    QUAD']
        expect(function() {fl.process_3D_4s({}, lines)}).to.throw('G1 is not an integer!');
    });
});

describe('Load 3D 5-sided elements (a) from lines', function () {
    it('Processing short field', function () {
        const lines = ['CPYRAM  1       2       3       4       5       6       7        8       ',
                       '        9       10']
        const expected = {
            "3D_5s_a": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7
                }
            }
        }
        const actual = fl.process_3D_5s_a({}, lines);
        assert.equal(actual['3D_5s_a']['1']['G1'], expected['3D_5s_a']['1']['G1'])
        assert.equal(actual['3D_5s_a']['1']['G2'], expected['3D_5s_a']['1']['G2'])
        assert.equal(actual['3D_5s_a']['1']['G3'], expected['3D_5s_a']['1']['G3'])
        assert.equal(actual['3D_5s_a']['1']['G4'], expected['3D_5s_a']['1']['G4'])
        assert.equal(actual['3D_5s_a']['1']['G5'], expected['3D_5s_a']['1']['G5'])
    })
    it('Processing long field', function () {
        const lines = [
            'CPYRAM* 1               2               3                4               ',
            '        5               6               7                8               ',
            '        9               10              '
        ]
        const expected = {
            "3D_5s_a": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                }
            }
        }
        const actual = fl.process_3D_5s_a({}, lines);
        assert.equal(actual['3D_5s_a']['1']['G1'], expected['3D_5s_a']['1']['G1'])
        assert.equal(actual['3D_5s_a']['1']['G2'], expected['3D_5s_a']['1']['G2'])
        assert.equal(actual['3D_5s_a']['1']['G3'], expected['3D_5s_a']['1']['G3'])
        assert.equal(actual['3D_5s_a']['1']['G4'], expected['3D_5s_a']['1']['G4'])
        assert.equal(actual['3D_5s_a']['1']['G5'], expected['3D_5s_a']['1']['G5'])
    })
    it('Processing free field', function () {
        const lines = [
            'CPYRAM,1,2,3,4,5,6,7,8',
            ',9,10'
        ]
        const expected = {
            "3D_5s_a": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                }
            }
        }
        const actual = fl.process_3D_5s_a({}, lines);
        assert.equal(actual['3D_5s_a']['1']['G1'], expected['3D_5s_a']['1']['G1'])
        assert.equal(actual['3D_5s_a']['1']['G2'], expected['3D_5s_a']['1']['G2'])
        assert.equal(actual['3D_5s_a']['1']['G3'], expected['3D_5s_a']['1']['G3'])
        assert.equal(actual['3D_5s_a']['1']['G4'], expected['3D_5s_a']['1']['G4'])
        assert.equal(actual['3D_5s_a']['1']['G5'], expected['3D_5s_a']['1']['G5'])
    });
    it('Processing field validation', function () {
        const lines = [
            'CPYRAM  THIS    IS      NOT     A       REAL    PYRAM',
            'ELEMENT FOR SURE'
        ]
        expect(function() {fl.process_3D_5s_a({}, lines)}).to.throw('G1 is not an integer!');
    });
});

describe('Load 3D 5-sided elements (b) from lines', function () {
    it('Processing short field', function () {
        const lines = ['CPENTA  1       2       3       4       5       6       7        8       ',
                       '        9       10']
        const expected = {
            "3D_5s_b": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                    "G6": 8,
                }
            }
        }
        const actual = fl.process_3D_5s_b({}, lines);
        assert.equal(actual['3D_5s_b']['1']['G1'], expected['3D_5s_b']['1']['G1'])
        assert.equal(actual['3D_5s_b']['1']['G2'], expected['3D_5s_b']['1']['G2'])
        assert.equal(actual['3D_5s_b']['1']['G3'], expected['3D_5s_b']['1']['G3'])
        assert.equal(actual['3D_5s_b']['1']['G4'], expected['3D_5s_b']['1']['G4'])
        assert.equal(actual['3D_5s_b']['1']['G5'], expected['3D_5s_b']['1']['G5'])
        assert.equal(actual['3D_5s_b']['1']['G6'], expected['3D_5s_b']['1']['G6'])
    })
    it('Processing long field', function () {
        const lines = [
            'CPENTA* 1               2               3                4               ',
            '        5               6               7                8               ',
            '        9               10              '
        ]
        const expected = {
            "3D_5s_b": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                    "G6": 8,
                }
            }
        }
        const actual = fl.process_3D_5s_b({}, lines);
        assert.equal(actual['3D_5s_b']['1']['G1'], expected['3D_5s_b']['1']['G1'])
        assert.equal(actual['3D_5s_b']['1']['G2'], expected['3D_5s_b']['1']['G2'])
        assert.equal(actual['3D_5s_b']['1']['G3'], expected['3D_5s_b']['1']['G3'])
        assert.equal(actual['3D_5s_b']['1']['G4'], expected['3D_5s_b']['1']['G4'])
        assert.equal(actual['3D_5s_b']['1']['G5'], expected['3D_5s_b']['1']['G5'])
        assert.equal(actual['3D_5s_b']['1']['G6'], expected['3D_5s_b']['1']['G6'])
    })
    it('Processing free field', function () {
        const lines = [
            'CPENTA,1,2,3,4,5,6,7,8',
            ',9,10'
        ]
        const expected = {
            "3D_5s_b": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                    "G6": 8,
                }
            }
        }
        const actual = fl.process_3D_5s_b({}, lines);
        assert.equal(actual['3D_5s_b']['1']['G1'], expected['3D_5s_b']['1']['G1'])
        assert.equal(actual['3D_5s_b']['1']['G2'], expected['3D_5s_b']['1']['G2'])
        assert.equal(actual['3D_5s_b']['1']['G3'], expected['3D_5s_b']['1']['G3'])
        assert.equal(actual['3D_5s_b']['1']['G4'], expected['3D_5s_b']['1']['G4'])
        assert.equal(actual['3D_5s_b']['1']['G5'], expected['3D_5s_b']['1']['G5'])
        assert.equal(actual['3D_5s_b']['1']['G6'], expected['3D_5s_b']['1']['G6'])
    });
    it('Processing field validation', function () {
        const lines = [
            'CPENTA  THIS    IS      NOT     A       REAL    PENTA',
            'ELEMENT FOR SURE'
        ]
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('G1 is not an integer!');
    });
});

describe('Load 3D 6-sided elements from lines', function () {
    it('Processing short field', function () {
        const lines = ['CHEXA   1       2       3       4       5       6       7        8       ',
                       '        9       10']
        const expected = {
            "3D_6s": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                    "G6": 8,
                    "G7": 9,
                    "G8": 10
                }
            }
        }
        const actual = fl.process_3D_6s({}, lines);
        assert.equal(actual['3D_6s']['1']['G1'], expected['3D_6s']['1']['G1'])
        assert.equal(actual['3D_6s']['1']['G2'], expected['3D_6s']['1']['G2'])
        assert.equal(actual['3D_6s']['1']['G3'], expected['3D_6s']['1']['G3'])
        assert.equal(actual['3D_6s']['1']['G4'], expected['3D_6s']['1']['G4'])
        assert.equal(actual['3D_6s']['1']['G5'], expected['3D_6s']['1']['G5'])
        assert.equal(actual['3D_6s']['1']['G6'], expected['3D_6s']['1']['G6'])
        assert.equal(actual['3D_6s']['1']['G7'], expected['3D_6s']['1']['G7'])
        assert.equal(actual['3D_6s']['1']['G8'], expected['3D_6s']['1']['G8'])
    })
    it('Processing long field', function () {
        const lines = [
            'CHEXA*  1               2               3                4               ',
            '        5               6               7                8               ',
            '        9               10              '
        ]
        const expected = {
            "3D_6s": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                    "G6": 8,
                    "G7": 9,
                    "G8": 10
                }
            }
        }
        const actual = fl.process_3D_6s({}, lines);
        assert.equal(actual['3D_6s']['1']['G1'], expected['3D_6s']['1']['G1'])
        assert.equal(actual['3D_6s']['1']['G2'], expected['3D_6s']['1']['G2'])
        assert.equal(actual['3D_6s']['1']['G3'], expected['3D_6s']['1']['G3'])
        assert.equal(actual['3D_6s']['1']['G4'], expected['3D_6s']['1']['G4'])
        assert.equal(actual['3D_6s']['1']['G5'], expected['3D_6s']['1']['G5'])
        assert.equal(actual['3D_6s']['1']['G6'], expected['3D_6s']['1']['G6'])
        assert.equal(actual['3D_6s']['1']['G7'], expected['3D_6s']['1']['G7'])
        assert.equal(actual['3D_6s']['1']['G8'], expected['3D_6s']['1']['G8'])
    })
    it('Processing free field', function () {
        const lines = [
            'CHEXA,1,2,3,4,5,6,7,8',
            ',9,10'
        ]
        const expected = {
            "3D_6s": {
                '1': {
                    "G1": 3,
                    "G2": 4,
                    "G3": 5,
                    "G4": 6,
                    "G5": 7,
                    "G6": 8,
                    "G7": 9,
                    "G8": 10
                }
            }
        }
        const actual = fl.process_3D_6s({}, lines);
        assert.equal(actual['3D_6s']['1']['G1'], expected['3D_6s']['1']['G1'])
        assert.equal(actual['3D_6s']['1']['G2'], expected['3D_6s']['1']['G2'])
        assert.equal(actual['3D_6s']['1']['G3'], expected['3D_6s']['1']['G3'])
        assert.equal(actual['3D_6s']['1']['G4'], expected['3D_6s']['1']['G4'])
        assert.equal(actual['3D_6s']['1']['G5'], expected['3D_6s']['1']['G5'])
        assert.equal(actual['3D_6s']['1']['G6'], expected['3D_6s']['1']['G6'])
        assert.equal(actual['3D_6s']['1']['G7'], expected['3D_6s']['1']['G7'])
        assert.equal(actual['3D_6s']['1']['G8'], expected['3D_6s']['1']['G8'])
    });
    it('Processing field validation', function () {
        const lines = [
            'CHEXA   THIS    IS      NOT     A       REAL    HEXA',
            'ELEMENT FOR SURE'
        ]
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G1 is not an integer!');
    });
});


