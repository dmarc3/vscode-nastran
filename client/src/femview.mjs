import * as THREE from 'three';
// import { TrackballControls } from 'TrackballControls';
import { OrbitControls } from 'OrbitControls';
import { FontLoader } from 'FontLoader';
import { TextGeometry } from 'TextGeometry';
import { ViewHelper } from 'ViewHelper';
import { Pane } from 'tweakpane';
import * as EssentialsPlugin from '@tweakpane';
import Stats from 'stats';
// import path from 'path'
import { loadModel } from 'femload.mjs'


let camera, controls, scene, renderer, group, frustumSize, aspect, view;
let clock = new THREE.Clock();

// Load model
var model = loadModel(modelContent)

// Check that model was successfully loaded
if (typeof model === 'string') {
    // Failed to load
    error()
    // Add text
    var div = document.getElementById( 'error' );
    var content = document.createTextNode(model);
    div.appendChild(content);
    var p = document.getElementById( 'error_text' ); 
    // TODO: Update link to issue with template.
    p.innerHTML = 'Failed to process the above line while loading FEM View. Please verify that the entry is valid Nastran syntax. If it is, please consider submitting an issue <a href="https://github.com/dmarc3/vscode-nastran/issues/new/">here</a>.';
    div.appendChild(p);
    // document.body.innerText = model;
} else {
    // Successful load
    var stats = new Stats();
    document.body.appendChild( stats.dom );
    // Three.js model
    init(model);
    animate();
}

function init(model) {
    // renderer
	renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
    renderer.autoClear = false;
	document.body.appendChild( renderer.domElement );

    // Initialize UI
    const pane = new Pane({title: 'FEM View Settings', expanded: false});
    pane.registerPlugin(EssentialsPlugin);
    const tab = pane.addTab({
        pages: [
            {title: 'Include Hierarchy'},
            {title: 'Global'},
        ],
    });

   	// World
	scene = new THREE.Scene();
    group = new THREE.Group()
	
	// Create Points
    var point_geometry = new THREE.BufferGeometry();
    var grids = new Float32Array(model['GRID'].length * 3)
    for ( var i = 0; i < model['GRID'].length; i ++ ) {
        grids[i*3] = model['GRID'][i].X1
        grids[i*3+1] = model['GRID'][i].X2
        grids[i*3+2] = model['GRID'][i].X3
    }
    point_geometry.setAttribute('position', new THREE.BufferAttribute( grids, 3));
    var point_material = new THREE.PointsMaterial( {
        color: 0x000000,
        // size: 4,
        map: null
    } );
    var points = new THREE.Points( point_geometry, point_material );
    points.name = 'wireframe';
    points.visible = false;
    group.add( points );

    for (var include in model) {
        // Skip GRID
        if (include === 'GRID') {
            continue
        }
        // Skip include if nothing to plot
        if (!Object.keys(model[include]).length) {
            continue
        }
        let g = new THREE.Group();
        // Add UI for include
        const c = Math.random() * 0xffffff;
        let f = tab.pages[0].addFolder({title: include.split(/[\\/]/).pop(), expanded: false});
        // Visibility Toggle
        let visible = f.addBinding({visible: true}, 'visible')
        visible.on('change', (ev) => {
            if (ev.value) {
                g.visible = true
            } else {
                g.visible = false
            }
        })
        // Face Color
        let color1 = f.addBinding({'face color': '#' + new THREE.Color(c).getHexString()}, 'face color');
        color1.on('change', (ev) => {
            setColor( g, ev.value, 'face' )
        })
        // Edge Color
        let color2 = f.addBinding({'edge color': '#000000'}, 'edge color');
        color2.on('change', (ev) => {
            setColor( g, ev.value, 'wireframe' )
        })
        // Initialize Face information
        var face_geometry = new THREE.BufferGeometry();
        var face_indices = [];
        const face_material = new THREE.MeshBasicMaterial( { color: c } );
        face_material.transparent = true;
        face_material.side = THREE.DoubleSide;
        // Initialize Line information
        var line_geometry = new THREE.BufferGeometry();
        var line_material = new THREE.LineBasicMaterial( {color: 0x000000} );
        var line_indices = [];
        // Loop through all includes
        if (Object.keys(model[include]).length !== 0) {
            //  Create 1D elements
            if ('1D' in model[include]) {
                for (var [_, rod] of Object.entries(model[include]['1D'])) {
                    line_indices.push(model['GRID'].findIndex(x => x.ID === rod.G1))
                    line_indices.push(model['GRID'].findIndex(x => x.ID === rod.G2))
                }
            }
            // Create 2D elements with 3 edges
            if ('2D_3e' in model[include]) {
                for (var [_, tri] of Object.entries(model[include]['2D_3e'])) {
                    // Get indices
                    let ind = []
                    ind.push(model['GRID'].findIndex(x => x.ID === tri.G1))
                    ind.push(model['GRID'].findIndex(x => x.ID === tri.G2))
                    ind.push(model['GRID'].findIndex(x => x.ID === tri.G3))
                    face_indices, line_indices = triangle(face_indices, line_indices, ind)
                }
            }
            // Create 2D elements with 4 edges
            if ('2D_4e' in model[include]) {
                for (var [_, quad] of Object.entries(model[include]['2D_4e'])) {
                    // Get indices
                    let ind = []
                    ind.push(model['GRID'].findIndex(x => x.ID === quad.G1))
                    ind.push(model['GRID'].findIndex(x => x.ID === quad.G2))
                    ind.push(model['GRID'].findIndex(x => x.ID === quad.G3))
                    ind.push(model['GRID'].findIndex(x => x.ID === quad.G4))
                    face_indices, line_indices = square(face_indices, line_indices, ind)
                }
            }
            // Create 3D elements with 4 sides
            if ('3D_4s' in model[include]) {
                for (var [_, tet] of Object.entries(model[include]['3D_4s'])) {
                    // Get indices
                    let ind = []
                    ind.push(model['GRID'].findIndex(x => x.ID === tet.G1))
                    ind.push(model['GRID'].findIndex(x => x.ID === tet.G2))
                    ind.push(model['GRID'].findIndex(x => x.ID === tet.G3))
                    ind.push(model['GRID'].findIndex(x => x.ID === tet.G4))
                    // Triangle 1
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[0], ind[1], ind[2]])
                    // Triangle 2
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[0], ind[1], ind[3]])
                    // Triangle 3
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[1], ind[2], ind[3]])
                    // Triangle 4
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[0], ind[2], ind[3]])
                }
            }
            // Create 3D elements with 5 sides
            if ('3D_5s' in model[include]) {
                for (var [_, pyr] of Object.entries(model[include]['3D_5s'])) {
                    // Get indices
                    let ind = []
                    ind.push(model['GRID'].findIndex(x => x.ID === pyr.G1))
                    ind.push(model['GRID'].findIndex(x => x.ID === pyr.G2))
                    ind.push(model['GRID'].findIndex(x => x.ID === pyr.G3))
                    ind.push(model['GRID'].findIndex(x => x.ID === pyr.G4))
                    ind.push(model['GRID'].findIndex(x => x.ID === pyr.G5))
                    // Square
                    face_indices, line_indices = square(face_indices, line_indices, [ind[0], ind[1], ind[2], ind[3]])
                    // Triangle 1
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[0], ind[1], ind[4]])
                    // Triangle 2
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[1], ind[2], ind[4]])
                    // Triangle 3
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[2], ind[3], ind[4]])
                    // Triangle 4
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[3], ind[0], ind[4]])
                }
            }
            // Create 3D elements with 6 sides
            if ('3D_6s' in model[include]) {
                for (var [_, hex] of Object.entries(model[include]['3D_6s'])) {
                    // Get indices
                    let ind = []
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G1))
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G2))
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G3))
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G4))
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G5))
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G6))
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G7))
                    ind.push(model['GRID'].findIndex(x => x.ID === hex.G8))
                    // Square 1
                    face_indices, line_indices = square(face_indices, line_indices, [ind[0], ind[1], ind[2], ind[3]])
                    // Square 2
                    face_indices, line_indices = square(face_indices, line_indices, [ind[4], ind[5], ind[6], ind[7]])
                    // Square 3
                    face_indices, line_indices = square(face_indices, line_indices, [ind[0], ind[1], ind[5], ind[4]])
                    // Square 4
                    face_indices, line_indices = square(face_indices, line_indices, [ind[1], ind[5], ind[6], ind[2]])
                    // Square 5
                    face_indices, line_indices = square(face_indices, line_indices, [ind[2], ind[6], ind[7], ind[3]])
                    // Square 6
                    face_indices, line_indices = square(face_indices, line_indices, [ind[0], ind[4], ind[7], ind[3]])
                }
            }
            // Create 3D elements with 7 sides
            if ('3D_7s' in model[include]) {
                for (var [_, pen] of Object.entries(model[include]['3D_7s'])) {
                    // Get indices
                    let ind = []
                    ind.push(model['GRID'].findIndex(x => x.ID === pen.G1))
                    ind.push(model['GRID'].findIndex(x => x.ID === pen.G2))
                    ind.push(model['GRID'].findIndex(x => x.ID === pen.G3))
                    ind.push(model['GRID'].findIndex(x => x.ID === pen.G4))
                    ind.push(model['GRID'].findIndex(x => x.ID === pen.G5))
                    ind.push(model['GRID'].findIndex(x => x.ID === pen.G6))
                    // Triangle 1
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[0], ind[1], ind[2]])
                    // Triangle 2
                    face_indices, line_indices = triangle(face_indices, line_indices, [ind[3], ind[4], ind[5]])
                    // Square 1
                    face_indices, line_indices = square(face_indices, line_indices, [ind[0], ind[1], ind[4], ind[3]])
                    // Square 2
                    face_indices, line_indices = square(face_indices, line_indices, [ind[0], ind[2], ind[5], ind[3]])
                    // Square 3
                    face_indices, line_indices = square(face_indices, line_indices, [ind[2], ind[1], ind[4], ind[5]])
                }
            }
        }
        // Faces
        face_geometry.setIndex( face_indices );
        face_geometry.setAttribute('position', new THREE.BufferAttribute( grids, 3));
        const faces = new THREE.Mesh( face_geometry, face_material );
        faces.name = "face";
        // Lines
        line_geometry.setAttribute('position', new THREE.BufferAttribute( grids, 3));
        line_geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(line_indices), 1));
        var lines = new THREE.LineSegments(line_geometry, line_material);
        lines.name = "wireframe";
        // Add to group
        g.add(faces);
        g.add(lines);
        g.name = include;
        group.add(g);
    }
    

    // Add to scene
    // Set rotation at geometric center
    // new THREE.Box3().setFromObject( group ).getCenter( group.position ).multiplyScalar( - 1 );
    scene.add( group );

    // Bounding Box
    const bbox = new THREE.Box3();
    bbox.setFromObject( group );
    let size = bbox.getSize(new THREE.Vector3());
    let center = bbox.getCenter(new THREE.Vector3());
    const max_dim = Math.max(size.x, size.y, size.z)
    const frustumSize = max_dim*5;
    const min_dim = Math.min(size.x, size.y, size.z)

    // Helpers
    const helper = new THREE.AxesHelper( max_dim / 10 );
    helper.visible = false;
    scene.add( helper );

    // Camera
    aspect = window.innerHeight / window.innerWidth;
    camera = new THREE.OrthographicCamera( frustumSize / -2, frustumSize / 2, frustumSize*aspect / 2, frustumSize*aspect / -2, 0.1, max_dim*10 );
    // camera.up = new THREE.Vector3(0, 0, 1);
    camera.position.set( -max_dim, -max_dim, max_dim );
    camera.lookAt( scene.position );

	// Controls
	// controls = new TrackballControls( camera, renderer.domElement );
    controls = new OrbitControls( camera, renderer.domElement );

	// lights
	const ambientLight = new THREE.AmbientLight( 0xffffff );
	scene.add( ambientLight );

    // Add Global UI
    let button = tab.pages[1].addButton( {title: 'Reset All'});
    button.on('click', () => {
        // scene = new THREE.ObjectLoader().parse( JSON.parse( state ));
        controls.reset();
    });
    tab.pages[1].addBlade({view: 'separator'});
    // Global Color Change
    let color1 = tab.pages[1].addBinding({"face color": '#ffffff'}, 'face color');
    let color2 = tab.pages[1].addBinding({"edge color": '#000000'}, 'edge color');
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
    // Global Helper Checkbox
    let checkbox = tab.pages[1].addBinding({'origin': false}, 'origin')
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
    // Resize Window
    window.addEventListener( 'resize', onWindowResize, false );

    // ViewHelper
    view = new ViewHelper( camera, renderer.domElement );
    // view.controls = controls;
    view.center = controls.target;
    
    const div = document.createElement( 'div' );
    div.id = 'viewHelper';
    div.style.position = 'absolute';
    div.style.right = 0;
    div.style.bottom = 0;
    div.style.height = '128px';
    div.style.width = '128px';
    
    document.body.appendChild( div );
    
    div.addEventListener( 'pointerup', (event) => view.handleClick( event ) );
}

function onWindowResize() {

    var aspect = window.innerHeight / window.innerWidth;

    camera.left = frustumSize / - 2;
    camera.right = frustumSize / 2;
    camera.top = frustumSize * aspect / 2;
    camera.bottom = - frustumSize * aspect / 2;

    // camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

    controls.handleResize();

}

function animate() {
    stats.begin();

    requestAnimationFrame( animate );
    
    // TODO: Figure out how to animate with TrackballControls?
	// controls.update();
    const delta = clock.getDelta();
    if ( view.animating ) view.update( delta );
    
    // renderer.clear();
	renderer.render( scene, camera );
    view.render( renderer );

    stats.end();
}

function triangle(face_indices, line_indices, ind) {
    // Face
    face_indices.push(ind[2])
    face_indices.push(ind[1])
    face_indices.push(ind[0])
    // Line 1
    line_indices.push(ind[0])
    line_indices.push(ind[1])
    // Line 2
    line_indices.push(ind[1])
    line_indices.push(ind[2])
    // Line 3
    line_indices.push(ind[2])
    line_indices.push(ind[0])
    return face_indices, line_indices
}

function square(face_indices, line_indices, ind) {
    // Triangle 1
    face_indices.push(ind[0])
    face_indices.push(ind[1])
    face_indices.push(ind[2])
    // Triangle 2
    face_indices.push(ind[2])
    face_indices.push(ind[3])
    face_indices.push(ind[0])
    // Lines
    // Line 1
    line_indices.push(ind[0])
    line_indices.push(ind[1])
    // Line 2
    line_indices.push(ind[1])
    line_indices.push(ind[2])
    // Line 3
    line_indices.push(ind[2])
    line_indices.push(ind[3])
    // Line 4
    line_indices.push(ind[3])
    line_indices.push(ind[0])
    return face_indices, line_indices
}

function error() {
    // renderer
	renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
    renderer.autoClear = false;
	document.body.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 0, 100, 700 );
    camera.lookAt(new THREE.Vector3(0,-100,0)); // Set look at coordinate like this
    scene = new THREE.Scene();
    const loader = new FontLoader();
    const font = loader.load( fontPath, function ( font ) {
        var textGeometry = new TextGeometry( "E R R O R", {
            font: font,
            size: 50,
            height: 25,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 5,
            bevelSize: 3,
            bevelOffset: 0,
            bevelSegments: 3
        });
        textGeometry.center()
    
        var textMaterial = new THREE.MeshToonMaterial( 
        { color: 0xFF0000, gradientMap: 'threeTone'}
        );
    
        var mesh = new THREE.Mesh( textGeometry, textMaterial );
        scene.add( mesh );
        // const light = new THREE.AmbientLight( 0xFFFFFF );
        const light = new THREE.HemisphereLight( 0xFFFFFF, 0x000000, 1 );
        scene.add( light );
        // const directionalLight = new THREE.DirectionalLight( 0xFF00FF );
        // directionalLight.position.set(1, 1, 1);
        // scene.add( directionalLight );
        renderer.render( scene, camera );
        window.addEventListener( 'resize', onErrorWindowResize, false );
    });
}

function onErrorWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}