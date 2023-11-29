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
        assert.equal(fl.str2float("+2.0    "), 2.)
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
        const lines = ['GRID    1               3.0     4.0     5.0     6       7       8']
        const expected = {
            "GRID": {
                1:
                {
                    "CP": 0,
                    "X1": 3.,
                    "X2": 4.,
                    "X3": 5.,
                    "CD": 6,
                    "PS": 7,
                    "SEID": 8,
                }
            }
        }
        const actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][1]['CP'],   expected['GRID'][1]['CP'])
        assert.equal(actual['GRID'][1]['X1'],   expected['GRID'][1]['X1'])
        assert.equal(actual['GRID'][1]['X2'],   expected['GRID'][1]['X2'])
        assert.equal(actual['GRID'][1]['X3'],   expected['GRID'][1]['X3'])
        assert.equal(actual['GRID'][1]['CD'],   expected['GRID'][1]['CD'])
        assert.equal(actual['GRID'][1]['PS'],   expected['GRID'][1]['PS'])
        assert.equal(actual['GRID'][1]['SEID'], expected['GRID'][1]['SEID'])
    });
    it('Processing long field', function () {
        var lines = [
            'GRID*   1               2               3.0             4.0',
            '*       5.0             6               7               8'
        ]
        var expected = {
            "GRID": {
                1:
                {
                    "CP": 2,
                    "X1": 3.,
                    "X2": 4.,
                    "X3": 5.,
                    "CD": 6,
                    "PS": 7,
                    "SEID": 8,
                }
            }
        }
        var actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][1]['CP'],   expected['GRID'][1]['CP'])
        assert.equal(actual['GRID'][1]['X1'],   expected['GRID'][1]['X1'])
        assert.equal(actual['GRID'][1]['X2'],   expected['GRID'][1]['X2'])
        assert.equal(actual['GRID'][1]['X3'],   expected['GRID'][1]['X3'])
        assert.equal(actual['GRID'][1]['CD'],   expected['GRID'][1]['CD'])
        assert.equal(actual['GRID'][1]['PS'],   expected['GRID'][1]['PS'])
        assert.equal(actual['GRID'][1]['SEID'], expected['GRID'][1]['SEID'])
        lines = [
            'GRID   *1               2               3.0             4.0',
            '*       5.0             6               7               8'
        ]
        expected = {
            "GRID": {
                1:
                {
                    "CP": 2,
                    "X1": 3.,
                    "X2": 4.,
                    "X3": 5.,
                    "CD": 6,
                    "PS": 7,
                    "SEID": 8,
                }
            }
        }
        actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][1]['CP'],   expected['GRID'][1]['CP'])
        assert.equal(actual['GRID'][1]['X1'],   expected['GRID'][1]['X1'])
        assert.equal(actual['GRID'][1]['X2'],   expected['GRID'][1]['X2'])
        assert.equal(actual['GRID'][1]['X3'],   expected['GRID'][1]['X3'])
        assert.equal(actual['GRID'][1]['CD'],   expected['GRID'][1]['CD'])
        assert.equal(actual['GRID'][1]['PS'],   expected['GRID'][1]['PS'])
        assert.equal(actual['GRID'][1]['SEID'], expected['GRID'][1]['SEID'])
    });
    it('Processing free field', function () {
        const lines = ['GRID,1,2,3.0,4.0,5.0,6,7,8']
        const expected = {
            "GRID": {
                1:
                {
                    "CP": 2,
                    "X1": 3.,
                    "X2": 4.,
                    "X3": 5.,
                    "CD": 6,
                    "PS": 7,
                    "SEID": 8,
                }
            }
        }
        const actual = fl.process_grid({}, lines);
        assert.equal(actual['GRID'][1]['CP'],   expected['GRID'][1]['CP'])
        assert.equal(actual['GRID'][1]['X1'],   expected['GRID'][1]['X1'])
        assert.equal(actual['GRID'][1]['X2'],   expected['GRID'][1]['X2'])
        assert.equal(actual['GRID'][1]['X3'],   expected['GRID'][1]['X3'])
        assert.equal(actual['GRID'][1]['CD'],   expected['GRID'][1]['CD'])
        assert.equal(actual['GRID'][1]['PS'],   expected['GRID'][1]['PS'])
        assert.equal(actual['GRID'][1]['SEID'], expected['GRID'][1]['SEID'])
    });
    it('Processing field validation', function () {
        // Bad ID
        var lines = ['GRID    BAD     2       3.0     4.0     5.0     6       7       8']
        expect(function() {fl.process_grid({}, lines)}).to.throw('ID is not an integer!');
        // Bad X1
        lines = ['GRID    1       2       BAD     4.0     5.0     6       7       8']
        expect(function() {fl.process_grid({}, lines)}).to.throw('X1 is not a float!')
        // Bad X2
        lines = ['GRID    1       2       3.0     BAD     5.0     6       7       8']
        expect(function() {fl.process_grid({}, lines)}).to.throw('X2 is not a float!')
        // Bad X3
        lines = ['GRID    1       2       3.0     4.0     BAD     6       7       8']
        expect(function() {fl.process_grid({}, lines)}).to.throw('X3 is not a float!')
    });
});

describe('Load 1D elements (a) from lines', function () {
    it('Processing short field', function () {
        const lines = ['CROD    1       2       3       4']
        const expected = {
            "1D": {
                '1': {
                    "G1": 3,
                    "G2": 4
                }
            }
        }
        const actual = fl.process_1d_a({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    })
    it('Processing long field', function () {
        const lines = ['CROD*   1               2               3                4               ']
        const expected = {
            "1D": {
                '1': {
                    "G1": 3,
                    "G2": 4
                }
            }
        }
        const actual = fl.process_1d_a({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    })
    it('Processing free field', function () {
        const lines = ['CROD,1,2,3,4']
        const expected = {
            "1D": {
                '1': {
                    "G1": 3,
                    "G2": 4
                }
            }
        }
        const actual = fl.process_1d_a({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    });
    it('Processing field validation', function () {
        // Bad EID
        var lines = ['CROD    BAD     2       3       4']
        expect(function() {fl.process_1d_a({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        lines = ['CROD    1       2       BAD     4']
        expect(function() {fl.process_1d_a({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        lines = ['CROD    1       2       3       BAD']
        expect(function() {fl.process_1d_a({}, lines)}).to.throw('G2 is not an integer!');
    });
});

describe('Load 1D elements (b) from lines', function () {
    it('Processing short field', function () {
        const lines = ['CELAS2  1       2       3       4       5       6']
        const expected = {
            "1D": {
                '1': {
                    "G1": 3,
                    "G2": 5
                }
            }
        }
        const actual = fl.process_1d_b({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    })
    it('Processing long field', function () {
        const lines = ['CELAS2* 1               2               3                4               ',
                       '        5               6']
        const expected = {
            "1D": {
                '1': {
                    "G1": 3,
                    "G2": 5
                }
            }
        }
        const actual = fl.process_1d_b({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    })
    it('Processing free field', function () {
        const lines = ['CELAS2,1,2,3,4,5,6']
        const expected = {
            "1D": {
                '1': {
                    "G1": 3,
                    "G2": 5
                }
            }
        }
        const actual = fl.process_1d_b({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    });
    it('Processing field validation', function () {
        // Bad EID
        var lines = ['CELAS2  BAD     2       3       4       5       6']
        expect(function() {fl.process_1d_b({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        var lines = ['CELAS2  1       2       BAD     4       5       6']
        expect(function() {fl.process_1d_b({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        var lines = ['CELAS2  1       2       3       4       BAD     6']
        expect(function() {fl.process_1d_b({}, lines)}).to.throw('G2 is not an integer!');
    });
});

describe('Load 1D elements (c) from lines', function () {
    it('Processing short field', function () {
        const lines = ['CONROD  1       2       3']
        const expected = {
            "1D": {
                '1': {
                    "G1": 2,
                    "G2": 3
                }
            }
        }
        const actual = fl.process_1d_c({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    })
    it('Processing long field', function () {
        const lines = ['CONROD* 1               2               3']
        const expected = {
            "1D": {
                '1': {
                    "G1": 2,
                    "G2": 3
                }
            }
        }
        const actual = fl.process_1d_c({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    })
    it('Processing free field', function () {
        const lines = ['CONROD,1,2,3']
        const expected = {
            "1D": {
                '1': {
                    "G1": 2,
                    "G2": 3
                }
            }
        }
        const actual = fl.process_1d_c({}, lines);
        assert.equal(actual['1D']['1']['G1'], expected['1D']['1']['G1'])
        assert.equal(actual['1D']['1']['G2'], expected['1D']['1']['G2'])
    });
    it('Processing field validation', function () {
        // Bad EID
        var lines = ['CONROD  BAD     2       3']
        expect(function() {fl.process_1d_c({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        lines = ['CONROD  1       BAD     3']
        expect(function() {fl.process_1d_c({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        lines = ['CONROD  1       2       BAD']
        expect(function() {fl.process_1d_c({}, lines)}).to.throw('G2 is not an integer!');
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
        // Bad EID
        var lines = ['CTRIA3  BAD     2       3       4       5']
        expect(function() {fl.process_2D_3e({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        lines = ['CTRIA3  1       2       BAD     4       5']
        expect(function() {fl.process_2D_3e({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        lines = ['CTRIA3  1       2       3       BAD     5']
        expect(function() {fl.process_2D_3e({}, lines)}).to.throw('G2 is not an integer!');
        // Bad G3
        lines = ['CTRIA3  1       2       3       4       BAD']
        expect(function() {fl.process_2D_3e({}, lines)}).to.throw('G3 is not an integer!');
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
        // Bad EID
        var lines = ['CQUAD4  BAD     2       3       4       5       6       ']
        expect(function() {fl.process_2D_4e({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        lines = ['CQUAD4  1       2       BAD     4       5       6       ']
        expect(function() {fl.process_2D_4e({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        lines = ['CQUAD4  1       2       3       BAD     5       6       ']
        expect(function() {fl.process_2D_4e({}, lines)}).to.throw('G2 is not an integer!');
        // Bad G1
        lines = ['CQUAD4  1       2       3       4       BAD     6       ']
        expect(function() {fl.process_2D_4e({}, lines)}).to.throw('G3 is not an integer!');
        // Bad G1
        lines = ['CQUAD4  1       2       3       4       5       BAD     ']
        expect(function() {fl.process_2D_4e({}, lines)}).to.throw('G4 is not an integer!');
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
        // Bad EID
        var lines = ['CTETRA  BAD     2       3       4       5       6       ']
        expect(function() {fl.process_3D_4s({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        lines = ['CTETRA  1       2       BAD     4       5       6       ']
        expect(function() {fl.process_3D_4s({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G1
        lines = ['CTETRA  1       2       3       BAD     5       6       ']
        expect(function() {fl.process_3D_4s({}, lines)}).to.throw('G2 is not an integer!');
        // Bad G1
        lines = ['CTETRA  1       2       3       4       BAD     6       ']
        expect(function() {fl.process_3D_4s({}, lines)}).to.throw('G3 is not an integer!');
        // Bad G1
        lines = ['CTETRA  1       2       3       4       5       BAD     ']
        expect(function() {fl.process_3D_4s({}, lines)}).to.throw('G4 is not an integer!');
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
        // Bad EID
        var lines = ['CPYRAM  BAD     2       3       4       5       6       7        8       ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_a({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        lines = ['CPYRAM  1       2       BAD     4       5       6       7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_5s_a({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        lines = ['CPYRAM  1       2       3       BAD     5       6       7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_5s_a({}, lines)}).to.throw('G2 is not an integer!');
        // Bad G3
        lines = ['CPYRAM  1       2       3       4       BAD     6       7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_5s_a({}, lines)}).to.throw('G3 is not an integer!');
        // Bad G4
        lines = ['CPYRAM  1       2       3       4       5       BAD     7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_5s_a({}, lines)}).to.throw('G4 is not an integer!');
        // Bad G5
        lines = ['CPYRAM  1       2       3       4       5       6       BAD      8       ',
                 '        9       10']
        expect(function() {fl.process_3D_5s_a({}, lines)}).to.throw('G5 is not an integer!');
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
        // Bad EID
        var lines = ['CPENTA  BAD     2       3       4       5       6       7        8       ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        var lines = ['CPENTA  1       2       BAD     4       5       6       7        8       ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        var lines = ['CPENTA  1       2       3       BAD     5       6       7        8       ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('G2 is not an integer!');
        // Bad G3
        var lines = ['CPENTA  1       2       3       4       BAD     6       7        8       ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('G3 is not an integer!');
        // Bad G4
        var lines = ['CPENTA  1       2       3       4       5       BAD     7        8       ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('G4 is not an integer!');
        // Bad G5
        var lines = ['CPENTA  1       2       3       4       5       6       BAD      8       ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('G5 is not an integer!');
        // Bad G6
        var lines = ['CPENTA  1       2       3       4       5       6       7        BAD     ',
                     '        9       10']
        expect(function() {fl.process_3D_5s_b({}, lines)}).to.throw('G6 is not an integer!');
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
        // Bad EID
        var lines = ['CHEXA   BAD     2       3       4       5       6       7        8       ',
                     '        9       10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('EID is not an integer!');
        // Bad G1
        lines = ['CHEXA   1       2       BAD     4       5       6       7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G1 is not an integer!');
        // Bad G2
        lines = ['CHEXA   1       2       3       BAD     5       6       7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G2 is not an integer!');
        // Bad G3
        lines = ['CHEXA   1       2       3       4       BAD     6       7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G3 is not an integer!');
        // Bad G4
        lines = ['CHEXA   1       2       3       4       5       BAD     7        8       ',
                 '        9       10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G4 is not an integer!');
        // Bad G5
        lines = ['CHEXA   1       2       3       4       5       6       BAD      8       ',
                 '        9       10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G5 is not an integer!');
        // Bad G6
        lines = ['CHEXA   1       2       3       4       5       6       7        BAD     ',
                 '        9       10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G6 is not an integer!');
        // Bad G7
        lines = ['CHEXA   1       2       3       4       5       6       7        8       ',
                 '        BAD     10']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G7 is not an integer!');
        // Bad G8
        lines = ['CHEXA   1       2       3       4       5       6       7        8       ',
                 '        9       BAD']
        expect(function() {fl.process_3D_6s({}, lines)}).to.throw('G8 is not an integer!');
    });
});

describe('Load CORD1 from lines', function () {
    it('Processing short field', function () {
        const lines = ['CORD1R  1       2       3       4       5       6       7       8']
        const expected = {
            "COORDS": {
                "1":
                {
                    "NAME": "CORD1R",
                    "G1": 2,
                    "G2": 3,
                    "G3": 4
                },
                "5":
                {
                    "NAME": "CORD1R",
                    "G1": 6,
                    "G2": 7,
                    "G3": 8
                }
            }
        }
        const actual = fl.process_cord1({}, lines);
        assert.equal(actual['COORDS'][1]['NAME'], expected['COORDS'][1]['NAME'])
        assert.equal(actual['COORDS'][1]['G1'],   expected['COORDS'][1]['G1'])
        assert.equal(actual['COORDS'][1]['G2'],   expected['COORDS'][1]['G2'])
        assert.equal(actual['COORDS'][1]['G3'],   expected['COORDS'][1]['G3'])
        assert.equal(actual['COORDS'][5]['NAME'], expected['COORDS'][5]['NAME'])
        assert.equal(actual['COORDS'][5]['G1'],   expected['COORDS'][5]['G1'])
        assert.equal(actual['COORDS'][5]['G2'],   expected['COORDS'][5]['G2'])
        assert.equal(actual['COORDS'][5]['G3'],   expected['COORDS'][5]['G3'])
    });
    it('Processing long field', function () {
        var lines = [
            'CORD1R* 1               2               3               4',
            '*       5               6               7               8'
        ]
        const expected = {
            "COORDS": {
                "1":
                {
                    "NAME": "CORD1R",
                    "G1": 2,
                    "G2": 3,
                    "G3": 4
                },
                "5":
                {
                    "NAME": "CORD1R",
                    "G1": 6,
                    "G2": 7,
                    "G3": 8
                }
            }
        }
        const actual = fl.process_cord1({}, lines);
        assert.equal(actual['COORDS'][1]['NAME'], expected['COORDS'][1]['NAME'])
        assert.equal(actual['COORDS'][1]['G1'],   expected['COORDS'][1]['G1'])
        assert.equal(actual['COORDS'][1]['G2'],   expected['COORDS'][1]['G2'])
        assert.equal(actual['COORDS'][1]['G3'],   expected['COORDS'][1]['G3'])
        assert.equal(actual['COORDS'][5]['NAME'], expected['COORDS'][5]['NAME'])
        assert.equal(actual['COORDS'][5]['G1'],   expected['COORDS'][5]['G1'])
        assert.equal(actual['COORDS'][5]['G2'],   expected['COORDS'][5]['G2'])
        assert.equal(actual['COORDS'][5]['G3'],   expected['COORDS'][5]['G3'])
    });
    it('Processing free field', function () {
        const lines = ['CORD1R,1,2,3,4,5,6,7,8']
        const expected = {
            "COORDS": {
                "1":
                {
                    "NAME": "CORD1R",
                    "G1": 2,
                    "G2": 3,
                    "G3": 4
                },
                "5":
                {
                    "NAME": "CORD1R",
                    "G1": 6,
                    "G2": 7,
                    "G3": 8
                }
            }
        }
        const actual = fl.process_cord1({}, lines);
        assert.equal(actual['COORDS'][1]['NAME'], expected['COORDS'][1]['NAME'])
        assert.equal(actual['COORDS'][1]['G1'],   expected['COORDS'][1]['G1'])
        assert.equal(actual['COORDS'][1]['G2'],   expected['COORDS'][1]['G2'])
        assert.equal(actual['COORDS'][1]['G3'],   expected['COORDS'][1]['G3'])
        assert.equal(actual['COORDS'][5]['NAME'], expected['COORDS'][5]['NAME'])
        assert.equal(actual['COORDS'][5]['G1'],   expected['COORDS'][5]['G1'])
        assert.equal(actual['COORDS'][5]['G2'],   expected['COORDS'][5]['G2'])
        assert.equal(actual['COORDS'][5]['G3'],   expected['COORDS'][5]['G3'])
    });
    it('Processing field validation', function () {
        // Bad CIDA
        var lines = ['CORD1R  BAD     2       3       4       5       6       7       8']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('CIDA is not an integer!');
        // Bad G1A
        lines = ['CORD1R  1       BAD     3       4       5       6       7       8']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('G1A is not an integer!');
        // Bad G2A
        lines = ['CORD1R  1       2       BAD     4       5       6       7       8']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('G2A is not an integer!');
        // Bad G1A
        lines = ['CORD1R  1       2       3       BAD     5       6       7       8']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('G3A is not an integer!');
        // Bad CIDB
        lines = ['CORD1R  1       2       3       4       BAD     6       7       8']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('CIDB is not an integer!');
        // Bad G1B
        lines = ['CORD1R  1       2       3       4       5       BAD     7       8']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('G1B is not an integer!');
        // Bad G2B
        lines = ['CORD1R  1       2       3       4       5       6       BAD     8']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('G2B is not an integer!');
        // Bad G3B
        lines = ['CORD1R  1       2       3       4       5       6       7       BAD']
        expect(function() {fl.process_cord1({}, lines)}).to.throw('G3B is not an integer!');
    });
});

describe('Load CORD2 from lines', function () {
    it('Processing short field', function () {
        const lines = ['CORD2R  1               3       4       5       6       7       8',
                       '        9       10      11'] 
        const expected = {
            "COORDS": {
                "1":
                {
                    "NAME": "CORD2R",
                    "RID": 0,
                    "A1": 3,
                    "A2": 4,
                    "A3": 5,
                    "B1": 6,
                    "B2": 7,
                    "B3": 8,
                    "C1": 9,
                    "C2": 10,
                    "C3": 11,
                }
            }
        }
        const actual = fl.process_cord2({}, lines);
        assert.equal(actual['COORDS'][1]['NAME'], expected['COORDS'][1]['NAME'])
        assert.equal(actual['COORDS'][1]['RID'],  expected['COORDS'][1]['RID'])
        assert.equal(actual['COORDS'][1]['A1'],   expected['COORDS'][1]['A1'])
        assert.equal(actual['COORDS'][1]['A2'],   expected['COORDS'][1]['A2'])
        assert.equal(actual['COORDS'][1]['A3'],   expected['COORDS'][1]['A3'])
        assert.equal(actual['COORDS'][1]['B1'],   expected['COORDS'][1]['B1'])
        assert.equal(actual['COORDS'][1]['B2'],   expected['COORDS'][1]['B2'])
        assert.equal(actual['COORDS'][1]['B3'],   expected['COORDS'][1]['B3'])
        assert.equal(actual['COORDS'][1]['C1'],   expected['COORDS'][1]['C1'])
        assert.equal(actual['COORDS'][1]['C2'],   expected['COORDS'][1]['C2'])
        assert.equal(actual['COORDS'][1]['C3'],   expected['COORDS'][1]['C3'])
    });
    it('Processing long field', function () {
        var lines = [
            'CORD2R* 1               2               3               4',
            '*       5               6               7               8',
            '*       9               10              11'
        ]
        const expected = {
            "COORDS": {
                "1":
                {
                    "NAME": "CORD2R",
                    "RID": 2,
                    "A1": 3,
                    "A2": 4,
                    "A3": 5,
                    "B1": 6,
                    "B2": 7,
                    "B3": 8,
                    "C1": 9,
                    "C2": 10,
                    "C3": 11,
                }
            }
        }
        const actual = fl.process_cord2({}, lines);
        assert.equal(actual['COORDS'][1]['NAME'], expected['COORDS'][1]['NAME'])
        assert.equal(actual['COORDS'][1]['RID'],  expected['COORDS'][1]['RID'])
        assert.equal(actual['COORDS'][1]['A1'],   expected['COORDS'][1]['A1'])
        assert.equal(actual['COORDS'][1]['A2'],   expected['COORDS'][1]['A2'])
        assert.equal(actual['COORDS'][1]['A3'],   expected['COORDS'][1]['A3'])
        assert.equal(actual['COORDS'][1]['B1'],   expected['COORDS'][1]['B1'])
        assert.equal(actual['COORDS'][1]['B2'],   expected['COORDS'][1]['B2'])
        assert.equal(actual['COORDS'][1]['B3'],   expected['COORDS'][1]['B3'])
        assert.equal(actual['COORDS'][1]['C1'],   expected['COORDS'][1]['C1'])
        assert.equal(actual['COORDS'][1]['C2'],   expected['COORDS'][1]['C2'])
        assert.equal(actual['COORDS'][1]['C3'],   expected['COORDS'][1]['C3'])
    });
    it('Processing free field', function () {
        const lines = ['CORD2R,1,2,3,4,5,6,7,8',
                       ',9,10,11']
        const expected = {
            "COORDS": {
                "1":
                {
                    "NAME": "CORD2R",
                    "RID": 2,
                    "A1": 3,
                    "A2": 4,
                    "A3": 5,
                    "B1": 6,
                    "B2": 7,
                    "B3": 8,
                    "C1": 9,
                    "C2": 10,
                    "C3": 11,
                }
            }
        }
        const actual = fl.process_cord2({}, lines);
        assert.equal(actual['COORDS'][1]['NAME'], expected['COORDS'][1]['NAME'])
        assert.equal(actual['COORDS'][1]['RID'],  expected['COORDS'][1]['RID'])
        assert.equal(actual['COORDS'][1]['A1'],   expected['COORDS'][1]['A1'])
        assert.equal(actual['COORDS'][1]['A2'],   expected['COORDS'][1]['A2'])
        assert.equal(actual['COORDS'][1]['A3'],   expected['COORDS'][1]['A3'])
        assert.equal(actual['COORDS'][1]['B1'],   expected['COORDS'][1]['B1'])
        assert.equal(actual['COORDS'][1]['B2'],   expected['COORDS'][1]['B2'])
        assert.equal(actual['COORDS'][1]['B3'],   expected['COORDS'][1]['B3'])
        assert.equal(actual['COORDS'][1]['C1'],   expected['COORDS'][1]['C1'])
        assert.equal(actual['COORDS'][1]['C2'],   expected['COORDS'][1]['C2'])
        assert.equal(actual['COORDS'][1]['C3'],   expected['COORDS'][1]['C3'])
    });
    it('Processing field validation', function () {
        // Bad CID
        var lines = ['CORD2R  BAD     2       3       4       5       6       7       8',
                     '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('CID is not an integer!');
        // Bad RID
        lines = ['CORD2R  1       BAD     3       4       5       6       7       8',
                 '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('RID is not an integer!');
        // Bad A1
        lines = ['CORD2R  1       2       BAD     4       5       6       7       8',
                 '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('A1 is not an integer!');
        // Bad A2
        lines = ['CORD2R  1       2       3       BAD     5       6       7       8',
                 '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('A2 is not an integer!');
        // Bad A3
        lines = ['CORD2R  1       2       3       4       BAD     6       7       8',
                 '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('A3 is not an integer!');
        // Bad B1
        lines = ['CORD2R  1       2       3       4       5       BAD     7       8',
                 '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('B1 is not an integer!');
        // Bad B2
        lines = ['CORD2R  1       2       3       4       5       6       BAD     8',
                 '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('B2 is not an integer!');
        // Bad B3
        lines = ['CORD2R  1       2       3       4       5       6       7       BAD',
                 '        9       10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('B3 is not an integer!');
        // Bad C1
        lines = ['CORD2R  1       2       3       4       5       6       7       8',
                 '        BAD     10      11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('C1 is not an integer!');
        // Bad C2
        lines = ['CORD2R  1       2       3       4       5       6       7       8',
                 '        9       BAD     11']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('C2 is not an integer!');
        // Bad C3
        lines = ['CORD2R  1       2       3       4       5       6       7       8',
                 '        9       10      BAD']
        expect(function() {fl.process_cord2({}, lines)}).to.throw('C3 is not an integer!');
        
    });
});

describe('To global coordinates', function () {
    it('Rectangular to global', function () {
        
    });
});

