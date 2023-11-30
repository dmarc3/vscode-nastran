import { array } from 'vectorious';

export function loadModel(modelContent) {
    var model = {};
    const elem_1D_a = ["CROD", "CBAR", "CBEAM", "CBEND", "CBUSH", "CGAP", "CMARKB2", "CSPR", "CTUBE", "CVISC"]
    const elem_1D_b = ["CDAMP1", "CDAMP2", "CDAMP5", "CELAS1", "CELAS2", "CMASS1", "CMASS2"]
    const elem_1D_c = ["CONROD"]
    const elem_2D_3e = ["CTRIA", "CACINF3"]
    const elem_2D_4e = ["CQUAD", "CSHEAR", "CACINF4", "CIFQUAD"]
    const elem_3D_4s = ["CTETRA"]
    const elem_3D_5s_a = ["CPYRAM"]
    const elem_3D_5s_b = ["CPENTA", "CIFPENT"]
    const elem_3D_6s = ["CHEXA", "CHACAB", "CHACBR", "CIFHEX"]
    const cord1 = ["CORD1R", "CORD1C", "CORD1S"]
    const cord2 = ["CORD2R", "CORD2C", "CORD2S"]
    for (var include in modelContent) {
        var lines = modelContent[include]
        model[include] = {}
        for (var [ind, currentLine] of lines.entries()) {
            try {
                currentLine = currentLine.toUpperCase();
                // Process GRIDs
                if (currentLine.startsWith("GRID")) {
                    model = process_grid(model, lines.slice(ind, ind+5))
                // Process 1D elements (a)
                } else if (elem_1D_a.some(elem_1D_a => currentLine.startsWith(elem_1D_a))) {
                    model[include] = process_1d_a(model[include], lines.slice(ind, ind+5))
                // Process 1D elements (b)
                } else if (elem_1D_b.some(elem_1D_b => currentLine.startsWith(elem_1D_b))) {
                    model[include] = process_1d_b(model[include], lines.slice(ind, ind+5))
                // Process 1D elements (c)
                } else if (elem_1D_c.some(elem_1D_c => currentLine.startsWith(elem_1D_c))) {
                    model[include] = process_1d_c(model[include], lines.slice(ind, ind+5))
                // Process 2D elements with 4 edges
                } else if (elem_2D_4e.some(elem_2D_4e => currentLine.startsWith(elem_2D_4e))) {
                    model[include] = process_2D_4e(model[include], lines.slice(ind, ind+5))
                // Process 2D elements with 3 edges
                } else if (elem_2D_3e.some(elem_2D_3e => currentLine.startsWith(elem_2D_3e)) && !currentLine.includes('CTRIAX6')) {
                    model[include] = process_2D_3e(model[include], lines.slice(ind, ind+5))
                // Process 3D elements with 4 sides
                } else if (elem_3D_4s.some(elem_3D_4s => currentLine.startsWith(elem_3D_4s))) {
                    model[include] = process_3D_4s(model[include], lines.slice(ind, ind+5))
                // Process 3D elements with 5 sides
                } else if (elem_3D_5s_a.some(elem_3D_5s_a => currentLine.startsWith(elem_3D_5s_a))) {
                    model[include] = process_3D_5s_a(model[include], lines.slice(ind, ind+5))
                } else if (elem_3D_5s_b.some(elem_3D_5s_b => currentLine.startsWith(elem_3D_5s_b))) {
                    model[include] = process_3D_5s_b(model[include], lines.slice(ind, ind+5))
                // Process 3D elements with 6 sides
                } else if (elem_3D_6s.some(elem_3D_6s => currentLine.startsWith(elem_3D_6s))) {
                    model[include] = process_3D_6s(model[include], lines.slice(ind, ind+5))
                // Process CORD1*
                } else if (cord1.some(cord1 => currentLine.startsWith(cord1))) {
                    model = process_cord1(model, lines.slice(ind, ind+5))
                // Process CORD2*
                } else if (cord2.some(cord2 => currentLine.startsWith(cord2))) {
                    model = process_cord2(model, lines.slice(ind, ind+5))
                }
            } catch(err) {
                console.log(err)
                return currentLine
            }
        }
    }
    return model
}

export function process_grid(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var id = lines[0][1];
        var cp = lines[0][2];
        var x1 = lines[0][3];
        var x2 = lines[0][4];
        var x3 = lines[0][5];
        var cd = lines[0][6];
        var ps = lines[0][7];
        var seid = lines[0][8];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [id, cp, x1, x2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [x3, cd, ps, seid] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72)
        var [_, id, cp, x1, x2, x3, cd, ps, seid] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    id = parseInt(id)
    cp = parseInt(cp)
    x1 = str2float(x1)
    x2 = str2float(x2)
    x3 = str2float(x3)
    cd = parseInt(cd)
    ps = parseInt(ps)
    seid = parseInt(seid)
    // Validate
    if (isNaN(id)) { // TODO: Rework to test if integer
        throw new Error('ID is not an integer!');
    }
    if (isNaN(cp)) {
        cp = 0;
    }
    if (isNaN(x1)) {
        throw new Error('X1 is not a float!')
    }
    if (isNaN(x2)) {
        throw new Error('X2 is not a float!')
    }
    if (isNaN(x3)) {
        throw new Error('X3 is not a float!')
    }
    // Create GRID key if it doesn't exist
    if (!("GRID" in model)) {
        model["GRID"] = {}
    }
    // Add to object
    model['GRID'][id] = {}
    model['GRID'][id]['CP'] = cp
    model['GRID'][id]['X1'] = x1
    model['GRID'][id]['X2'] = x2
    model['GRID'][id]['X3'] = x3
    model['GRID'][id]['CD'] = cd
    model['GRID'][id]['PS'] = ps
    model['GRID'][id]['SEID'] = seid
    return model
}

export function process_1d_a(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var g2 = lines[0][4];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    // Create 1D key if it doesn't exist
    if (!("1D" in model)) {
        model["1D"] = {}
    }
    // Add to object
    model["1D"][eid] = {}
    model["1D"][eid]["PID"] = pid
    model["1D"][eid]["G1"] = g1
    model["1D"][eid]["G2"] = g2
    return model
}

export function process_1d_b(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var c1 = lines[0][4];
        var g2 = lines[0][5];
        var c2 = lines[0][6];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, c1] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g2, c2] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, c1, g2, c2] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    c1 = parseInt(c1)
    g2 = parseInt(g2)
    c2 = parseInt(c2)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        return model
    }
    // Create 1D key if it doesn't exist
    if (!("1D" in model)) {
        model["1D"] = {}
    }
    // Add to object
    model["1D"][eid] = {}
    model["1D"][eid]["PID"] = pid
    model["1D"][eid]["G1"] = g1
    model["1D"][eid]["G2"] = g2
    return model
}

export function process_1d_c(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var g1 = lines[0][2];
        var g2 = lines[0][3];
        var mid = lines[0][4];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, g1, g2, mid] = lines[0].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, g1, g2, mid] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    mid = parseInt(mid)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    // Create 1D key if it doesn't exist
    if (!("1D" in model)) {
        model["1D"] = {}
    }
    // Add to object
    model["1D"][eid] = {}
    model["1D"][eid]["G1"] = g1
    model["1D"][eid]["G2"] = g2
    return model
}

export function process_2D_3e(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var g2 = lines[0][4];
        var g3 = lines[0][5];
        var mcid = lines[0][6];
        var zoffs = lines[0][7];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, mcid, zoffs, _] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72)
        var [_, eid, pid, g1, g2, g3, mcid, zoffs, _] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    g3 = parseInt(g3)
    mcid = parseInt(mcid)
    zoffs = parseInt(zoffs)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G3 is not an integer!')
    }
    // Create 2D_3e key if it doesn't exist
    if (!("2D_3e" in model)) {
        model["2D_3e"] = {}
    }
    // Add to object
    model["2D_3e"][eid] = {}
    model["2D_3e"][eid]["G1"] = g1
    model["2D_3e"][eid]["G2"] = g2
    model["2D_3e"][eid]["G3"] = g3
    return model
}

export function process_2D_4e(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var g2 = lines[0][4];
        var g3 = lines[0][5];
        var g4 = lines[0][6];
        var mcid = lines[0][7];
        var zoffs = lines[0][8];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, g4, mcid, zoffs] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72)
        var [_, eid, pid, g1, g2, g3, g4, mcid, zoffs] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    g3 = parseInt(g3)
    g4 = parseInt(g4)
    mcid = parseInt(mcid)
    zoffs = parseInt(zoffs)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G3 is not an integer!')
    }
    if (isNaN(g4)) {
        throw new Error('G4 is not an integer!')
    }
    // Create 2D_4e key if it doesn't exist
    if (!("2D_4e" in model)) {
        model["2D_4e"] = {}
    }
    // Add to object
    model["2D_4e"][eid] = {}
    model["2D_4e"][eid]["G1"] = g1
    model["2D_4e"][eid]["G2"] = g2
    model["2D_4e"][eid]["G3"] = g3
    model["2D_4e"][eid]["G4"] = g4
    return model
}

export function process_3D_4s(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var g2 = lines[0][4];
        var g3 = lines[0][5];
        var g4 = lines[0][6];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, g4, _, _] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72)
        var [_, eid, pid, g1, g2, g3, g4, _, _] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    g3 = parseInt(g3)
    g4 = parseInt(g4)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G3 is not an integer!')
    }
    if (isNaN(g4)) {
        throw new Error('G4 is not an integer!')
    }
    // Create 3D_4s key if it doesn't exist
    if (!("3D_4s" in model)) {
        model["3D_4s"] = {}
    }
    // Add to object
    model["3D_4s"][eid] = {}
    model["3D_4s"][eid]["G1"] = g1
    model["3D_4s"][eid]["G2"] = g2
    model["3D_4s"][eid]["G3"] = g3
    model["3D_4s"][eid]["G4"] = g4
    return model
}

export function process_3D_5s_a(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var g2 = lines[0][4];
        var g3 = lines[0][5];
        var g4 = lines[0][6];
        var g5 = lines[0][7];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, g4, g5, g6] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2, g3, g4, g5, g6] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    g3 = parseInt(g3)
    g4 = parseInt(g4)
    g5 = parseInt(g5)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G3 is not an integer!')
    }
    if (isNaN(g4)) {
        throw new Error('G4 is not an integer!')
    }
    if (isNaN(g5)) {
        throw new Error('G5 is not an integer!')
    }
    // Create 3D_5s_a key if it doesn't exist
    if (!("3D_5s_a" in model)) {
        model["3D_5s_a"] = {}
    }
    // Add to object
    model["3D_5s_a"][eid] = {}
    model["3D_5s_a"][eid]["G1"] = g1
    model["3D_5s_a"][eid]["G2"] = g2
    model["3D_5s_a"][eid]["G3"] = g3
    model["3D_5s_a"][eid]["G4"] = g4
    model["3D_5s_a"][eid]["G5"] = g5
    return model
}

export function process_3D_5s_b(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var g2 = lines[0][4];
        var g3 = lines[0][5];
        var g4 = lines[0][6];
        var g5 = lines[0][7];
        var g6 = lines[0][8];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, g4, g5, g6] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2, g3, g4, g5, g6] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    g3 = parseInt(g3)
    g4 = parseInt(g4)
    g5 = parseInt(g5)
    g6 = parseInt(g6)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G3 is not an integer!')
    }
    if (isNaN(g4)) {
        throw new Error('G4 is not an integer!')
    }
    if (isNaN(g5)) {
        throw new Error('G5 is not an integer!')
    }
    if (isNaN(g6)) {
        throw new Error('G6 is not an integer!')
    }
    // Create 3D_5s_b key if it doesn't exist
    if (!("3D_5s_b" in model)) {
        model["3D_5s_b"] = {}
    }
    // Add to object
    model["3D_5s_b"][eid] = {}
    model["3D_5s_b"][eid]["G1"] = g1
    model["3D_5s_b"][eid]["G2"] = g2
    model["3D_5s_b"][eid]["G3"] = g3
    model["3D_5s_b"][eid]["G4"] = g4
    model["3D_5s_b"][eid]["G5"] = g5
    model["3D_5s_b"][eid]["G6"] = g6
    return model
}

export function process_3D_6s(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        lines[1] = lines[1].split(',')
        // Unpack array
        var eid = lines[0][1];
        var pid = lines[0][2];
        var g1 = lines[0][3];
        var g2 = lines[0][4];
        var g3 = lines[0][5];
        var g4 = lines[0][6];
        var g5 = lines[0][7];
        var g6 = lines[0][8];
        var g7 = lines[1][1];
        var g8 = lines[1][2];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, g4, g5, g6] = lines[1].match(/.{1,16}/g)
        lines[2] = lines[2].padEnd(72).slice(8)
        var [g7, g8, g9, g10] = lines[2].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2, g3, g4, g5, g6] = lines[0].match(/.{1,8}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g7, g8, g9, g10, g11, g12, g13, g14] = lines[1].match(/.{1,8}/g)
    }
    // Convert types
    eid = parseInt(eid)
    pid = parseInt(pid)
    g1 = parseInt(g1)
    g2 = parseInt(g2)
    g3 = parseInt(g3)
    g4 = parseInt(g4)
    g5 = parseInt(g5)
    g6 = parseInt(g6)
    g7 = parseInt(g7)
    g8 = parseInt(g8)
    // Validate types
    if (isNaN(eid)) {
        throw new Error('EID is not an integer!')
    }
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G3 is not an integer!')
    }
    if (isNaN(g4)) {
        throw new Error('G4 is not an integer!')
    }
    if (isNaN(g5)) {
        throw new Error('G5 is not an integer!')
    }
    if (isNaN(g6)) {
        throw new Error('G6 is not an integer!')
    }
    if (isNaN(g7)) {
        throw new Error('G7 is not an integer!')
    }
    if (isNaN(g8)) {
        throw new Error('G8 is not an integer!')
    }
    // Create 3D_6s key if it doesn't exist
    if (!("3D_6s" in model)) {
        model["3D_6s"] = {}
    }
    // Add to object
    model["3D_6s"][eid] = {}
    model["3D_6s"][eid]["G1"] = g1
    model["3D_6s"][eid]["G2"] = g2
    model["3D_6s"][eid]["G3"] = g3
    model["3D_6s"][eid]["G4"] = g4
    model["3D_6s"][eid]["G5"] = g5
    model["3D_6s"][eid]["G6"] = g6
    model["3D_6s"][eid]["G7"] = g7
    model["3D_6s"][eid]["G8"] = g8
    return model
}

export function process_cord1(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        // Unpack array
        var name = lines[0][0];
        var cida = lines[0][1];
        var g1a = lines[0][2];
        var g2a = lines[0][3];
        var g3a = lines[0][4];
        var cidb = lines[0][5];
        var g1b = lines[0][6];
        var g2b = lines[0][7];
        var g3b = lines[0][8];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        var name = lines[0].substring(0, 8)
        lines[0] = lines[0].padEnd(72).slice(8)
        var [cida, g1a, g2a, g3a] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [cidb, g1b, g2b, g3b] = lines[1].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72)
        var [name, cida, g1a, g2a, g3a, cidb, g1b, g2b, g3b] = lines[0].match(/.{1,8}/g)
    }
    // Convert types
    name = name.replace('*', '').replace(/\s/g, "");
    cida = parseInt(cida)
    g1a = parseInt(g1a)
    g2a = parseInt(g2a)
    g3a = parseInt(g3a)
    cidb = parseInt(cidb)
    g1b = parseInt(g1b)
    g2b = parseInt(g2b)
    g3b = parseInt(g3b)
    // Validate types
    if (isNaN(cida)) {
        throw new Error('CIDA is not an integer!');
    }
    if (isNaN(g1a)) {
        throw new Error('G1A is not an integer!')
    }
    if (isNaN(g2a)) {
        throw new Error('G2A is not an integer!')
    }
    if (isNaN(g3a)) {
        throw new Error('G3A is not an integer!')
    }
    if (!(isNaN(cidb) && isNaN(g1b) && isNaN(g2b) && isNaN(g3b))) {
        if (isNaN(cidb)) {
            throw new Error('CIDB is not an integer!');
        }
        if (isNaN(g1b)) {
            throw new Error('G1B is not an integer!')
        }
        if (isNaN(g2b)) {
            throw new Error('G2B is not an integer!')
        }
        if (isNaN(g3b)) {
            throw new Error('G3B is not an integer!')
        }
    }
    // Create COORDS key if it doesn't exist
    if (!("COORDS" in model)) {
        model["COORDS"] = {}
    }
    // Add to object
    model["COORDS"][cida] = {}
    model["COORDS"][cida]["NAME"] = name
    model["COORDS"][cida]["G1"] = g1a
    model["COORDS"][cida]["G2"] = g2a
    model["COORDS"][cida]["G3"] = g3a
    if (!(isNaN(cidb) && isNaN(g1b) && isNaN(g2b) && isNaN(g3b))) {
        model["COORDS"][cidb] = {}
        model["COORDS"][cidb]["NAME"] = name
        model["COORDS"][cidb]["G1"] = g1b
        model["COORDS"][cidb]["G2"] = g2b
        model["COORDS"][cidb]["G3"] = g3b
    }
    return model
}

export function process_cord2(model, lines) {
    // Process free field
    if (~lines[0].indexOf(",")) {
        // Split line by comma
        lines[0] = lines[0].split(',')
        lines[1] = lines[1].split(',')
        // Unpack array
        var name = lines[0][0];
        var cid = lines[0][1];
        var rid = lines[0][2];
        var a1 = lines[0][3];
        var a2 = lines[0][4];
        var a3 = lines[0][5];
        var b1 = lines[0][6];
        var b2 = lines[0][7];
        var b3 = lines[0][8];
        var c1 = lines[1][1];
        var c2 = lines[1][2];
        var c3 = lines[1][3];
    // Process long field
    } else if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        var name = lines[0].substring(0, 8)
        lines[0] = lines[0].padEnd(72).slice(8)
        var [cid, rid, a1, a2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [a3, b1, b2, b3] = lines[1].match(/.{1,16}/g)
        lines[2] = lines[2].padEnd(72).slice(8)
        var [c1, c2, c3, _] = lines[2].match(/.{1,16}/g)
    // Process short field
    } else {
        // Extend line to 72 fields if shorter and split by 8 characters
        lines[0] = lines[0].padEnd(72)
        var [name, cid, rid, a1, a2, a3, b1, b2, b3] = lines[0].match(/.{1,8}/g)
        lines[1] = lines[1].padEnd(72)
        var [_, c1, c2, c3, _, _, _, _, _] = lines[1].match(/.{1,8}/g)
    }
    // Convert types
    name = name.replace('*', '').replace(/\s/g, "");
    cid = parseInt(cid)
    if (!(rid.replace(/\s+/g, '') === '')) {
        rid = parseInt(rid)
    } else {
        rid = 0;
    }
    a1 = str2float(a1)
    a2 = str2float(a2)
    a3 = str2float(a3)
    b1 = str2float(b1)
    b2 = str2float(b2)
    b3 = str2float(b3)
    c1 = str2float(c1)
    c2 = str2float(c2)
    c3 = str2float(c3)
    // Validate types
    if (isNaN(cid)) {
        throw new Error('CID is not an integer!');
    }
    if (isNaN(rid)) {
        throw new Error('RID is not an integer!');
    }
    if (isNaN(a1)) {
        throw new Error('A1 is not an integer!')
    }
    if (isNaN(a2)) {
        throw new Error('A2 is not an integer!')
    }
    if (isNaN(a3)) {
        throw new Error('A3 is not an integer!')
    }
    if (isNaN(b1)) {
        throw new Error('B1 is not an integer!');
    }
    if (isNaN(b2)) {
        throw new Error('B2 is not an integer!')
    }
    if (isNaN(b3)) {
        throw new Error('B3 is not an integer!')
    }
    if (isNaN(c1)) {
        throw new Error('C1 is not an integer!')
    }
    if (isNaN(c2)) {
        throw new Error('C2 is not an integer!')
    }
    if (isNaN(c3)) {
        throw new Error('C3 is not an integer!')
    }
    // Create COORDS key if it doesn't exist
    if (!("COORDS" in model)) {
        model["COORDS"] = {}
    }
    // Add to object
    model["COORDS"][cid] = {}
    model["COORDS"][cid]["NAME"] = name
    model["COORDS"][cid]["RID"] = rid
    model["COORDS"][cid]["A1"] = a1
    model["COORDS"][cid]["A2"] = a2
    model["COORDS"][cid]["A3"] = a3
    model["COORDS"][cid]["B1"] = b1
    model["COORDS"][cid]["B2"] = b2
    model["COORDS"][cid]["B3"] = b3
    model["COORDS"][cid]["C1"] = c1
    model["COORDS"][cid]["C2"] = c2
    model["COORDS"][cid]["C3"] = c3
    return model
}

export function toGlobal(grid, model) {
    // If GRID is already resolved in global coordinates, return
    if (grid['CP'] === 0) {
        return grid
    }
    // Get coordinate system
    const coord = model['COORDS'][grid['CP']];
    // Convert local cylindrical to rectangular
    if (coord['NAME'].endsWith('C')) {
        const ang = grid.X2 * Math.PI/180.;
        const x = grid.X1 * Math.cos(ang);
        const y = grid.X1 * Math.sin(ang);
        const z = grid.X3;
        grid.X1 = x;
        grid.X2 = y;
        grid.X3 = z;
    }
    // Convert local spherical to rectangular
    if (coord['NAME'].endsWith('S')) {
        const x = grid.X1 * Math.sin(grid.X2 * Math.PI/180.) * Math.cos(grid.X3 * Math.PI/180.);
        const y = grid.X1 * Math.sin(grid.X2 * Math.PI/180.) * Math.cos(grid.X3 * Math.PI/180.);
        const z = grid.X1 * Math.cos(grid.X2 * Math.PI/180.);
        grid.X1 = x;
        grid.X2 = y;
        grid.X3 = z;
    }
    // Convert grid to vectorious array
    var g = array([grid.X1, grid.X2, grid.X3]);
    // Transform
    if (coord['NAME'].startsWith('CORD1')) {
        var a = array([model['GRID'][coord.G1]['X1'], model['GRID'][coord.G1]['X2'], model['GRID'][coord.G1]['X3']]);
        var b = array([model['GRID'][coord.G2]['X1'], model['GRID'][coord.G2]['X2'], model['GRID'][coord.G2]['X3']]);
        var c = array([model['GRID'][coord.G3]['X1'], model['GRID'][coord.G3]['X2'], model['GRID'][coord.G3]['X3']]);
    } else if (coord['NAME'].startsWith('CORD2')) {
        // Create vectorious arrays of coordinate system points
        var a = array([coord.A1, coord.A2, coord.A3]);
        var b = array([coord.B1, coord.B2, coord.B3]);
        var c = array([coord.C1, coord.C2, coord.C3]);
    } else {
        throw Error(`Unkown coordinate system type: ${coord['NAME']}!`)
    }
    // Calculate ijk
    const k = (b.subtract(a)).normalize();
    const j = (k.copy().cross(c.subtract(a))).normalize();
    const i = (j.copy().cross(k)).normalize();
    // Calculate transformation matrix and invert
    const Tinv = i.copy().combine(j).combine(k).reshape(3, 3).inv();
    // Apply transformation matrix and calculate position in reference frame
    // TODO: Investigate why cannot do Tinv.multiply(g)
    const ng = array([
        Tinv.data[0]*g.data[0] + Tinv.data[1]*g.data[1] + Tinv.data[2]*g.data[2],
        Tinv.data[3]*g.data[0] + Tinv.data[4]*g.data[1] + Tinv.data[5]*g.data[2],
        Tinv.data[6]*g.data[0] + Tinv.data[7]*g.data[1] + Tinv.data[8]*g.data[2]
    ]).add(a);
    // Update grid
    grid.X1 = ng.data[0];
    grid.X2 = ng.data[1];
    grid.X3 = ng.data[2];
    grid.CP = coord.RID;
    // Recursively run function till in global
    if (grid['CP'] !== 0) {
        toGlobal(grid, model);
    }
    return grid
}

export function str2float(str) {
    // Remove whitespace
    str = str.replace(/\s+/g, '');
    // 0.0 if empty
    if (!str) {
        return 0.0
    }
    // Replace leading +
    if (str[0] === "+") {
        str = str.replace(/\+/g, '');
    }
    // Replace D with E
    if (str.toUpperCase().includes('D')) {
        str = str.replace(/d/g, 'E');
        str = str.replace(/D/g, 'E');
    }
    // Replace + with E
    if (str.includes("+") && !str.toUpperCase().includes('E')) {
        str = str.replace(/\+/g, 'E');
    }
    // Replace - with E-
    const indexes = [...str.matchAll(new RegExp('-', 'gi'))].map(a => a.index);
    if (!str.toUpperCase().includes('E')) {
        if (indexes.length === 1 && str[0] !== '-') {
            str = str.replace(/\-/g, 'E-');
        } else if (indexes.length === 2) {
            str = [str.substring(0, indexes[1]), 'E', str.substring(indexes[1], str.length)].join('');
        }
    }
    // Convert to float
    return parseFloat(str)
}
