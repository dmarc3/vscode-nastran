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
    for (var include in modelContent) {
        var lines = modelContent[include]
        model[include] = {}
        for (var [ind, currentLine] of lines.entries()) {
            try {
                // Process GRIDs
                if (currentLine.toUpperCase().startsWith("GRID")) {
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
                } else if (elem_2D_3e.some(elem_2D_3e => currentLine.startsWith(elem_2D_3e)) && !currentLine.toUpperCase().includes('CTRIAX6')) {
                    model[include] = process_2D_3e(model[include], lines.slice(ind, ind+5))
                // Process 3D elements with 4 sides
                } else if (elem_3D_4s.some(elem_3D_4s => currentLine.startsWith(elem_3D_4s))) {
                    model[include] = process_3D_4s(model[include], lines.slice(ind, ind+5))
                // Process 3D elements with 5 sides
                } else if (elem_3D_5s_a.some(elem_3D_5s_a => currentLine.startsWith(elem_3D_5s_a))) {
                    model[include] = process_3D_5s(model[include], lines.slice(ind, ind+5))
                } else if (elem_3D_5s_b.some(elem_3D_5s_b => currentLine.startsWith(elem_3D_5s_b))) {
                    model[include] = process_3D_5s_b(model[include], lines.slice(ind, ind+5))
                // Process 3D elements with 6 sides
                } else if (elem_3D_6s.some(elem_3D_6s => currentLine.startsWith(elem_3D_6s))) {
                    model[include] = process_3D_6s(model[include], lines.slice(ind, ind+5))
                }
                // Process 3D elements with 7 sides
            } catch(err) {
                console.log(err)
                return currentLine
            }
        }
    }
    return model
}

export function process_grid(model, lines) {
    // Create GRID key if it doesn't exist
    if (!("GRID" in model)) {
        model["GRID"] = []
    }
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
    // Add to object
    let grid = {}
    grid["ID"] = id
    grid["CP"] = cp
    grid["X1"] = x1
    grid["X2"] = x2
    grid["X3"] = x3
    grid["CD"] = cd
    grid["PS"] = ps
    grid["SEID"] = seid
    if (isNaN(id)) { // TODO: Rework to test if integer
        throw new Error('ID is not an integer!');
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
    model["GRID"].push(grid)
    return model
}

export function process_1d_a(model, lines) {
    // Create 1D key if it doesn't exist
    if (!("1D" in model)) {
        model["1D"] = {}
    }
    // Process long field
    if (~lines[0].indexOf("*")) {
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
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    // Add to object
    model["1D"][eid] = {}
    model["1D"][eid]["PID"] = pid
    model["1D"][eid]["G1"] = g1
    model["1D"][eid]["G2"] = g2
    return model
}

export function process_1d_b(model, lines) {
    // Create 1D key if it doesn't exist
    if (!("1D" in model)) {
        model["1D"] = {}
    }
    // Process long field
    if (~lines[0].indexOf("*")) {
        // Extend both lines to 72 fields if shorter and split by 16 characters
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
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
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    // Add to object
    model["1D"][eid] = {}
    model["1D"][eid]["PID"] = pid
    model["1D"][eid]["G1"] = g1
    model["1D"][eid]["G2"] = g2
    return model
}

export function process_1d_c(model, lines) {
    // Create 1D key if it doesn't exist
    if (!("1D" in model)) {
        model["1D"] = {}
    }
    // Process long field
    if (~lines[0].indexOf("*")) {
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
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    // Add to object
    model["1D"][eid] = {}
    model["1D"][eid]["G1"] = g1
    model["1D"][eid]["G2"] = g2
    return model
}

export function process_2D_3e(model, lines) {
    // Create 2D_3e key if it doesn't exist
    if (!("2D_3e" in model)) {
        model["2D_3e"] = {}
    }
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
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G3 is not an integer!')
    }
    // Add to object
    model["2D_3e"][eid] = {}
    model["2D_3e"][eid]["G1"] = g1
    model["2D_3e"][eid]["G2"] = g2
    model["2D_3e"][eid]["G3"] = g3
    return model
}

export function process_2D_4e(model, lines) {
    // Create 2D_4e key if it doesn't exist
    if (!("2D_4e" in model)) {
        model["2D_4e"] = {}
    }
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
    // Add to object
    model["2D_4e"][eid] = {}
    model["2D_4e"][eid]["G1"] = g1
    model["2D_4e"][eid]["G2"] = g2
    model["2D_4e"][eid]["G3"] = g3
    model["2D_4e"][eid]["G4"] = g4
    return model
}

export function process_3D_4s(model, lines) {
    // Create 3D_4s key if it doesn't exist
    if (!("3D_4s" in model)) {
        model["3D_4s"] = {}
    }
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
    // Add to object
    model["3D_4s"][eid] = {}
    model["3D_4s"][eid]["G1"] = g1
    model["3D_4s"][eid]["G2"] = g2
    model["3D_4s"][eid]["G3"] = g3
    model["3D_4s"][eid]["G4"] = g4
    return model
}

export function process_3D_5s_a(model, lines) {
    // Create 3D_5s_a key if it doesn't exist
    if (!("3D_5s_a" in model)) {
        model["3D_5s_a"] = {}
    }
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
    // Create 3D_5s_b key if it doesn't exist
    if (!("3D_5s_b" in model)) {
        model["3D_5s_b"] = {}
    }
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
    // Create 3D_6s key if it doesn't exist
    if (!("3D_6s" in model)) {
        model["3D_6s"] = {}
    }
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
    if (isNaN(g1)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g2)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g3)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g4)) {
        throw new Error('G2 is not an integer!')
    }
    if (isNaN(g5)) {
        throw new Error('G1 is not an integer!')
    }
    if (isNaN(g6)) {
        throw new Error('G2 is not an integer!')
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

export function str2float(str) {
    // Remove whitespace
    str = str.replace(/\s+/g, '');
    // 0.0 if empty
    if (!str) {
        return 0.0
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