import * as THREE from 'three';
import { TrackballControls } from 'TrackballControls';
import { Pane } from 'tweakpane';
import * as EssentialsPlugin from '@tweakpane';
// import path from 'path'


let camera, controls, scene, renderer, group, state;

// FPS tracker
const fps = new Pane({container: document.getElementById('fps')})
fps.registerPlugin(EssentialsPlugin);
const fpsGraph = fps.addBlade({view: 'fpsgraph', rows: 2});

const pane = new Pane({title: 'FEM View Settings', expanded: false});
pane.registerPlugin(EssentialsPlugin);
const tab = pane.addTab({
    pages: [
        {title: 'Include Hierarchy'},
        {title: 'Global'},
    ],
});


let line_material, material_1d
line_material = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );

var model = loadModel(modelContent)

init(model);
animate();

function init(model) {
   	// World
	scene = new THREE.Scene();
    group = new THREE.Group()
	
	// Create Points
    var point_geometry = new THREE.BufferGeometry();
    var grids = new Float32Array(model['GRID'].length * 3)
    for ( var i = 0; i < model['GRID'].length; i += 3 ) {
        grids[i] = model['GRID'][i].X1
        grids[i+1] = model['GRID'][i].X2
        grids[i+2] = model['GRID'][i].X3
    }
    point_geometry.setAttribute('position', new THREE.BufferAttribute( grids, 3));
    
    var point_material = new THREE.PointsMaterial( {
        color: 0xffffff,
        size: 4,
        map: null
    } );
    var points = new THREE.Points( point_geometry, point_material );
    group.add( points );

    // Create Faces
    var face_geometry = new THREE.BufferGeometry();
    var indices = [];
    const color = Math.random() * 0xffffff;
    const material = new THREE.MeshBasicMaterial( { color: color } );
    material.transparent = true;
    material.side = THREE.DoubleSide;
    for (var include in model) {
        // Add UI for include
        // let f = tab.pages[0].addFolder({title: include.split(/[\\/]/).pop(), expanded: false});
        // material_1d = new THREE.LineBasicMaterial( { color: color, linewidth: 1 } );
        // let g = new THREE.Group();
        if (Object.keys(model[include]).length !== 0) {
            // //  Create 1D elements
            // if ('1D' in model[include]) {
            //     for (var [_, rod] of Object.entries(model[include]['1D'])) {
            //         var grids = [rod.G1, rod.G2]
            //         g = line(g, grids, model[include], material_1d)
            //         // Add to overall group
            //         group.add( g );
            //     }
            // }
            // // Create 2D elements with 3 edges
            // if ('2D_3e' in model[include]) {
            //     for (var [_, tri] of Object.entries(model[include]['2D_3e'])) {
            //         var grids = [tri.G1, tri.G2, tri.G3]
            //         g = triangle(g, grids, model[include], material, true)
            //         // Add to overall group
            //         group.add( g );
            //     }
            // }
            // Create 2D elements with 4 edges
            if ('2D_4e' in model[include]) {
                for (var [_, quad] of Object.entries(model[include]['2D_4e'])) {
                    let ind1 = model['GRID'].findIndex(x => x.ID === quad.G1)
                    let ind2 = model['GRID'].findIndex(x => x.ID === quad.G2)
                    let ind3 = model['GRID'].findIndex(x => x.ID === quad.G3)
                    let ind4 = model['GRID'].findIndex(x => x.ID === quad.G4)
                    // Triangle 1
                    indices.push(ind1)
                    indices.push(ind2)
                    indices.push(ind3)
                    // Triangle 2
                    indices.push(ind3)
                    indices.push(ind4)
                    indices.push(ind1)
                    // var grids = [quad.G1, quad.G2, quad.G3, quad.G4]
                    // g = square(g, grids, model[include], material)
                    // // Add to overall group
                    // group.add( g );
                }
            }
            // // Create 3D elements with 4 sides
            // if ('3D_4s' in model[include]) {
            //     for (var [_, tet] of Object.entries(model[include]['3D_4s'])) {
            //         var grids = [tet.G1, tet.G2, tet.G3]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [tet.G1, tet.G2, tet.G4]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [tet.G2, tet.G3, tet.G4]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [tet.G1, tet.G3, tet.G4]
            //         g = triangle(g, grids, model[include], material, true)
            //         // Add to overall group
            //         group.add( g );
            //     }
            // }
            // // Create 3D elements with 5 sides
            // if ('3D_5s' in model[include]) {
            //     for (var [_, pyr] of Object.entries(model[include]['3D_5s'])) {
            //         var grids = [pyr.G1, pyr.G2, pyr.G3, pyr.G4]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [pyr.G1, pyr.G2, pyr.G5]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [pyr.G2, pyr.G3, pyr.G5]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [pyr.G3, pyr.G4, pyr.G5]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [pyr.G4, pyr.G1, pyr.G5]
            //         g = triangle(g, grids, model[include], material, true)
            //         // Add to overall group
            //         group.add( g );
            //     }
            // }
            // // Create 3D elements with 6 sides
            // if ('3D_6s' in model[include]) {
            //     for (var [_, hex] of Object.entries(model[include]['3D_6s'])) {
            //         var grids = [hex.G1, hex.G2, hex.G3, hex.G4]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [hex.G5, hex.G6, hex.G7, hex.G8]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [hex.G1, hex.G2, hex.G6, hex.G5]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [hex.G2, hex.G6, hex.G7, hex.G3]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [hex.G3, hex.G7, hex.G8, hex.G4]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [hex.G1, hex.G5, hex.G8, hex.G4]
            //         g = square(g, grids, model[include], material, true)
            //         // Add to overall group
            //         group.add( g );
            //     }
            // }
            // // Create 3D elements with 7 sides
            // if ('3D_7s' in model[include]) {
            //     for (var [_, pen] of Object.entries(model[include]['3D_7s'])) {
            //         var grids = [pen.G1, pen.G2, pen.G3]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [pen.G4, pen.G5, pen.G6]
            //         g = triangle(g, grids, model[include], material, true)
            //         var grids = [pen.G1, pen.G2, pen.G5, pen.G4]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [pen.G1, pen.G3, pen.G6, pen.G4]
            //         g = square(g, grids, model[include], material, true)
            //         var grids = [pen.G3, pen.G2, pen.G5, pen.G6]
            //         g = square(g, grids, model[include], material, true)
            //         // Add to overall group
            //         group.add( g );
            //     }
            // }
        }
    }
    console.log(model['GRID'])
    console.log(grids)
    console.log(indices)
    face_geometry.setIndex( indices );
    face_geometry.setAttribute('position', new THREE.BufferAttribute( grids, 3));
    const mesh = new THREE.Mesh( face_geometry, material );
    group.add(mesh)
    new THREE.Box3().setFromObject( group ).getCenter( group.position ).multiplyScalar( - 1 );
    scene.add( group );

    // Bounding Box
    const bbox = new THREE.Box3();
    bbox.setFromObject( group );
    let size = bbox.getSize(new THREE.Vector3());
    let center = bbox.getCenter(new THREE.Vector3());
    const max_dim = Math.max(size.x, size.y, size.z)
    const min_dim = Math.min(size.x, size.y, size.z)

    // Helpers
    // const axesHelper = new THREE.AxesHelper( max_dim );
    // scene.add( axesHelper );
    const box = new THREE.Box3();
    // box.setFromCenterAndSize( center, size );
    const scale = 2.0;
    box.setFromCenterAndSize( center, new THREE.Vector3(size.x * scale, size.y * scale, size.z * scale) );
    const helper = new THREE.Box3Helper( box, 0xffff00 );
    helper.visible = false;
    scene.add( helper );
     
    // renderer
	renderer = new THREE.WebGLRenderer( { alpha: true } );
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

	// // controls.rotateSpeed = max_dim*0.1;
    // controls.rotateSpeed = 1;
	// controls.zoomSpeed = 1;
    controls.panSpeed = 1;

	controls.keys = [ 'KeyA', 'KeyS', 'KeyD' ];

	// lights
	const ambientLight = new THREE.AmbientLight( 0xffffff );
	scene.add( ambientLight );

	//
	// window.addEventListener( 'resize', onWindowResize );

    // Add Global UI
    let button = tab.pages[1].addButton( {title: 'Reset All'});
    button.on('click', () => {
        // scene = new THREE.ObjectLoader().parse( JSON.parse( state ));
        controls.reset();
    });
    tab.pages[1].addBlade({view: 'separator'});
    // Global Color Change
    let color1 = tab.pages[1].addBinding({color: '#ffffff', label: 'face'}, 'color');
    let color2 = tab.pages[1].addBinding({color: '#000000', label: 'wireframe'}, 'color');
    function setColor( obj, color, name ){
        obj.children.forEach((child)=>{
            setColor(child, color, name);
        });
        if (name === 'face') {
            if (obj.material && obj.name.includes('face')){
                obj.material.color = new THREE.Color( color );
            };
        } else {
            if (obj.material && obj.name.includes('wireframe')){
                obj.material.color = new THREE.Color( color );
            };
        }
    };
    color1.on('change', (ev) => {
        setColor( group, ev.value, 'face' )
    })
    color2.on('change', (ev) => {
        setColor( group, ev.value, 'wireframe' )
    })
    // Global Opacity Slider
    let slider = tab.pages[1].addBlade({
        view: 'slider',
        label: 'opacity',
        min: 0,
        max: 1,
        value: 1,
    })
    function setOpacity( obj, opacity ){
        obj.children.forEach((child)=>{
            setOpacity(child, opacity);
        })
        if (obj.material){
            obj.material.opacity = opacity;
        };
    };
    slider.on('change', (ev) => {
        setOpacity( group, ev.value );
    })
    // Global Helper bbox Checkbox
    let checkbox = tab.pages[1].addBinding({'bbox': false}, 'bbox')
    checkbox.on('change', (ev) => {
        if (ev.value) {
            helper.visible = true
        } else {
            helper.visible = false
        }
    })
    // Add Keybinds
    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event) {
        var keyCode = event.which;
        if (keyCode == 70){
            controls.reset();
        } else if (keyCode == 68) {
            console.log(renderer.info.render)
        }
    }
    // Save initial scene
    // state = JSON.stringify(scene.toJSON());
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
    fpsGraph.begin();
	renderer.render( scene, camera );
	controls.update();
    fpsGraph.end();
	requestAnimationFrame( animate );
    // console.log(renderer.info.render)
}

// function triangle(group, grids, model, material, do_wireframe) {
//     var points = []
//     grids.forEach((x, i) => {
//         points.push(model.GRID[x].X1)
//         points.push(model.GRID[x].X2)
//         points.push(model.GRID[x].X3)
//     })
//     points = new Float32Array( points )
    
//     var indices = [
//         0, 1, 2
//     ];
//     var geometry = new THREE.BufferGeometry();
//     geometry.setIndex( indices );
//     geometry.setAttribute( 'position', new THREE.BufferAttribute( points, 3 ) );
//     var mesh = new THREE.Mesh( geometry, material );
//     mesh.name = 'face';
//     group.add( mesh );
                    
//     // Add edges
//     if (do_wireframe) {
//         var line_points = [];
//         line_points.push( new THREE.Vector3( model.GRID[grids[0]].X1, model.GRID[grids[0]].X2, model.GRID[grids[0]].X3 ) );
//         line_points.push( new THREE.Vector3( model.GRID[grids[1]].X1, model.GRID[grids[1]].X2, model.GRID[grids[1]].X3 ) );
//         line_points.push( new THREE.Vector3( model.GRID[grids[2]].X1, model.GRID[grids[2]].X2, model.GRID[grids[2]].X3 ) );
//         line_points.push( new THREE.Vector3( model.GRID[grids[0]].X1, model.GRID[grids[0]].X2, model.GRID[grids[0]].X3 ) );
//         const line_geometry = new THREE.BufferGeometry().setFromPoints( line_points );
//         const line = new THREE.Line( line_geometry, line_material );
//         line.name = 'wireframe';
//         group.add( line );
//     }
//     return group
// }

// function square(group, grids, model, material) {
//     group = triangle(group, [grids[0], grids[1], grids[2]], model, material, false);
//     group = triangle(group, [grids[0], grids[2], grids[3]], model, material, false);
//     //  Add Wireframe
//     var line_points = [];
//     line_points.push( new THREE.Vector3( model.GRID[grids[0]].X1, model.GRID[grids[0]].X2, model.GRID[grids[0]].X3 ) );
//     line_points.push( new THREE.Vector3( model.GRID[grids[1]].X1, model.GRID[grids[1]].X2, model.GRID[grids[1]].X3 ) );
//     line_points.push( new THREE.Vector3( model.GRID[grids[2]].X1, model.GRID[grids[2]].X2, model.GRID[grids[2]].X3 ) );
//     line_points.push( new THREE.Vector3( model.GRID[grids[3]].X1, model.GRID[grids[3]].X2, model.GRID[grids[3]].X3 ) );
//     line_points.push( new THREE.Vector3( model.GRID[grids[0]].X1, model.GRID[grids[0]].X2, model.GRID[grids[0]].X3 ) );
//     const line_geometry = new THREE.BufferGeometry().setFromPoints( line_points );
//     const line = new THREE.Line( line_geometry, line_material );
//     line.name = 'wireframe';
//     group.add( line );

//     return group
// }

// function line(group, grids, model, material) {
//     var line_points = [];
//     line_points.push( new THREE.Vector3( model.GRID[grids[0]].X1, model.GRID[grids[0]].X2, model.GRID[grids[0]].X3 ) );
//     line_points.push( new THREE.Vector3( model.GRID[grids[1]].X1, model.GRID[grids[1]].X2, model.GRID[grids[1]].X3 ) );
//     const line_geometry = new THREE.BufferGeometry().setFromPoints( line_points );
//     const line = new THREE.Line( line_geometry, material );
//     line.name = 'wireframe';
//     group.add( line );
//     return group
// }
