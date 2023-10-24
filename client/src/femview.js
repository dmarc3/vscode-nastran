import * as THREE from 'three';
import { TrackballControls } from 'TrackballControls';


let camera, controls, scene, renderer, group;

var model = loadModel(modelContent)

init(model);
animate();

function init(model) {
   	// World
	scene = new THREE.Scene();
    group = new THREE.Group()
	
	// Build FEM
    for (var include in model) {
        let g = new THREE.Group();
        var material = new THREE.MeshPhysicalMaterial( { color: 0x00ffcc, flatShading: true } );
        material.side = THREE.DoubleSide;

        if (Object.keys(model[include]).length !== 0) {
            //  Add QUAD
            for (var [eid, quad] of Object.entries(model[include].CQUAD)) {
                var points = new Float32Array( [
                    model[include].GRID[quad.G1].X1, model[include].GRID[quad.G1].X2, model[include].GRID[quad.G1].X3,
                    model[include].GRID[quad.G2].X1, model[include].GRID[quad.G2].X2, model[include].GRID[quad.G2].X3,
                    model[include].GRID[quad.G3].X1, model[include].GRID[quad.G3].X2, model[include].GRID[quad.G3].X3,
                    model[include].GRID[quad.G4].X1, model[include].GRID[quad.G4].X2, model[include].GRID[quad.G4].X3
                ]);
                var indices = [
                    0, 1, 2,
                    2, 3, 0,
                ];
                var geometry = new THREE.BufferGeometry();
                geometry.setIndex( indices );
                geometry.setAttribute( 'position', new THREE.BufferAttribute( points, 3 ) );
                var mesh = new THREE.Mesh( geometry, material );
                g.add( mesh );
                                
                // Add edges
                var line_points = [];
                line_points.push( new THREE.Vector3( model[include].GRID[quad.G1].X1, model[include].GRID[quad.G1].X2, model[include].GRID[quad.G1].X3 ) );
                line_points.push( new THREE.Vector3( model[include].GRID[quad.G2].X1, model[include].GRID[quad.G2].X2, model[include].GRID[quad.G2].X3 ) );
                line_points.push( new THREE.Vector3( model[include].GRID[quad.G3].X1, model[include].GRID[quad.G3].X2, model[include].GRID[quad.G3].X3 ) );
                line_points.push( new THREE.Vector3( model[include].GRID[quad.G4].X1, model[include].GRID[quad.G4].X2, model[include].GRID[quad.G4].X3 ) );
                line_points.push( new THREE.Vector3( model[include].GRID[quad.G1].X1, model[include].GRID[quad.G1].X2, model[include].GRID[quad.G1].X3 ) );
                const line_material = new THREE.LineBasicMaterial( { color: 0x000000 } );
                const line_geometry = new THREE.BufferGeometry().setFromPoints( line_points );
                const line = new THREE.Line( line_geometry, line_material );
                g.add( line );

                // Add to overall group
                group.add( g );
            }
            // Add CTRIA
            for (var [eid, tri] of Object.entries(model[include].CTRIA)) {
                var points = new Float32Array( [
                    model[include].GRID[tri.G1].X1, model[include].GRID[tri.G1].X2, model[include].GRID[tri.G1].X3,
                    model[include].GRID[tri.G2].X1, model[include].GRID[tri.G2].X2, model[include].GRID[tri.G2].X3,
                    model[include].GRID[tri.G3].X1, model[include].GRID[tri.G3].X2, model[include].GRID[tri.G3].X3
                ]);
                var indices = [
                    0, 1, 2
                ];
                var geometry = new THREE.BufferGeometry();
                geometry.setIndex( indices );
                geometry.setAttribute( 'position', new THREE.BufferAttribute( points, 3 ) );
                var mesh = new THREE.Mesh( geometry, material );
                g.add( mesh );
                                
                // Add edges
                var line_points = [];
                line_points.push( new THREE.Vector3( model[include].GRID[tri.G1].X1, model[include].GRID[tri.G1].X2, model[include].GRID[tri.G1].X3 ) );
                line_points.push( new THREE.Vector3( model[include].GRID[tri.G2].X1, model[include].GRID[tri.G2].X2, model[include].GRID[tri.G2].X3 ) );
                line_points.push( new THREE.Vector3( model[include].GRID[tri.G3].X1, model[include].GRID[tri.G3].X2, model[include].GRID[tri.G3].X3 ) );
                line_points.push( new THREE.Vector3( model[include].GRID[tri.G1].X1, model[include].GRID[tri.G1].X2, model[include].GRID[tri.G1].X3 ) );
                const line_material = new THREE.LineBasicMaterial( { color: 0x000000 } );
                const line_geometry = new THREE.BufferGeometry().setFromPoints( line_points );
                const line = new THREE.Line( line_geometry, line_material );
                g.add( line );

                // Add to overall group
                group.add( g );
            }
        }
    }
    scene.add( group );

    // Bounding Box
    const bbox = new THREE.Box3();
    bbox.setFromObject( group );
    let size = bbox.getSize(new THREE.Vector3());
    let center = bbox.getCenter(new THREE.Vector3());
    const max_dim = Math.max(size.x, size.y, size.z)
    const min_dim = Math.min(size.x, size.y, size.z)

    // Helpers
    const axesHelper = new THREE.AxesHelper( max_dim );
    scene.add( axesHelper );
    const box = new THREE.Box3();
    box.setFromCenterAndSize( center, size );
    const helper = new THREE.Box3Helper( box, 0xffff00 );
    scene.add( helper );
     
    // renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

    // Camera
    let width = max_dim*5
    let height = max_dim*5
    camera = new THREE.OrthographicCamera( width / -2, width / 2, height / 2, height / -2, 0.1, max_dim*10 );
    camera.up = new THREE.Vector3(0, 0, 1);
    camera.position.set( -max_dim, -max_dim, max_dim );
    camera.lookAt( scene.position );

	// Controls
	controls = new TrackballControls( camera, renderer.domElement );

	// controls.rotateSpeed = max_dim*0.1;
    controls.rotateSpeed = 1;
	controls.zoomSpeed = 1;
	// controls.panSpeed = max_dim*0.1;
    controls.panSpeed = 1;

	controls.keys = [ 'KeyA', 'KeyS', 'KeyD' ];

	// lights
	const dirLight1 = new THREE.DirectionalLight( 0xffffff, 3 );
	dirLight1.position.set( 1, 1, 1 );
	scene.add( dirLight1 );

	const dirLight2 = new THREE.DirectionalLight( 0xffffff, 3 );
	dirLight2.position.set( -1, -1, -1 );
	scene.add( dirLight2 );

    const dirLight3 = new THREE.DirectionalLight( 0xffffff, 3 );
	dirLight3.position.set( -1, 0, -1 );
	scene.add( dirLight3 );

    const dirLight4 = new THREE.DirectionalLight( 0xffffff, 3 );
	dirLight4.position.set( 1, 0, 1 );
	scene.add( dirLight4 );

	const ambientLight = new THREE.AmbientLight( 0x555555 );
	scene.add( ambientLight );

	//
	// window.addEventListener( 'resize', onWindowResize );

}

function loadModel(modelContent) {
    var model = {};
    for (var include in modelContent) {
        var lines = modelContent[include]
        model[include] = {}
        for (const [ind, currentLine] of lines.entries()) {
            if (currentLine.toUpperCase().startsWith("GRID")) {
                model[include] = process_grid(model[include], lines.slice(ind, ind+2))
            } else if (currentLine.toUpperCase().startsWith("CQUAD")) {
                model[include] = process_quad(model[include], lines.slice(ind, ind+2))
            } else if (currentLine.toUpperCase().startsWith("CTRIA")) {
                model[include] = process_tri(model[include], lines.slice(ind, ind+2))
            }
        }
    }
    return model
}

function process_grid(model, lines) {
    if (!("GRID" in model)) {
        model["GRID"] = {}
    }
    if (~lines[0].indexOf("*")) {
        lines[0] = lines[0].padEnd(72).slice(8)
        var [id, cp, x1, x2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [x3, cd, ps, seid] = lines[1].match(/.{1,16}/g)
        id = parseInt(id)
        cp = parseInt(cp)
        x1 = parseFloat(x1)
        x2 = parseFloat(x2)
        x3 = parseFloat(x3)
        cd = parseInt(cd)
        ps = parseInt(ps)
        seid = parseInt(seid)
    } else {
        lines[0] = lines[0].padEnd(72)
        var [_, id, cp, x1, x2, x3, cd, ps, seid] = lines[0].match(/.{1,8}/g)
        id = parseInt(id)
        cp = parseInt(cp)
        x1 = parseFloat(x1)
        x2 = parseFloat(x2)
        x3 = parseFloat(x3)
        cd = parseInt(cd)
        ps = parseInt(ps)
        seid = parseInt(seid)
    }
    model["GRID"][id] = {}
    model["GRID"][id]["CP"] = cp
    model["GRID"][id]["X1"] = x1
    model["GRID"][id]["X2"] = x2
    model["GRID"][id]["X3"] = x3
    model["GRID"][id]["CD"] = cd
    model["GRID"][id]["PS"] = ps
    model["GRID"][id]["SEID"] = seid
    return model
}

function process_quad(model, lines) {
    if (!("CQUAD" in model)) {
        model["CQUAD"] = {}
    }
    if (~lines[0].indexOf("*")) {
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, g4, mcid, zoffs] = lines[1].match(/.{1,16}/g)
        eid = parseInt(eid)
        pid = parseInt(pid)
        g1 = parseInt(g1)
        g2 = parseInt(g2)
        g3 = parseInt(g3)
        g4 = parseInt(g4)
        mcid = parseInt(mcid)
        zoffs = parseInt(zoffs)
    } else {
        lines[0] = lines[0].padEnd(72)
        var [_, eid, pid, g1, g2, g3, g4, mcid, zoffs] = lines[0].match(/.{1,8}/g)
        eid = parseInt(eid)
        pid = parseInt(pid)
        g1 = parseInt(g1)
        g2 = parseInt(g2)
        g3 = parseInt(g3)
        g4 = parseInt(g4)
        mcid = parseInt(mcid)
        zoffs = parseInt(zoffs)
    }
    model["CQUAD"][eid] = {}
    model["CQUAD"][eid]["G1"] = g1
    model["CQUAD"][eid]["G2"] = g2
    model["CQUAD"][eid]["G3"] = g3
    model["CQUAD"][eid]["G4"] = g4
    return model
}

function process_tri(model, lines) {
    if (!("CTRIA" in model)) {
        model["CTRIA"] = {}
    }
    if (~lines[0].indexOf("*")) {
        lines[0] = lines[0].padEnd(72).slice(8)
        var [eid, pid, g1, g2] = lines[0].match(/.{1,16}/g)
        lines[1] = lines[1].padEnd(72).slice(8)
        var [g3, mcid, zoffs, _] = lines[1].match(/.{1,16}/g)
        eid = parseInt(eid)
        pid = parseInt(pid)
        g1 = parseInt(g1)
        g2 = parseInt(g2)
        g3 = parseInt(g3)
        mcid = parseInt(mcid)
        zoffs = parseInt(zoffs)
    } else {
        lines[0] = lines[0].padEnd(72)
        var [_, eid, pid, g1, g2, g3, mcid, zoffs, _] = lines[0].match(/.{1,8}/g)
        eid = parseInt(eid)
        pid = parseInt(pid)
        g1 = parseInt(g1)
        g2 = parseInt(g2)
        g3 = parseInt(g3)
        mcid = parseInt(mcid)
        zoffs = parseInt(zoffs)
    }
    model["CTRIA"][eid] = {}
    model["CTRIA"][eid]["G1"] = g1
    model["CTRIA"][eid]["G2"] = g2
    model["CTRIA"][eid]["G3"] = g3
    return model
}

function onWindowResize() {

	const aspect = window.innerWidth / window.innerHeight;

	camera.left = - frustumSize * aspect / 2;
	camera.right = frustumSize * aspect / 2;
	camera.top = frustumSize / 2;
	camera.bottom = - frustumSize / 2;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	controls.handleResize();

}

function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}
