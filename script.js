import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xcccccc, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcccccc, 0, 300)

// 
// Camera
// 

const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(26.4, 39.8, 35.8);

// 
// Mouse Control
// 

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.dampingFactor = 0.025;
orbit.screenSpacePanning = false;
orbit.maxZoom = 5;
orbit.minZoom = 0.5;
orbit.minPolarAngle = 0;
orbit.maxPolarAngle = Math.PI / 2.05;
orbit.minDistance = 10;
orbit.maxDistance = 100;
orbit.target = new THREE.Vector3(-6.5, 0, 1.5);

const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// 
// Floor
// 

const planeGeometry = new THREE.PlaneGeometry(1, 1);
const planeMaterial = new THREE.MeshStandardMaterial( {color: 0xeeeeee, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1} );
const plane = new THREE.Mesh(planeGeometry, planeMaterial );
scene.add(plane);
plane.position.set(0, 0, 0);
plane.rotateX(Math.PI / 2);
plane.scale.set(500, 500, 1);
plane.receiveShadow = true;

// Lighting
const ambientLight = new THREE.AmbientLight(0x777777);
scene.add(ambientLight);

const spotLight1 = new THREE.SpotLight(0xFFFFFF, 0.25);
spotLight1.position.set(15, 20, 15);
spotLight1.castShadow = true;
spotLight1.angle = 1;
spotLight1.penumbra = 1;
spotLight1.shadow.mapSize.width = 1024;
spotLight1.shadow.mapSize.height = 1024;
scene.add(spotLight1);

const spotLight2 = new THREE.SpotLight(0xFFFFFF, 0.55);
spotLight2.position.set(0, 25, 0);
spotLight2.castShadow = true;
spotLight2.angle = 0.5;
spotLight2.penumbra = 1;
spotLight2.shadow.mapSize.width = 1024;
spotLight2.shadow.mapSize.height = 1024;
scene.add(spotLight2);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.15);
directionalLight.position.set(5, 7.5, 5);
// directionalLight.castShadow = true;
directionalLight.shadow.camera.scale.x = 5;
directionalLight.shadow.camera.scale.y = 5;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
scene.add(directionalLight);

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
// scene.add(dLightHelper);

const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dLightShadowHelper);

// 
// File ID
// 

// A
const textureFileA = new THREE.TextureLoader().load('./A.png');
const materialFileA = new THREE.MeshLambertMaterial({map: textureFileA, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileA = new THREE.Mesh(planeGeometry, materialFileA);
planeFileA.position.set(-3.5, 0.001, 4.5);
planeFileA.rotateX(-Math.PI / 2);
planeFileA.receiveShadow = true;
scene.add(planeFileA);
// B
const textureFileB = new THREE.TextureLoader().load('./B.png');
const materialFileB = new THREE.MeshLambertMaterial({map: textureFileB, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileB = new THREE.Mesh(planeGeometry, materialFileB);
planeFileB.position.set(-2.5, 0.001, 4.5);
planeFileB.rotateX(-Math.PI / 2);
planeFileB.receiveShadow = true;
scene.add(planeFileB);
// C
const textureFileC = new THREE.TextureLoader().load('./C.png');
const materialFileC = new THREE.MeshLambertMaterial({map: textureFileC, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileC = new THREE.Mesh(planeGeometry, materialFileC);
planeFileC.position.set(-1.5, 0.001, 4.5);
planeFileC.rotateX(-Math.PI / 2);
planeFileC.receiveShadow = true;
scene.add(planeFileC);
// D
const textureFileD = new THREE.TextureLoader().load('./D.png');
const materialFileD = new THREE.MeshLambertMaterial({map: textureFileD, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileD = new THREE.Mesh(planeGeometry, materialFileD);
planeFileD.position.set(-0.5, 0.001, 4.5);
planeFileD.rotateX(-Math.PI / 2);
planeFileD.receiveShadow = true;
scene.add(planeFileD);
// E
const textureFileE = new THREE.TextureLoader().load('./E.png');
const materialFileE = new THREE.MeshLambertMaterial({map: textureFileE, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileE = new THREE.Mesh(planeGeometry, materialFileE);
planeFileE.position.set(0.5, 0.001, 4.5);
planeFileE.rotateX(-Math.PI / 2);
planeFileE.receiveShadow = true;
scene.add(planeFileE);
// F
const textureFileF = new THREE.TextureLoader().load('./F.png');
const materialFileF = new THREE.MeshLambertMaterial({map: textureFileF, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileF = new THREE.Mesh(planeGeometry, materialFileF);
planeFileF.position.set(1.5, 0.001, 4.5);
planeFileF.rotateX(-Math.PI / 2);
planeFileF.receiveShadow = true;
scene.add(planeFileF);
// G
const textureFileG = new THREE.TextureLoader().load('./G.png');
const materialFileG = new THREE.MeshLambertMaterial({map: textureFileG, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileG = new THREE.Mesh(planeGeometry, materialFileG);
planeFileG.position.set(2.5, 0.001, 4.5);
planeFileG.rotateX(-Math.PI / 2);
planeFileG.receiveShadow = true;
scene.add(planeFileG);
// H
const textureFileH = new THREE.TextureLoader().load('./H.png');
const materialFileH = new THREE.MeshLambertMaterial({map: textureFileH, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeFileH = new THREE.Mesh(planeGeometry, materialFileH);
planeFileH.position.set(3.5, 0.001, 4.5);
planeFileH.rotateX(-Math.PI / 2);
planeFileH.receiveShadow = true;
scene.add(planeFileH);

// 
// Rank ID
// 

// 1
const textureRank1 = new THREE.TextureLoader().load('./1.png');
const materialRank1 = new THREE.MeshLambertMaterial({map: textureRank1, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank1 = new THREE.Mesh(planeGeometry, materialRank1);
planeRank1.position.set(4.5, 0.001, 3.5);
planeRank1.rotateX(-Math.PI / 2);
planeRank1.receiveShadow = true;
scene.add(planeRank1);
// 2
const textureRank2 = new THREE.TextureLoader().load('./2.png');
const materialRank2 = new THREE.MeshLambertMaterial({map: textureRank2, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank2 = new THREE.Mesh(planeGeometry, materialRank2);
planeRank2.position.set(4.5, 0.001, 2.5);
planeRank2.rotateX(-Math.PI / 2);
planeRank2.receiveShadow = true;
scene.add(planeRank2);
// 3
const textureRank3 = new THREE.TextureLoader().load('./3.png');
const materialRank3 = new THREE.MeshLambertMaterial({map: textureRank3, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank3 = new THREE.Mesh(planeGeometry, materialRank3);
planeRank3.position.set(4.5, 0.001, 1.5);
planeRank3.rotateX(-Math.PI / 2);
planeRank3.receiveShadow = true;
scene.add(planeRank3);
// 4
const textureRank4 = new THREE.TextureLoader().load('./4.png');
const materialRank4 = new THREE.MeshLambertMaterial({map: textureRank4, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank4 = new THREE.Mesh(planeGeometry, materialRank4);
planeRank4.position.set(4.5, 0.001, 0.5);
planeRank4.rotateX(-Math.PI / 2);
planeRank4.receiveShadow = true;
scene.add(planeRank4);
// 5
const textureRank5 = new THREE.TextureLoader().load('./5.png');
const materialRank5 = new THREE.MeshLambertMaterial({map: textureRank5, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank5 = new THREE.Mesh(planeGeometry, materialRank5);
planeRank5.position.set(4.5, 0.001, -0.5);
planeRank5.rotateX(-Math.PI / 2);
planeRank5.receiveShadow = true;
scene.add(planeRank5);
// 6
const textureRank6 = new THREE.TextureLoader().load('./6.png');
const materialRank6 = new THREE.MeshLambertMaterial({map: textureRank6, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank6 = new THREE.Mesh(planeGeometry, materialRank6);
planeRank6.position.set(4.5, 0.001, -1.5);
planeRank6.rotateX(-Math.PI / 2);
planeRank6.receiveShadow = true;
scene.add(planeRank6);
// 
const textureRank7 = new THREE.TextureLoader().load('./7.png');
const materialRank7 = new THREE.MeshLambertMaterial({map: textureRank7, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank7 = new THREE.Mesh(planeGeometry, materialRank7);
planeRank7.position.set(4.5, 0.001, -2.5);
planeRank7.rotateX(-Math.PI / 2);
planeRank7.receiveShadow = true;
scene.add(planeRank7);
// 8
const textureRank8 = new THREE.TextureLoader().load('./8.png');
const materialRank8 = new THREE.MeshLambertMaterial({map: textureRank8, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
const planeRank8 = new THREE.Mesh(planeGeometry, materialRank8);
planeRank8.position.set(4.5, 0.001, -3.5);
planeRank8.rotateX(-Math.PI / 2);
planeRank8.receiveShadow = true;
scene.add(planeRank8);

// 
// 3D Heatmap Board
// 
var activeProfile = "magnus_el";
var activeProfileNum = 0;

var activeDataType = "mix";
var activeDataTypeNum = 0;

const cube = new THREE.BoxGeometry();
const edge = new THREE.EdgesGeometry(cube);

var valueContainer = [
    [
        [
            [0.2, 0.2, 0.4, 0.7, 0.7, 0.6, 0.2, 0.2],
            [0.3, 0.3, 0.7, 0.8, 0.9, 0.7, 0.5, 0.3],
            [0.5, 0.5, 1.2, 1.3, 1.2, 1.1, 0.5, 0.6],
            [0.7, 0.8, 0.8, 1.7, 1.6, 0.9, 0.9, 0.6],
            [0.5, 0.8, 0.9, 1.5, 1.4, 1.0, 0.9, 0.6],
            [0.8, 0.4, 1.3, 0.9, 0.9, 1.4, 0.4, 0.9],
            [0.6, 0.5, 0.7, 0.7, 0.8, 0.7, 0.6, 0.6],
            [0.2, 0.2, 0.4, 0.6, 0.5, 0.4, 0.2, 0.2]
        ],
        [
            [0.2, 0.2, 0.6, 0.9, 0.5, 0.3, 0.2, 0.1],
            [0.5, 0.4, 1.0, 0.8, 0.9, 0.4, 0.3, 0.2],
            [0.8, 0.8, 1.8, 1.6, 0.8, 0.6, 0.3, 0.2],
            [1.1, 1.3, 1.2, 2.3, 1.4, 0.6, 0.4, 0.3],
            [0.9, 1.3, 1.5, 1.8, 1.3, 0.5, 0.3, 0.2],
            [1.5, 0.6, 2.2, 1.2, 0.8, 0.6, 0.3, 0.2],
            [1.1, 0.8, 1.1, 0.8, 0.9, 0.3, 0.2, 0.1],
            [0.3, 0.3, 0.7, 0.8, 0.4, 0.3, 0.2, 0.1]
        ],
        [
            [0.2, 0.3, 0.3, 0.4, 0.9, 0.9, 0.2, 0.3],
            [0.1, 0.3, 0.4, 0.9, 0.9, 1.0, 0.6, 0.5],
            [0.2, 0.3, 0.6, 0.9, 1.7, 1.7, 0.6, 1.0],
            [0.2, 0.3, 0.5, 1.2, 1.9, 1.3, 1.5, 1.0],
            [0.2, 0.3, 0.4, 1.1, 1.6, 1.6, 1.5, 1.0],
            [0.2, 0.2, 0.4, 0.6, 1.1, 2.3, 0.6, 1.6],
            [0.1, 0.2, 0.2, 0.6, 0.7, 1.1, 0.9, 1.2],
            [0.1, 0.1, 0.2, 0.4, 0.6, 0.6, 0.3, 0.3]
        ]
    ],
    [
        [
            [0.2, 0.2, 0.4, 0.6, 0.6, 0.5, 0.2, 0.2],
            [0.3, 0.3, 0.7, 0.7, 0.9, 0.6, 0.4, 0.3],
            [0.5, 0.4, 1.1, 1.1, 1.1, 1.1, 0.5, 0.5],
            [0.6, 0.8, 0.7, 1.6, 1.5, 0.8, 0.9, 0.6],
            [0.5, 0.7, 0.8, 1.4, 1.2, 0.9, 0.8, 0.5],
            [0.7, 0.3, 1.2, 0.7, 0.8, 1.3, 0.3, 0.8],
            [0.5, 0.3, 0.5, 0.6, 0.7, 0.6, 0.4, 0.6],
            [0.2, 0.2, 0.4, 0.5, 0.4, 0.4, 0.2, 0.2]
        ],
        [
            [0.2, 0.2, 0.6, 0.9, 0.4, 0.3, 0.2, 0.2],
            [0.5, 0.3, 1.1, 0.6, 0.9, 0.3, 0.3, 0.1],
            [0.8, 0.6, 1.7, 1.3, 0.6, 0.5, 0.3, 0.1],
            [1.0, 1.4, 1.1, 2.1, 1.2, 0.5, 0.3, 0.2],
            [0.9, 1.2, 1.4, 1.8, 1.1, 0.4, 0.3, 0.1],
            [1.3, 0.5, 2.1, 1.0, 0.6, 0.5, 0.2, 0.1],
            [1.0, 0.5, 0.9, 0.7, 0.9, 0.3, 0.2, 0.1],
            [0.3, 0.3, 0.6, 0.7, 0.4, 0.3, 0.1, 0.1]
        ],
        [
            [0.1, 0.2, 0.3, 0.4, 0.7, 0.8, 0.2, 0.2],
            [0.1, 0.2, 0.3, 0.8, 0.8, 0.9, 0.6, 0.5],
            [0.2, 0.2, 0.6, 0.8, 1.6, 1.6, 0.7, 0.8],
            [0.2, 0.2, 0.4, 1.2, 1.9, 1.1, 1.4, 0.9],
            [0.1, 0.2, 0.3, 0.9, 1.4, 1.5, 1.4, 0.8],
            [0.1, 0.2, 0.3, 0.5, 0.9, 2.2, 0.5, 1.5],
            [0.1, 0.1, 0.2, 0.5, 0.6, 0.9, 0.7, 1.1],
            [0.1, 0.1, 0.1, 0.3, 0.5, 0.6, 0.3, 0.2]
        ]
    ],
    [
        [
            [0.1, 0.2, 0.5, 0.6, 0.6, 0.6, 0.2, 0.2],
            [0.3, 0.3, 0.7, 0.8, 0.8, 0.7, 0.5, 0.3],
            [0.5, 0.6, 1.2, 1.2, 1.2, 1.1, 0.5, 0.6],
            [0.6, 0.9, 0.8, 1.6, 1.7, 0.9, 0.9, 0.6],
            [0.5, 0.7, 0.9, 1.3, 1.2, 0.9, 1.0, 0.5],
            [0.7, 0.3, 1.2, 0.8, 0.8, 1.3, 0.3, 0.8],
            [0.6, 0.5, 0.6, 0.6, 0.7, 0.6, 0.4, 0.6],
            [0.1, 0.2, 0.4, 0.5, 0.5, 0.5, 0.2, 0.1]
        ],
        [
            [0.2, 0.2, 0.7, 0.9, 0.4, 0.3, 0.2, 0.1],
            [0.5, 0.4, 1.0, 0.8, 0.8, 0.4, 0.3, 0.1],
            [0.9, 0.9, 1.8, 1.7, 0.8, 0.5, 0.3, 0.2],
            [1.1, 1.5, 1.2, 2.1, 1.4, 0.5, 0.3, 0.2],
            [0.8, 1.3, 1.5, 1.6, 1.1, 0.4, 0.3, 0.1],
            [1.4, 0.6, 2.1, 1.2, 0.6, 0.4, 0.2, 0.1],
            [1.1, 0.8, 1.0, 0.7, 0.8, 0.3, 0.2, 0.1],
            [0.2, 0.3, 0.7, 0.7, 0.3, 0.2, 0.1, 0.1]
        ],
        [
            [0.1, 0.2, 0.2, 0.4, 0.8, 0.8, 0.2, 0.2],
            [0.1, 0.2, 0.3, 0.9, 0.8, 1.0, 0.8, 0.5],
            [0.2, 0.2, 0.6, 0.8, 1.6, 1.8, 0.8, 0.9],
            [0.2, 0.2, 0.4, 1.0, 2.0, 1.2, 1.5, 1.0],
            [0.1, 0.2, 0.3, 1.0, 1.2, 1.5, 1.7, 0.8],
            [0.1, 0.1, 0.3, 0.5, 1.0, 2.2, 0.5, 1.5],
            [0.1, 0.2, 0.2, 0.5, 0.6, 0.9, 0.6, 1.1],
            [0.0, 0.1, 0.1, 0.3, 0.6, 0.7, 0.3, 0.2]
        ]
    ]
];

var cubeContainer = new Array(8);

for (var i = 0; i < 8; i++) {
    cubeContainer[i] = new Array(8);
}

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        cubeContainer[i][j] = new Array(2);
    }
}

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        cubeContainer[i][j][0] = new THREE.Mesh(cube, new THREE.MeshStandardMaterial({color: 0xFFFFFF, flatShading: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1}));
        cubeContainer[i][j][0].castShadow = true;
        cubeContainer[i][j][0].receiveShadow = true;
        cubeContainer[i][j][0].userData = {color: 1, internalValue: valueContainer[activeProfileNum][activeDataTypeNum][i][j], colorChange: -1};
        cubeContainer[i][j][0].position.set(-3.5 + i, 0, 3.5 - j);

        if (i == 0) {
            cubeContainer[i][j][0].name = "A" + (j + 1).toString();
        } else if (i === 1) {
            cubeContainer[i][j][0].name = "B" + (j + 1).toString();
        } else if (i === 2) {
            cubeContainer[i][j][0].name = "C" + (j + 1).toString();
        } else if (i === 3) {
            cubeContainer[i][j][0].name = "D" + (j + 1).toString();
        } else if (i === 4) {
            cubeContainer[i][j][0].name = "E" + (j + 1).toString();
        } else if (i === 5) {
            cubeContainer[i][j][0].name = "F" + (j + 1).toString();
        } else if (i === 6) {
            cubeContainer[i][j][0].name = "G" + (j + 1).toString();
        } else if (i === 7) {
            cubeContainer[i][j][0].name = "H" + (j + 1).toString();
        }
        
        scene.add(cubeContainer[i][j][0]);
    }
}

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        cubeContainer[i][j][1] = new THREE.LineSegments(edge, new THREE.LineBasicMaterial({color: 0x000000}));
        cubeContainer[i][j][1].position.set(-3.5 + i, 0, 3.5 - j);

        if (i == 0) {
            cubeContainer[i][j][1].name = "A" + (j + 1).toString() + "Edge";
        } else if (i === 1) {
            cubeContainer[i][j][1].name = "B" + (j + 1).toString() + "Edge";
        } else if (i === 2) {
            cubeContainer[i][j][1].name = "C" + (j + 1).toString() + "Edge";
        } else if (i === 3) {
            cubeContainer[i][j][1].name = "D" + (j + 1).toString() + "Edge";
        } else if (i === 4) {
            cubeContainer[i][j][1].name = "E" + (j + 1).toString() + "Edge";
        } else if (i === 5) {
            cubeContainer[i][j][1].name = "F" + (j + 1).toString() + "Edge";
        } else if (i === 6) {
            cubeContainer[i][j][1].name = "G" + (j + 1).toString() + "Edge";
        } else if (i === 7) {
            cubeContainer[i][j][1].name = "H" + (j + 1).toString() + "Edge";
        }
        
        scene.add(cubeContainer[i][j][1]);
    }
}

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        cubeContainer[i][j][1].position.y = (2 * valueContainer[activeProfileNum][activeDataTypeNum][i][j] - cubeContainer[i][j][1].geometry.parameters.geometry.parameters.height * valueContainer[activeProfileNum][activeDataTypeNum][i][j]) / 2;
        cubeContainer[i][j][1].scale.y = valueContainer[activeProfileNum][activeDataTypeNum][i][j];

        if (valueContainer[activeProfileNum][activeDataTypeNum][i][j] >= 0.4 && valueContainer[activeProfileNum][activeDataTypeNum][i][j] < 0.8) {
            cubeContainer[i][j][0].material.color.set(0xa0a0a0);
            cubeContainer[i][j][0].userData.color = 0.6275;
        } else if (valueContainer[activeProfileNum][activeDataTypeNum][i][j] >= 0.8 && valueContainer[activeProfileNum][activeDataTypeNum][i][j] < 1.2) {
            cubeContainer[i][j][0].material.color.set(0x666666);
            cubeContainer[i][j][0].userData.color = 0.4;
        } else if (valueContainer[activeProfileNum][activeDataTypeNum][i][j] >= 1.2 && valueContainer[activeProfileNum][activeDataTypeNum][i][j] < 1.6) {
            cubeContainer[i][j][0].material.color.set(0x333333);
            cubeContainer[i][j][0].userData.color = 0.2;
        } else if (valueContainer[activeProfileNum][activeDataTypeNum][i][j] >= 1.6 && valueContainer[activeProfileNum][activeDataTypeNum][i][j] < 2) {
            cubeContainer[i][j][0].material.color.set(0x1a1a1a);
            cubeContainer[i][j][0].userData.color = 0.102;
        } else if (valueContainer[activeProfileNum][activeDataTypeNum][i][j] >= 2) {
            cubeContainer[i][j][0].material.color.set(0x000000);
            cubeContainer[i][j][0].userData.color = 0;
        }
        
        cubeContainer[i][j][0].scale.y = valueContainer[activeProfileNum][activeDataTypeNum][i][j];
        cubeContainer[i][j][0].position.y = (2 * valueContainer[activeProfileNum][activeDataTypeNum][i][j] - cubeContainer[i][j][0].geometry.parameters.height * valueContainer[activeProfileNum][activeDataTypeNum][i][j]) / 2;
    }
}

const textureSquareUtilization = new THREE.TextureLoader().load('./SquareUtilization.png');
const materialSquareUtilization = new THREE.MeshLambertMaterial({map: textureSquareUtilization, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true, opacity: 0});
const planeSquareUtilization = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), materialSquareUtilization);
planeSquareUtilization.position.set(5.5, 0.001, 5.5);
planeSquareUtilization.rotateX(-Math.PI / 2);
planeSquareUtilization.name = "Annotation";
planeSquareUtilization.userData = {Annotation_type: "Square_Utilization"};
scene.add(planeSquareUtilization);

var heatMapLegend = new Array(7);

for (var i = 0; i < 7; i++) {
    heatMapLegend[i] = new Array(3);
}

for (var i = 0; i < 7; i++) {
    heatMapLegend[i][0] = new THREE.Mesh(cube, new THREE.MeshStandardMaterial({color: 0xFFFFFF, flatShading: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1}));
    heatMapLegend[i][0].castShadow = true;
    heatMapLegend[i][0].receiveShadow = true;
    heatMapLegend[i][0].position.set(6.5, 0.5, 2.5 - i);
    heatMapLegend[i][0].userData = {color5: "", color6: ""};
    scene.add(heatMapLegend[i][0]);

    heatMapLegend[i][1] = new THREE.LineSegments(edge, new THREE.LineBasicMaterial({color: 0x000000}));
    heatMapLegend[i][1].position.set(6.5, 0.5, 2.5 - i);

    scene.add(heatMapLegend[i][1])

    if (i == 6) {
        scene.remove(heatMapLegend[i][0]);
        scene.remove(heatMapLegend[i][1]);
    }

    var textureFileRulerRightNumber = new THREE.TextureLoader().load('LeftRuler' + i.toString() + '.png');
    var materialFileRulerRightNumber = new THREE.MeshLambertMaterial({map: textureFileRulerRightNumber, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});

    heatMapLegend[i][2] = new THREE.Mesh(planeGeometry, materialFileRulerRightNumber);
    heatMapLegend[i][2].position.set(7.5, 0.001, 3 - i);
    heatMapLegend[i][2].rotateX(- Math.PI / 2);
    heatMapLegend[i][2].rotateZ(Math.PI / 2);
    heatMapLegend[i][2].scale.set(0.75, 0.75, 1);
    scene.add(heatMapLegend[i][2]);
}

for (var i = 0; i < 6; i++) {
    heatMapLegend[i][0].scale.y = 0.2 + i * 0.3;
    heatMapLegend[i][0].position.y = (2 * heatMapLegend[i][0].scale.y - heatMapLegend[i][0].geometry.parameters.height * heatMapLegend[i][0].scale.y) / 2;
    
    heatMapLegend[i][1].scale.y = 0.2 + i * 0.3;
    heatMapLegend[i][1].position.y = (2 * heatMapLegend[i][1].scale.y - heatMapLegend[i][1].geometry.parameters.geometry.parameters.height * heatMapLegend[i][1].scale.y) / 2;
}

heatMapLegend[0][0].userData.color5 = 0xFFFFFF;
heatMapLegend[1][0].userData.color5 = 0xa0a0a0;
heatMapLegend[2][0].userData.color5 = 0x666666;
heatMapLegend[3][0].userData.color5 = 0x333333;
heatMapLegend[4][0].userData.color5 = 0x1A1A1A;
heatMapLegend[5][0].userData.color5 = 0x000000;

for (var i = 0; i < 6; i++) {
    heatMapLegend[i][0].material.color.set(heatMapLegend[i][0].userData.color5);
}

// 
// Bar Chart Left
// 

var barLeftContainerValue = 
    [
        [
            [0.6, 0.6, 1.7, 2.7, 2.6, 2.0, 0.7, 0.6],
            [0.1, 0.2, 0.7, 1.6, 3.0, 2.9, 1.0, 1.3],
            [1.6, 1.3, 3.1, 2.9, 2.2, 1.0, 0.3, 0.1]
        ],
        [
            [0.6, 0.6, 1.8, 2.3, 2.3, 1.6, 0.4, 0.5],
            [0.3, 0.1, 0.8, 1.3, 3.0, 2.8, 0.9, 0.8],
            [1.0, 1.2, 2.9, 2.6, 1.0, 0.3, 0.1, 0.3]
        ],
        [
            [0.5, 0.7, 1.8, 2.4, 2.4, 1.6, 0.6, 0.5],
            [0.1, 0.1, 0.8, 1.4, 2.8, 3.1, 1.2, 0.8],
            [1.0, 1.4, 3.1, 2.6, 1.9, 0.2, 0.1, 0.2]
        ]
    ];
var barLeftContainerValueMax = barLeftContainerValue[activeProfileNum][activeDataTypeNum].reduce((a, b) => Math.max(a, b), -Infinity);
var barLeftContainer = new Array(8);

var barLeftWinRate = 
    [
        [
            [70.1,71.0,56.1,72.5,70.8,60.6,64.2,66.9],
            [65.7,61.4,73.8,75.5,61.4,61.1,62.6,67.6],
            [65.4,66.2,73.8,72.5,68.2,74.5,64.3,68.5]
        ],
        [
            [63.3,63.0,58.4,61.9,60.7,61.0,58.4,62.4],
            [56.1,56.1,57.5,60.4,58.1,58.4,60.6,58.1],
            [57.7,57.8,58.4,60.1,66.6,57.3,62.0,55.7]
        ],
        [
            [52.4,57.2,58.9,62.7,61.4,61.6,59.7,60.8],
            [56.1,54.2,57.5,54.7,57.8,58.9,57.5,46.6],
            [48.5,52.5,55.1,57.3,53.0,47.9,45.3,44.3]
        ]
    ];

for (var i = 0; i < 8; i++) {
    barLeftContainer[i] = new Array(2);
}

for (var i = 0; i < 8; i++) {
    barLeftContainer[i][0] = new THREE.Mesh(cube, new THREE.MeshStandardMaterial({color: 0xFFFFFF, flatShading: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1}));
    barLeftContainer[i][0].castShadow = true;
    barLeftContainer[i][0].receiveShadow = true;
    barLeftContainer[i][0].position.set(-5.5, 0, 3.5 - i);
    barLeftContainer[i][0].scale.x = 0.25;
    barLeftContainer[i][0].userData = {internalValue: barLeftContainerValue[activeProfileNum][activeDataTypeNum][i], internalSquare: "Rank", winRate: barLeftWinRate[activeProfileNum][activeDataTypeNum][i]};
    barLeftContainer[i][0].name = "barChart";

    scene.add(barLeftContainer[i][0]);

    barLeftContainer[i][1] = new THREE.LineSegments(edge, new THREE.LineBasicMaterial({color: 0x000000}));
    barLeftContainer[i][1].position.set(-5.5, 0, 3.5 - i);
    barLeftContainer[i][1].scale.x = 0.25;

    scene.add(barLeftContainer[i][1])
}

for (var i = 0; i < 8; i++) {
    if (i == 0) {
        barLeftContainer[i][0].userData.internalSquare = "1st Rank: ";
    } else if (i == 1) {
        barLeftContainer[i][0].userData.internalSquare = "2nd Rank: ";
    } else if (i == 2) {
        barLeftContainer[i][0].userData.internalSquare = "3rd Rank: ";
    } else if (i == 3) {
        barLeftContainer[i][0].userData.internalSquare = "4th Rank: ";
    } else if (i == 4) {
        barLeftContainer[i][0].userData.internalSquare = "5th Rank: ";
    } else if (i == 5) {
        barLeftContainer[i][0].userData.internalSquare = "6th Rank: ";
    } else if (i == 6) {
        barLeftContainer[i][0].userData.internalSquare = "7th Rank: ";
    } else if (i == 7) {
        barLeftContainer[i][0].userData.internalSquare = "8th Rank: ";
    }
}

for (var i = 0; i < 8; i++) {
    var newPosY = (2 * barLeftContainerValue[activeProfileNum][activeDataTypeNum][i] - barLeftContainer[i][0].geometry.parameters.height * barLeftContainerValue[activeProfileNum][activeDataTypeNum][i]) / 2;
    var newScaleY = barLeftContainerValue[activeProfileNum][activeDataTypeNum][i];
    var constantScaling = 2.5;

    barLeftContainer[i][0].position.y = newPosY * constantScaling;
    barLeftContainer[i][0].scale.y = newScaleY * constantScaling;

    barLeftContainer[i][1].position.y = newPosY * constantScaling;
    barLeftContainer[i][1].scale.y = newScaleY * constantScaling;

    if (barLeftContainerValue[activeProfileNum][activeDataTypeNum][i] == barLeftContainerValueMax) {
        barLeftContainer[i][0].material.color.set(0xffb700);
    }
}

// 
// Bar Chart Left Ruler
// 

var pointsRulerLeft = [];
pointsRulerLeft.push(new THREE.Vector3(-5.375, 0, 4.25));
pointsRulerLeft.push(new THREE.Vector3(-5.375, 7.5, 4.25));

const lineRulerLeftGeometry = new THREE.BufferGeometry().setFromPoints(pointsRulerLeft);
const lineMaterial = new THREE.LineBasicMaterial({color: 0x000000});

const lineRulerLeft = new THREE.Line(lineRulerLeftGeometry, lineMaterial);
scene.add(lineRulerLeft);

var lineRulerLeftNumberContainer = new Array(8);

for (var i = 0; i < 8; i++) {
    const textureFileRulerLeftNumber = new THREE.TextureLoader().load('./LeftRuler' + i.toString() + '.png');
    const materialFileRulerLeftNumber = new THREE.MeshLambertMaterial({map: textureFileRulerLeftNumber, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
    lineRulerLeftNumberContainer[i] = new THREE.Mesh(planeGeometry, materialFileRulerLeftNumber);
    lineRulerLeftNumberContainer[i].position.set(-5.375, 0.275 + i, 4.75);
    lineRulerLeftNumberContainer[i].rotateY(Math.PI / 2);
    scene.add(lineRulerLeftNumberContainer[i]);
}

var lineRulerLeftDashContainer = new Array(7);

const lineDashMaterial = new THREE.LineDashedMaterial({color: 0x000000, dashSize: 0.125, gapSize: 0.05});

for (var i = 0; i < 7; i++) {
    var pointsDash = [];
    pointsDash.push(new THREE.Vector3(-5.375, 1 + i, 4.25));
    pointsDash.push(new THREE.Vector3(-5.375, 1 + i, -4.25));

    const lineDashGeometry = new THREE.BufferGeometry().setFromPoints(pointsDash);

    lineRulerLeftDashContainer[i] = new THREE.Line(lineDashGeometry, lineDashMaterial);
    lineRulerLeftDashContainer[i].computeLineDistances();
    
    scene.add(lineRulerLeftDashContainer[i]);
}

const texturePieceCapture = new THREE.TextureLoader().load('./PieceCapture.png');
const materialPieceCapture = new THREE.MeshLambertMaterial({map: texturePieceCapture, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true, opacity: 0});
const planePieceCapture = new THREE.Mesh(new THREE.PlaneGeometry(4, 1), materialPieceCapture);
planePieceCapture.position.set(-5.385, 0.275, 7);
planePieceCapture.scale.set(1.25, 1.25, 1.25);
planePieceCapture.rotateY(Math.PI / 2);
planePieceCapture.name = "Annotation";
planePieceCapture.userData = {Annotation_type: "Piece_Capture"};
scene.add(planePieceCapture);

// 
// Bar Chart Right
// 

var barRightContainerValue = 
    [
        [
            [0.3, 0.6, 1.4, 2.0, 1.7, 1.5, 0.8, 0.2],
            [0.2, 0.5, 1.4, 2.1, 1.7, 1.5, 0.8, 0.3],
            [0.3, 0.7, 1.4, 1.9, 1.6, 1.4, 0.8, 0.2]
        ],
        [
            [0.3, 0.6, 1.2, 1.8, 1.5, 1.3, 0.6, 0.2],
            [0.3, 0.5, 1.1, 1.9, 1.6, 1.3, 0.7, 0.2],
            [0.3, 0.6, 1.4, 1.8, 1.4, 1.2, 0.6, 0.1]
        ],
        [
            [0.3, 0.6, 1.5, 2.0, 1.6, 1.3, 0.6, 0.2],
            [0.3, 0.6, 1.6, 2.1, 1.6, 1.3, 0.7, 0.2],
            [0.3, 0.7, 1.5, 1.9, 1.5, 1.2, 0.5, 0.2]
        ]
    ];
var barRightContainerValueMax = barRightContainerValue[activeProfileNum][activeDataTypeNum].reduce((a, b) => Math.max(a, b), -Infinity);
var barRightContainer = new Array(8);

var barRightWinningRate = 
    [
        [
            [62.4,65.9,59.0,75.3,67.1,60.7,66.2,75.3],
            [64.9,58.3,56.3,74.9,65.5,59.7,56.6,71.1],
            [51.2,54.2,62.8,76.6,69.5,62.3,55.3,56.6]
        ],
        [
            [59.6,54.3,57.0,66.3,65.1,57.4,54.3,56.3],
            [59.5,47.8,53.0,65.5,65.9,57.1,46.8,55.5],
            [51.0,52.2,53.7,57.8,64.6,58.3,52.0,57.8]
        ],
        [
            [47.7,43.2,53.1,66.9,63.2,55.0,43.2,46.9],
            [52.2,54.3,50.8,66.6,60.9,54.2,54.1,56.6],
            [43.4,43.2,55.8,57.1,65.9,56.0,42.6,47.1]
        ]
    ];

for (var i = 0; i < 8; i++) {
    barRightContainer[i] = new Array(2);
}

for (var i = 0; i < 8; i++) {
    barRightContainer[i][0] = new THREE.Mesh(cube, new THREE.MeshStandardMaterial({color: 0xFFFFFF, flatShading: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1}));
    barRightContainer[i][0].castShadow = true;
    barRightContainer[i][0].receiveShadow = true;
    barRightContainer[i][0].position.set(-3.5 + i, 0, -5.5);
    barRightContainer[i][0].scale.z = 0.25;
    barRightContainer[i][0].userData = {internalValue: barRightContainerValue[activeProfileNum][activeDataTypeNum][i], internalSquare: "File", winRate: barRightWinningRate[activeProfileNum][activeDataTypeNum][i]};
    barRightContainer[i][0].name = "barChart";

    scene.add(barRightContainer[i][0]);

    barRightContainer[i][1] = new THREE.LineSegments(edge, new THREE.LineBasicMaterial({color: 0x000000}));
    barRightContainer[i][1].position.set(-3.5 + i, 0, -5.5);
    barRightContainer[i][1].scale.z = 0.25;

    scene.add(barRightContainer[i][1])
}

for (var i = 0; i < 8; i++) {
    if (i == 0) {
        barRightContainer[i][0].userData.internalSquare = "A File: ";
    } else if (i == 1) {
        barRightContainer[i][0].userData.internalSquare = "B File: ";
    } else if (i == 2) {
        barRightContainer[i][0].userData.internalSquare = "C File: ";
    } else if (i == 3) {
        barRightContainer[i][0].userData.internalSquare = "D File: ";
    } else if (i == 4) {
        barRightContainer[i][0].userData.internalSquare = "E File: ";
    } else if (i == 5) {
        barRightContainer[i][0].userData.internalSquare = "F File: ";
    } else if (i == 6) {
        barRightContainer[i][0].userData.internalSquare = "G File: ";
    } else if (i == 7) {
        barRightContainer[i][0].userData.internalSquare = "H File: ";
    }
}

for (var i = 0; i < 8; i++) {
    var newPosY = (2 * barRightContainerValue[activeProfileNum][activeDataTypeNum][i] - barRightContainer[i][0].geometry.parameters.height * barRightContainerValue[activeProfileNum][activeDataTypeNum][i]) / 2;
    var newScaleY = barRightContainerValue[activeProfileNum][activeDataTypeNum][i];
    var constantScaling = 3.325;

    barRightContainer[i][0].position.y = newPosY * constantScaling;
    barRightContainer[i][0].scale.y =  newScaleY * constantScaling;

    barRightContainer[i][1].position.y = newPosY * constantScaling;
    barRightContainer[i][1].scale.y = newScaleY * constantScaling;

    if (barRightContainerValue[activeProfileNum][activeDataTypeNum][i] == barRightContainerValueMax) {
        barRightContainer[i][0].material.color.set(0xffb700);
    }
}

// 
// Bar Chart Right Ruler
// 

var pointsRightRuler = [];
pointsRightRuler.push(new THREE.Vector3(4.25, 0, -5.375));
pointsRightRuler.push(new THREE.Vector3(4.25, 7.5, -5.375));

const lineRightRulerGeometry = new THREE.BufferGeometry().setFromPoints(pointsRightRuler);

const lineRulerRight = new THREE.Line(lineRightRulerGeometry, lineMaterial);
scene.add(lineRulerRight);

var lineRulerRightNumberContainer = new Array(8);

for (var i = 0; i < 8; i++) {
    const textureFileRulerRightNumber = new THREE.TextureLoader().load('./RightRuler' + i.toString() + '.png');
    const materialFileRulerRightNumber = new THREE.MeshLambertMaterial({map: textureFileRulerRightNumber, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true});
    lineRulerRightNumberContainer[i] = new THREE.Mesh(planeGeometry, materialFileRulerRightNumber);
    lineRulerRightNumberContainer[i].position.set(4.75, 0.275 + i, -5.375);
    scene.add(lineRulerRightNumberContainer[i]);
}

var lineRulerRightDashContainer = new Array(7);

for (var i = 0; i < 7; i++) {
    var pointsDash = [];
    pointsDash.push(new THREE.Vector3(-4.25, 1 + i, -5.375));
    pointsDash.push(new THREE.Vector3(4.25, 1 + i, -5.375));

    const lineDashGeometry = new THREE.BufferGeometry().setFromPoints(pointsDash);

    lineRulerRightDashContainer[i] = new THREE.Line(lineDashGeometry, lineDashMaterial);
    lineRulerRightDashContainer[i].computeLineDistances();
    
    scene.add(lineRulerRightDashContainer[i]);
}

const textureRookPlacement = new THREE.TextureLoader().load('./RookPlacement.png');
const materialRookPlacement = new THREE.MeshLambertMaterial({map: textureRookPlacement, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true, opacity: 0});
const planeRookPlacement = new THREE.Mesh(new THREE.PlaneGeometry(4, 1), materialRookPlacement);
planeRookPlacement.position.set(7.25, 0.275, -5.385);
planeRookPlacement.scale.set(1.25, 1.25, 1.25);
planeRookPlacement.name = "Annotation";
planeRookPlacement.userData = {Annotation_type: "Rook_Placement"};
scene.add(planeRookPlacement);

// 
// Piece Activity
// 

var compositionDictionary = [
    [
        {
        "A1": [0.1, 1.2, 22.0, 48.0, 8.4, 20.3],
        "A2": [0.4, 3.1, 30.2, 41.4, 10.0, 14.9],
        "A3": [4.5, 7.2, 36.1, 29.0, 18.6, 4.5],
        "A4": [9.1, 10.1, 33.1, 24.3, 20.4, 3.0],
        "A5": [11.2, 12.3, 35.6, 18.7, 18.9, 3.4],
        "A6": [5.9, 9.8, 31.3, 28.1, 22.3, 2.6],
        "A7": [0.6, 2.8, 35.1, 40.1, 13.0, 8.3],
        "A8": [0.4, 1.2, 23.7, 39.7, 11.3, 23.7],

        "B1": [0.4, 3.1, 27.4, 31.2, 8.5, 29.3],
        "B2": [1.8, 7.2, 36.3, 34.2, 13.1, 7.5],
        "B3": [10.2, 16.7, 31.0, 18.1, 17.4, 6.5],
        "B4": [15.4, 17.8, 35.7, 11.7, 16.8, 2.4],
        "B5": [19.0, 23.4, 29.8, 9.5, 15.7, 2.5],
        "B6": [7.9, 17.1, 28.5, 23.8, 16.5, 6.1],
        "B7": [2.6, 10.9, 38.4, 23.3, 13.5, 11.3],
        "B8": [0.7, 3.4, 26.4, 29.9, 9.2, 30.4],

        "C1": [1.3, 6.1, 21.2, 44.7, 16.2, 10.6],
        "C2": [1.9, 12.8, 30.9, 31.9, 15.9, 6.6],
        "C3": [15.6, 30.8, 19.8, 9.9, 21.1, 2.8],
        "C4": [29.9, 34.7, 9.5, 6.7, 17.4, 1.8],
        "C5": [24.7, 27.4, 18.8, 8.5, 20.0, 0.6],
        "C6": [13.7, 27.6, 19.8, 14.5, 21.3, 3.0],
        "C7": [2.1, 15.0, 27.0, 32.3, 12.0, 11.5],
        "C8": [1.6, 8.7, 19.1, 43.4, 14.2, 13.0],

        "D1": [2.3, 8.3, 24.4, 34.9, 18.2, 11.9],
        "D2": [4.3, 19.9, 26.3, 25.1, 18.5, 5.9],
        "D3": [11.8, 19.3, 26.3, 19.7, 21.2, 1.8],
        "D4": [35.2, 25.3, 9.2, 4.4, 25.3, 0.6],
        "D5": [34.1, 25.3, 7.2, 8.1, 24.7, 0.7],
        "D6": [12.4, 20.4, 23.6, 19.2, 21.9, 2.5],
        "D7": [5.1, 20.0, 27.6, 22.2, 22.4, 2.7],
        "D8": [1.4, 6.3, 20.5, 42.4, 16.5, 12.9],

        "E1": [1.2, 6.1, 18.1, 43.7, 12.8, 18.1],
        "E2": [3.8, 18.0, 25.6, 27.9, 17.4, 7.3],
        "E3": [15.3, 25.3, 17.6, 18.8, 19.4, 3.6],
        "E4": [27.1, 21.7, 14.0, 11.7, 24.9, 0.5],
        "E5": [33.0, 24.7, 11.5, 7.4, 23.0, 0.2],
        "E6": [14.3, 23.6, 19.2, 19.4, 21.8, 1.7],
        "E7": [4.5, 17.1, 23.0, 28.0, 21.2, 6.2],
        "E8": [1.2, 5.4, 18.7, 46.0, 15.3, 13.4],

        "F1": [0.5, 9.4, 19.4, 38.5, 18.6, 13.5],
        "F2": [0.4, 12.2, 25.5, 35.1, 11.4, 15.4],
        "F3": [7.6, 44.7, 11.4, 9.7, 24.4, 2.2],
        "F4": [8.3, 32.4, 22.5, 13.7, 19.5, 3.6],
        "F5": [6.9, 30.5, 26.8, 13.8, 20.0, 1.9],
        "F6": [7.8, 39.6, 11.8, 11.0, 29.0, 0.8],
        "F7": [0.4, 11.6, 27.1, 32.4, 12.3, 16.3],
        "F8": [0.7, 11.0, 15.8, 43.7, 19.4, 9.4],

        "G1": [1.3, 6.1, 24.1, 34.2, 14.0, 20.3],
        "G2": [1.7, 10.2, 36.3, 26.9, 13.0, 11.8],
        "G3": [7.0, 20.2, 32.6, 18.0, 14.1, 8.0],
        "G4": [13.1, 19.9, 36.3, 10.1, 13.6, 6.9],
        "G5": [14.7, 21.1, 28.2, 14.1, 15.0, 7.0],
        "G6": [6.9, 16.3, 32.2, 18.1, 16.5, 10.0],
        "G7": [1.5, 10.9, 36.9, 20.8, 12.1, 17.7],
        "G8": [1.1, 5.5, 20.8, 35.4, 14.1, 23.0],

        "H1": [0.5, 1.2, 21.9, 20.9, 5.5, 50.0],
        "H2": [1.2, 2.9, 34.0, 24.8, 8.9, 28.2],
        "H3": [7.4, 9.4, 46.4, 14.4, 11.9, 10.4],
        "H4": [12.8, 10.5, 44.7, 12.5, 13.1, 6.5],
        "H5": [8.8, 8.3, 43.8, 17.4, 14.0, 7.6],
        "H6": [8.3, 9.7, 45.8, 14.5, 12.6, 9.1],
        "H7": [0.7, 3.1, 36.8, 24.8, 8.0, 26.8],
        "H8": [0.2, 1.2, 17.9, 23.3, 3.9, 53.5]
        },
        {
        "A1": [0.0, 1.4, 28.1, 43.2, 5.9, 21.4],
        "A2": [0.0, 2.1, 38.2, 42.3, 6.9, 10.5],
        "A3": [3.7, 7.1, 35.3, 35.1, 15.0, 3.8],
        "A4": [9.8, 11.9, 36.0, 24.2, 16.4, 1.8],
        "A5": [4.3, 8.1, 47.5, 24.5, 10.5, 5.0],
        "A6": [2.2, 4.9, 47.9, 31.3, 10.1, 3.6],
        "A7": [2.1, 3.5, 39.3, 43.6, 7.0, 4.5],
        "A8": [0.4, 0.7, 21.9, 62.2, 9.9, 5.0],

        "B1": [0.0, 4.3, 29.8, 44.5, 8.5, 12.9],
        "B2": [0.0, 7.8, 39.8, 29.1, 6.6, 16.7],
        "B3": [10.1, 20.2, 24.6, 25.6, 16.0, 3.4],
        "B4": [12.1, 14.8, 35.3, 22.5, 12.3, 2.9],
        "B5": [12.9, 16.5, 43.0, 11.2, 13.3, 3.1],
        "B6": [5.5, 8.4, 54.8, 20.0, 8.8, 2.6],
        "B7": [2.1, 5.0, 32.5, 49.0, 7.0, 4.4],
        "B8": [0.2, 1.0, 28.5, 53.0, 9.6, 7.6],

        "C1": [0.0, 16.7, 22.9, 34.3, 11.4, 14.8],
        "C2": [0.0, 18.0, 23.7, 39.7, 12.3, 6.3],
        "C3": [20.1, 38.5, 10.5, 7.6, 22.5, 0.9],
        "C4": [28.9, 36.3, 10.7, 5.1, 17.5, 1.5],
        "C5": [9.5, 21.2, 41.3, 13.3, 11.2, 3.6],
        "C6": [6.9, 17.5, 42.1, 19.6, 10.0, 3.9],
        "C7": [2.3, 6.9, 29.3, 50.5, 7.3, 3.8],
        "C8": [0.9, 2.5, 27.6, 48.0, 9.2, 11.8],

        "D1": [0.0, 17.5, 21.3, 36.8, 17.8, 6.6],
        "D2": [0.0, 27.4, 13.9, 33.2, 22.5, 2.9],
        "D3": [19.9, 31.3, 14.7, 13.9, 18.5, 1.7],
        "D4": [38.1, 27.4, 4.4, 2.6, 27.4, 0.2],
        "D5": [22.7, 24.2, 19.5, 13.0, 19.4, 1.2],
        "D6": [9.2, 17.3, 35.9, 24.8, 10.6, 2.2],
        "D7": [4.6, 5.6, 28.0, 50.4, 10.3, 1.3],
        "D8": [1.5, 1.8, 21.0, 59.2, 14.0, 2.4],

        "E1": [0.0, 10.3, 17.9, 51.0, 12.9, 7.9],
        "E2": [0.0, 22.3, 24.7, 28.5, 22.0, 2.5],
        "E3": [18.1, 26.8, 17.2, 13.6, 22.7, 1.5],
        "E4": [32.8, 27.3, 9.9, 6.7, 22.5, 0.8],
        "E5": [24.8, 29.4, 17.3, 10.3, 16.6, 1.6],
        "E6": [7.7, 11.2, 41.7, 25.7, 12.1, 1.7],
        "E7": [3.9, 5.7, 26.9, 51.9, 7.7, 3.8],
        "E8": [0.6, 1.7, 25.4, 57.4, 11.0, 3.9],

        "F1": [0.0, 22.0, 19.1, 31.7, 23.4, 3.7],
        "F2": [0.0, 19.5, 28.6, 26.7, 10.3, 14.9],
        "F3": [9.3, 45.4, 5.4, 3.8, 35.7, 0.4],
        "F4": [7.1, 32.5, 21.9, 17.8, 17.7, 3.0],
        "F5": [4.6, 26.4, 38.2, 14.4, 12.5, 3.9],
        "F6": [2.9, 18.4, 44.7, 18.4, 10.8, 4.8],
        "F7": [1.0, 5.2, 32.7, 49.3, 9.8, 2.0],
        "F8": [0.2, 1.4, 20.3, 62.5, 10.8, 4.9],

        "G1": [0.0, 13.5, 25.0, 34.1, 13.7 ,13.7],
        "G2": [0.0, 11.2, 32.7, 36.4, 12.5, 7.1],
        "G3": [9.2, 23.3, 31.4, 16.1, 15.6, 4.4],
        "G4": [11.9, 19.1, 29.1, 22.2, 11.8, 6.0],
        "G5": [9.6, 18.5, 44.1, 12.5, 11.7, 3.6],
        "G6": [4.3, 9.2, 49.5, 19.5, 11.7, 10.5],
        "G7": [1.2, 3.3, 42.2, 42.3, 7.3, 3.7],
        "G8": [0.4, 0.7, 27.9, 46.5, 8.2, 16.3],

        "H1": [0.0, 1.9, 26.1, 35.6, 4.7, 31.7],
        "H2": [0.0, 4.7, 41.5, 25.4, 6.1, 22.3],
        "H3": [8.9, 13.9, 39.0, 19.2, 9.9, 9.0],
        "H4": [13.1, 11.0, 45.5, 14.9, 11.4, 4.2],
        "H5": [5.5, 7.5, 54.6, 18.1, 7.9, 6.4],
        "H6": [5.1, 5.0, 54.5, 21.2, 7.1, 7.1],
        "H7": [1.3, 2.6, 44.5, 39.9, 5.0, 6.7],
        "H8": [0.7, 0.6, 26.3, 52.9, 7.4, 12.0]
        },
        {
        "A1": [0.3, 0.6, 22.9, 65.4, 9.0, 1.8],
        "A2": [1.4, 1.7, 32.9, 54.0, 8.4, 1.5],
        "A3": [2.2, 3.9, 47.3, 35.3, 7.9, 3.3],
        "A4": [4.0, 7.7, 47.8, 29.0, 8.9, 2.6],
        "A5": [11.8, 12.9, 26.2, 31.0, 14.4, 3.7],
        "A6": [6.6, 12.4, 26.9, 32.5, 19.3, 2.3],
        "A7": [0.0, 3.6, 38.6, 33.4, 6.0, 18.4],
        "A8": [0.0, 2.0, 34.2, 49.1, 8.0, 6.7],

        "B1": [0.5, 0.9, 24.0, 62.0, 7.5, 5.1],
        "B2": [1.1, 2.1, 39.6, 45.7, 9.0, 2.6],
        "B3": [4.6, 6.6, 52.5, 24.2, 8.3, 3.8],
        "B4": [12.6, 19.0, 37.4, 17.5, 10.9, 2.6],
        "B5": [13.1, 17.6, 34.2, 20.9, 11.4, 2.8],
        "B6": [9.7, 20.8, 31.6, 17.5, 15.2, 5.2],
        "B7": [0.0, 12.4, 39.9, 28.0, 11.2, 8.4],
        "B8": [0.0, 4.8, 33.5, 39.4, 8.7, 13.6],

        "C1": [0.7, 2.5, 20.8, 61.8, 7.2, 7.0],
        "C2": [3.2, 4.5, 38.2, 42.8, 8.5, 2.7],
        "C3": [11.6, 21.8, 36.6, 18.2, 8.4, 3.4],
        "C4": [14.0, 26.7, 34.9, 11.5, 9.7, 3.2],
        "C5": [28.6, 32.9, 12.9, 8.0, 16.6, 0.9],
        "C6": [21.5, 39.1, 9.5, 7.3, 21.3, 1.4],
        "C7": [0.0, 17.3, 32.5, 29.8, 9.9, 10.4],
        "C8": [0.0, 19.0, 24.0, 29.0, 14.0, 14.1],
        
        "D1": [1.3, 1.6, 22.7, 61.8, 10.8, 1.8],
        "D2": [2.2, 3.1, 37.6, 45.3, 10.4, 1.5],
        "D3": [5.4, 10.6, 46.9, 25.7, 8.8, 2.6],
        "D4": [24.1, 28.9, 22.4, 10.1, 13.4, 1.1],
        "D5": [35.8, 28.7, 5.4, 8.8, 20.3, 1.0],
        "D6": [15.0, 23.0, 17.6, 22.6, 20.5, 1.3],
        "D7": [0.0, 28.0, 17.1, 25.1, 27.8, 2.1],
        "D8": [0.0, 10.9, 24.8, 41.3, 17.2, 5.8],
        
        "E1": [1.2, 1.9, 24.3, 59.9, 8.0, 4.7],
        "E2": [1.5, 2.9, 30.7, 53.9, 7.6, 3.4],
        "E3": [5.6, 12.1, 45.6, 25.6, 6.5, 4.6],
        "E4": [19.7, 23.6, 25.8, 15.7, 13.4, 1.8],
        "E5": [31.7, 28.1, 14.0, 7.9, 17.3, 1.0],
        "E6": [21.1, 32.1, 8.4, 15.4, 21.3, 1.7],
        "E7": [0.0, 31.2, 18.3, 20.9, 27.7, 2.0],
        "E8": [0.0, 10.9, 22.0, 46.2, 14.6, 6.3],
        
        "F1": [0.2, 1.5, 22.4, 61.0, 8.1, 6.8],
        "F2": [0.6, 3.8, 43.7, 38.8, 6.9, 6.3],
        "F3": [2.4, 17.3, 44.3, 22.5, 6.6, 6.9],
        "F4": [2.8, 17.9, 48.3, 17.5, 9.7, 3.8],
        "F5": [8.8, 38.5, 18.3, 15.6, 14.4, 4.4],
        "F6": [9.2, 43.7, 1.7, 9.3, 35.4, 0.7],
        "F7": [0.0, 19.7, 33.9, 28.3, 10.0, 8.1],
        "F8": [0.0, 22.6, 20.6, 24.5, 27.2, 5.1],
        
        "G1": [0.9, 1.0, 30.9, 40.1, 5.6, 21.5],
        "G2": [2.3, 2.8, 47.8, 31.6, 6.0, 9.6],
        "G3": [3.3, 7.8, 50.0, 22.2, 4.5, 12.2],
        "G4": [5.5, 14.8, 46.2, 19.0, 7.8, 6.8],
        "G5": [8.9, 18.9, 34.4, 18.7, 7.7, 11.3],
        "G6": [10.0, 25.5, 26.4, 18.9, 15.3, 3.9],
        "G7": [0.0, 14.9, 35.7, 29.2, 13.8, 6.3],
        "G8": [0.0, 14.5, 24.9, 29.8, 17.2, 13.5],
        
        "H1": [0.7, 0.5, 28.0, 48.9, 6.6, 15.3],
        "H2": [2.0, 1.2, 40.0, 47.1, 5.9, 3.8],
        "H3": [1.4, 3.4, 52.5, 24.5, 4.5, 13.6],
        "H4": [3.3, 6.5, 57.9, 18.2, 5.4, 8.6],
        "H5": [8.7, 10.7, 43.1, 18.8, 7.2, 11.5],
        "H6": [6.5, 10.4, 38.1, 24.0, 10.5, 10.4],
        "H7": [0.0, 4.9, 39.8, 21.9, 4.9, 28.5],
        "H8": [0.0, 1.7, 33.4, 39.4, 5.5, 20.1]
        }
    ],
    [
        {
            "A1": [0.4,1.3,24.8,47.1,11.9,14.5],
            "A2": [0.9,2.7,37.6,30.3,14.6,13.9],
            "A3": [4.9,7.2,33.8,27.4,21.9,4.8],
            "A4": [12.5,11.9,36.2,15.9,22.1,1.4],
            "A5": [10.1,12.0,38.3,17.7,19.7,2.2],
            "A6": [4.9,11.0,39.8,19.4,20.1,4.8],
            "A7": [0.5,3.2,32.9,33.9,10.9,18.6],
            "A8": [0.4,1.9,24.6,45.4,10.5,17.1],

            "B1": [0.7,2.3,20.1,41.6,12.9,22.4],
            "B2": [1.3,4.8,38.6,28.0,14.5,12.7],
            "B3": [8.2,15.9,37.9,14.7,20.6,2.7],
            "B4": [11.3,13.5,37.0,15.5,19.9,2.7],
            "B5": [13.6,14.9,30.6,16.7,22.9,1.3],
            "B6": [7.3,13.9,39.4,15.6,20.1,3.8],
            "B7": [1.6,10.4,36.2,23.7,12.2,15.9],
            "B8": [0.7,3.2,25.3,36.3,12.2,22.4],

            "C1": [0.8,6.1,23.6,41.5,16.8,11.2],
            "C2": [1.4,12.9,34.2,27.3,14.8,9.3],
            "C3": [16.8,30.6,14.1,12.5,22.9,3.0],
            "C4": [23.0,27.5,16.4,10.9,20.0,2.1],
            "C5": [24.5,29.2,13.0,11.7,19.4,2.1],
            "C6": [16.1,33.4,19.2,8.6,20.5,2.2],
            "C7": [2.0,12.8,31.7,27.4,16.5,9.6],
            "C8": [1.5,6.9,20.7,35.0,15.7,20.2],

            "D1": [2.2,6.9,20.2,43.1,21.0,6.6],
            "D2": [3.9,14.9,24.3,28.6,23.7,4.6],
            "D3": [16.1,23.0,24.9,12.9,20.8,2.3],
            "D4": [39.0,28.1,4.8,2.6,24.9,0.6],
            "D5": [35.5,26.8,9.0,3.8,24.8,0.1],
            "D6": [12.4,20.5,28.3,13.7,22.6,2.5],
            "D7": [6.0,19.9,24.3,20.5,24.5,4.8],
            "D8": [2.0,6.2,20.2,42.1,20.4,9.2],

            "E1": [1.1,5.7,18.3,45.2,15.3,14.4],
            "E2": [3.2,13.0,27.6,28.9,21.5,5.8],
            "E3": [14.0,22.2,20.8,18.0,21.8,3.2],
            "E4": [34.4,26.4,9.3,5.9,23.4,0.6],
            "E5": [25.6,22.3,15.4,11.7,24.2,0.8],
            "E6": [15.4,20.2,19.3,17.0,25.5,2.5],
            "E7": [4.6,18.1,19.8,29.3,22.0,6.1],
            "E8": [0.9,4.7,22.7,38.8,16.6,16.4],

            "F1": [0.6,7.7,18.2,38.4,22.6,12.6],
            "F2": [0.4,9.3,31.5,29.7,14.7,14.4],
            "F3": [5.0,29.0,17.6,16.8,30.0,1.7],
            "F4": [6.0,29.3,26.5,15.9,19.1,3.2],
            "F5": [6.2,23.0,31.0,14.1,23.4,2.3],
            "F6": [6.5,35.6,14.1,12.4,29.7,1.6],
            "F7": [0.4,9.2,25.5,34.2,14.0,16.8],
            "F8": [0.7,8.7,16.7,42.4,24.6,6.8],

            "G1": [1.1,5.9,21.9,39.9,15.0,16.2],
            "G2": [0.9,8.3,32.9,29.8,10.5,17.6],
            "G3": [7.4,19.7,36.5,14.7,14.4,7.2],
            "G4": [8.5,13.8,37.1,17.3,18.5,4.7],
            "G5": [11.0,14.9,35.0,16.4,20.5,2.2],
            "G6": [7.2,15.4,34.0,16.4,17.9,9.1],
            "G7": [1.3,10.5,34.9,21.7,11.8,19.8],
            "G8": [1.7,8.2,25.6,28.4,16.0,20.1],

            "H1": [0.2,1.0,16.8,29.8,5.4,46.9],
            "H2": [1.1,2.9,34.3,20.3,8.3,33.2],
            "H3": [5.9,7.1,42.3,21.6,17.5,5.6],
            "H4": [10.6,7.3,41.5,17.0,17.2,6.3],
            "H5": [9.9,8.0,44.2,14.9,14.7,8.3],
            "H6": [7.9,10.6,45.1,14.7,14.0,7.7],
            "H7": [1.6,3.3,41.7,20.4,10.6,22.4],
            "H8": [0.4,1.0,19.1,21.9,5.6,51.9]
        },
        {
            "A1": [0.0,1.8,32.3,45.3,5.6,15.0],
            "A2": [0.0,1.9,31.8,47.3,8.4,10.5],
            "A3": [5.4,10.3,40.8,27.0,13.9,2.6],
            "A4": [12.0,13.8,34.6,22.3,15.6,1.7],
            "A5": [5.7,7.5,49.8,23.4,10.2,3.4],
            "A6": [2.8,6.1,52.8,25.9,7.7,4.7],
            "A7": [1.4,2.3,40.5,45.4,8.3,2.1],
            "A8": [1.2,1.1,25.4,56.2,9.5,6.6],

            "B1": [0.0,7.0,31.7,43.4,7.6,10.2],
            "B2": [0.0,5.1,42.1,30.5,7.4,15.0],
            "B3": [13.7,24.2,19.5,22.4,16.3,3.8],
            "B4": [11.6,14.9,38.3,22.1,10.0,3.1],
            "B5": [14.5,20.1,32.4,18.4,13.3,1.5],
            "B6": [3.5,7.0,50.7,26.1,8.6,4.1],
            "B7": [3.2,5.2,40.0,42.4,6.9,2.3],
            "B8": [0.2,1.0,32.0,50.4,7.9,8.5],

            "C1": [0.0,15.8,23.2,42.4,10.6,8.0],
            "C2": [0.0,17.9,25.1,41.4,10.4,5.3],
            "C3": [21.3,40.7,8.7,8.1,19.6,1.5],
            "C4": [27.0,34.9,14.9,7.6,13.6,2.0],
            "C5": [11.3,20.4,36.9,18.5,9.9,3.0],
            "C6": [8.6,18.4,40.5,19.9,8.8,3.8],
            "C7": [3.3,7.3,37.4,41.5,7.1,3.4],
            "C8": [0.5,1.5,24.4,55.7,10.0,7.8],

            "D1": [0.0,14.9,25.1,39.3,16.7,4.1],
            "D2": [0.0,34.3,13.5,24.1,24.5,3.6],
            "D3": [15.2,23.9,22.0,19.7,17.9,1.2],
            "D4": [36.9,26.4,3.9,8.5,24.2,0.1],
            "D5": [24.3,27.2,16.9,14.5,15.7,1.4],
            "D6": [6.6,10.6,42.6,27.0,11.8,1.4],
            "D7": [4.0,5.6,32.3,47.3,7.7,3.1],
            "D8": [1.9,2.6,25.9,54.3,10.9,4.3],

            "E1": [0.0,11.7,26.6,41.1,14.6,6.0],
            "E2": [0.0,22.5,25.5,28.1,21.1,2.8],
            "E3": [19.9,27.8,11.9,19.7,20.0,0.8],
            "E4": [39.6,32.2,4.1,3.4,19.9,0.7],
            "E5": [20.8,26.0,26.8,11.2,13.9,1.4],
            "E6": [6.7,13.3,45.1,23.8,8.4,2.8],
            "E7": [4.3,4.9,31.0,48.9,8.3,2.7],
            "E8": [0.9,1.6,21.4,64.5,8.6,2.9],

            "F1": [0.0,23.7,20.2,29.4,20.8,5.9],
            "F2": [0.0,14.5,29.5,35.8,9.6,10.6],
            "F3": [7.8,38.5,8.9,13.4,31.2,0.1],
            "F4": [5.8,27.3,31.8,17.4,15.1,2.6],
            "F5": [3.4,27.0,41.3,14.3,8.5,5.5],
            "F6": [2.2,17.6,42.6,24.0,9.4,4.2],
            "F7": [1.0,6.1,37.7,44.6,7.5,3.1],
            "F8": [0.4,1.5,27.3,54.2,10.0,6.7],

            "G1": [0.0,13.2,27.5,35.9,13.2,10.3],
            "G2": [0.0,8.7,37.2,31.5,9.2,13.3],
            "G3": [6.4,18.2,33.1,23.6,13.1,5.6],
            "G4": [10.0,19.8,36.3,20.8,9.5,3.6],
            "G5": [11.6,21.1,37.5,15.5,11.4,2.9],
            "G6": [4.3,8.7,52.8,22.5,6.9,4.8],
            "G7": [1.1,3.3,37.8,44.4,6.2,7.2],
            "G8": [0.4,0.7,25.7,50.1,6.6,16.4],

            "H1": [0.0,2.4,30.0,37.1,4.6,25.9],
            "H2": [0.0,4.9,40.1,29.8,5.5,19.8],
            "H3": [6.9,11.3,44.0,19.0,10.0,8.9],
            "H4": [10.3,11.5,48.5,15.8,8.7,5.2],
            "H5": [6.8,6.4,59.4,14.0,7.8,5.5],
            "H6": [6.1,5.8,51.2,25.4,6.5,4.9],
            "H7": [3.4,1.8,42.0,41.2,6.5,5.1],
            "H8": [1.0,0.5,31.6,41.7,7.5,17.9]
        },
        {
            "A1": [0.5,0.8,31.0,54.3,9.0,4.3],
            "A2": [1.2,1.2,42.0,44.3,10.0,1.3],
            "A3": [2.6,4.2,48.0,34.4,8.8,2.0],
            "A4": [5.4,8.0,54.7,20.9,8.7,2.3],
            "A5": [8.9,9.9,33.0,31.2,15.5,1.5],
            "A6": [5.1,11.7,27.3,36.2,17.6,2.1],
            "A7": [0.0,2.7,43.2,37.5,8.3,8.3],
            "A8": [0.0,2.2,29.4,54.2,6.2,8.0],

            "B1": [0.1,0.9,23.3,63.1,5.7,6.8],
            "B2": [2.6,2.3,49.2,34.1,9.6,2.2],
            "B3": [4.3,7.0,56.3,22.1,7.9,2.4],
            "B4": [12.3,17.0,40.4,17.2,11.5,1.5],
            "B5": [11.9,15.4,35.2,23.0,13.0,1.5],
            "B6": [8.1,18.1,33.4,21.3,16.5,2.6],
            "B7": [0.0,8.2,37.1,37.5,13.3,3.9],
            "B8": [0.0,4.9,31.6,46.9,10.5,6.1],

            "C1": [1.2,2.7,27.8,54.1,8.0,6.2],
            "C2": [2.3,4.0,45.7,37.6,8.6,1.6],
            "C3": [8.8,18.5,43.1,18.0,8.8,2.7],
            "C4": [12.1,24.4,35.8,15.3,10.8,1.5],
            "C5": [27.5,35.8,8.1,11.7,15.8,1.1],
            "C6": [17.2,34.2,12.2,13.5,22.1,0.8],
            "C7": [0.0,17.1,27.4,37.5,13.6,4.4],
            "C8": [0.0,14.7,23.1,43.2,12.8,6.2],

            "D1": [0.5,1.8,23.0,64.0,8.5,2.2],
            "D2": [3.5,2.7,43.3,38.0,11.3,1.2],
            "D3": [6.1,8.5,47.0,27.2,10.1,1.1],
            "D4": [23.4,28.2,21.9,11.1,14.1,1.2],
            "D5": [33.8,27.8,8.5,8.0,21.4,0.4],
            "D6": [15.3,24.5,17.1,22.1,19.9,1.1],
            "D7": [0.0,30.0,13.7,27.4,27.6,1.3],
            "D8": [0.0,12.0,18.1,49.0,16.1,4.9],

            "E1": [1.4,1.7,24.2,59.2,6.8,6.7],
            "E2": [1.8,2.0,32.2,53.4,7.9,2.7],
            "E3": [5.8,8.8,48.3,25.6,8.2,3.4],
            "E4": [16.9,20.9,36.0,12.2,13.2,0.8],
            "E5": [27.2,26.3,12.3,16.3,16.6,1.1],
            "E6": [16.5,24.7,13.7,20.2,23.8,1.0],
            "E7": [0.0,33.2,14.1,24.4,25.8,2.5],
            "E8": [0.0,10.6,23.9,45.2,14.1,6.2],

            "F1": [0.3,1.2,19.0,68.5,7.8,3.2],
            "F2": [0.2,2.5,37.4,48.0,7.8,4.1],
            "F3": [2.0,11.5,42.3,31.1,9.4,3.6],
            "F4": [2.0,16.4,48.4,20.7,9.3,3.3],
            "F5": [4.8,24.8,30.0,23.0,14.5,2.9],
            "F6": [9.4,44.7,3.2,6.0,36.2,0.5],
            "F7": [0.0,13.1,34.9,33.8,11.3,6.9],
            "F8": [0.0,17.9,15.9,38.7,25.4,2.2],

            "G1": [0.9,0.8,28.4,59.3,6.7,3.9],
            "G2": [1.7,1.7,42.1,40.6,5.6,8.3],
            "G3": [0.9,5.0,55.5,26.5,6.2,5.8],
            "G4": [7.9,15.2,51.7,12.7,7.6,4.9],
            "G5": [7.8,13.6,39.1,23.7,9.9,5.9],
            "G6": [8.5,24.9,28.0,20.6,14.2,3.8],
            "G7": [0.0,15.2,30.5,34.3,12.5,7.5],
            "G8": [0.0,19.5,27.2,22.8,17.2,13.4],

            "H1": [0.5,0.4,24.1,51.1,4.9,19.0],
            "H2": [1.7,0.8,46.4,40.9,6.7,3.5],
            "H3": [1.5,2.6,59.5,21.2,4.6,10.6],
            "H4": [5.5,5.9,59.1,16.7,5.6,7.2],
            "H5": [7.3,8.0,47.5,22.2,8.9,6.2],
            "H6": [7.1,13.7,39.4,21.2,10.4,8.2],
            "H7": [0.0,4.5,42.9,35.1,7.8,9.7],
            "H8": [0.0,2.2,30.3,46.6,6.4,14.5],
        }
    ],
    [
        {
            "A1": [0.1,1.3,22.9,46.3,7.6,21.7],
            "A2": [0.5,3.1,29.7,39.7,10.6,16.4],
            "A3": [3.3,7.9,42.2,23.6,19.8,3.2],
            "A4": [7.6,9.6,41.1,18.4,21.2,2.1],
            "A5": [6.8,8.5,36.7,23.4,21.9,2.6],
            "A6": [4.3,10.2,31.2,30.0,20.3,4.0],
            "A7": [0.7,3.0,34.2,35.5,13.0,13.6],
            "A8": [0.3,1.1,26.2,43.3,12.5,16.6],

            "B1": [0.4,3.0,25.3,36.2,9.6,25.5],
            "B2": [1.9,7.6,38.8,27.9,12.4,11.4],
            "B3": [7.7,17.6,35.9,15.6,16.2,7.0],
            "B4": [20.2,20.1,28.8,9.8,18.1,3.0],
            "B5": [12.0,14.7,31.4,19.7,20.9,1.2],
            "B6": [7.4,14.3,33.5,20.5,20.4,3.9],
            "B7": [1.9,11.2,35.5,25.2,13.9,12.4],
            "B8": [0.9,2.9,25.6,44.6,13.0,13.0],

            "C1": [1.3,9.1,21.0,40.5,13.9,14.3],
            "C2": [2.0,14.1,27.1,33.3,16.6,6.9],
            "C3": [17.0,34.0,16.7,9.3,20.7,2.3],
            "C4": [26.1,28.6,16.5,7.0,20.8,1.0],
            "C5": [27.0,31.4,9.7,10.7,19.7,1.5],
            "C6": [17.2,32.4,16.9,9.8,21.5,2.2],
            "C7": [2.4,15.4,27.8,29.4,15.5,9.5],
            "C8": [1.4,6.9,20.8,42.7,17.6,10.6],

            "D1": [1.6,7.2,20.6,45.2,18.3,7.2],
            "D2": [3.8,16.8,27.0,27.0,22.6,2.9],
            "D3": [10.0,18.8,23.8,23.1,22.0,2.3],
            "D4": [34.2,24.6,5.9,9.0,26.2,0.1],
            "D5": [36.6,26.3,4.6,6.2,26.3,0.0],
            "D6": [12.5,21.2,22.0,20.5,22.1,1.6],
            "D7": [4.5,17.9,23.7,26.2,23.1,4.6],
            "D8": [1.8,5.9,17.0,47.2,17.9,10.2],

            "E1": [1.1,4.9,21.9,47.2,16.9,8.1],
            "E2": [4.5,16.4,21.0,32.4,20.9,4.9],
            "E3": [15.0,21.5,22.6,15.4,22.7,2.8],
            "E4": [30.7,26.5,12.9,7.3,21.9,0.7],
            "E5": [31.7,28.1,13.4,6.3,19.7,0.7],
            "E6": [12.6,21.2,25.0,16.4,23.4,1.4],
            "E7": [4.9,18.4,19.7,28.4,24.5,4.1],
            "E8": [1.3,4.5,21.5,45.0,19.0,8.8],

            "F1": [0.7,12.3,21.3,34.3,19.1,12.4],
            "F2": [0.5,10.8,29.1,30.5,12.6,16.6],
            "F3": [6.1,33.8,19.5,11.5,27.7,1.5],
            "F4": [5.6,26.6,24.0,20.2,20.7,3.0],
            "F5": [5.5,22.5,26.6,21.1,22.9,1.4],
            "F6": [7.1,38.3,13.8,11.4,28.7,0.8],
            "F7": [0.5,9.8,29.3,30.8,13.4,16.2],
            "F8": [0.8,10.8,16.9,42.9,22.0,6.6],

            "G1": [0.9,6.0,25.4,38.6,14.4,14.7],
            "G2": [1.1,9.8,32.1,30.7,13.6,12.7],
            "G3": [6.5,15.2,38.1,15.9,17.4,7.1],
            "G4": [7.5,14.8,43.2,14.5,15.6,4.4],
            "G5": [9.2,16.6,40.8,12.3,15.6,5.5],
            "G6": [6.6,14.9,34.0,19.0,16.7,8.8],
            "G7": [1.0,10.4,36.7,25.6,9.6,16.6],
            "G8": [0.7,5.0,19.6,39.1,12.6,22.9],

            "H1": [0.4,0.9,25.9,41.5,9.5,21.9],
            "H2": [1.4,2.9,33.4,25.5,8.4,28.3],
            "H3": [5.9,9.6,36.1,20.6,12.0,15.8],
            "H4": [10.1,9.3,39.2,20.1,14.9,6.5],
            "H5": [12.1,10.4,43.5,14.3,12.0,7.6],
            "H6": [5.7,8.7,37.3,21.7,14.4,12.2],
            "H7": [1.3,3.6,40.2,27.2,9.8,17.9],
            "H8": [0.1,0.8,20.8,21.5,4.4,52.5]
        },
        {
            "A1": [0.0,1.3,24.3,52.5,6.7,15.2],
            "A2": [0.0,2.7,31.7,44.5,7.6,13.6],
            "A3": [4.6,11.8,31.5,33.1,14.2,4.8],
            "A4": [10.7,13.2,30.7,27.3,16.4,1.7],
            "A5": [5.5,7.7,52.7,18.6,11.5,4.0],
            "A6": [2.2,4.6,51.5,28.3,10.4,3.1],
            "A7": [2.3,2.5,33.3,51.2,9.4,1.3],
            "A8": [0.9,0.9,26.7,54.0,10.2,7.4],

            "B1": [0.0,4.7,27.1,47.1,9.1,12.0],
            "B2": [0.0,7.9,37.0,32.6,8.1,14.4],
            "B3": [10.5,17.7,26.3,24.5,18.9,2.2],
            "B4": [11.4,15.6,40.0,17.7,12.7,2.5],
            "B5": [13.0,20.3,37.7,14.0,12.3,2.8],
            "B6": [2.7,7.6,59.2,17.7,8.3,4.5],
            "B7": [1.8,3.3,36.8,45.7,9.2,3.2],
            "B8": [0.6,0.7,25.6,56.5,11.6,5.0],

            "C1": [0.0,12.4,22.0,42.2,14.3,9.1],
            "C2": [0.0,18.5,25.5,35.7,14.6,5.8],
            "C3": [19.5,34.8,11.0,10.4,23.3,1.0],
            "C4": [25.2,28.9,13.3,11.4,20.6,0.6],
            "C5": [15.8,29.8,31.9,9.3,10.8,2.3],
            "C6": [7.5,17.3,38.6,23.5,10.7,2.4],
            "C7": [4.2,6.5,33.1,44.6,9.6,2.0],
            "C8": [1.0,2.3,28.0,50.3,12.5,5.9],

            "D1": [0.0,12.0,19.5,45.7,17.7,5.1],
            "D2": [0.0,28.4,17.6,21.1,29.9,3.0],
            "D3": [20.0,29.6,15.6,12.9,19.2,2.7],
            "D4": [36.8,26.5,4.7,5.3,26.5,0.2],
            "D5": [22.7,22.3,24.8,9.8,19.9,0.5],
            "D6": [8.2,14.7,41.5,21.4,10.7,3.6],
            "D7": [5.4,5.5,30.5,46.9,10.0,1.7],
            "D8": [1.9,1.9,18.8,62.9,11.8,2.8],

            "E1": [0.0,12.5,22.8,42.0,13.5,9.2],
            "E2": [0.0,26.1,18.5,29.5,23.3,2.7],
            "E3": [19.3,26.4,13.6,16.1,23.9,0.7],
            "E4": [29.8,24.4,12.7,10.7,21.7,0.8],
            "E5": [20.5,22.8,30.4,9.0,16.3,1.1],
            "E6": [6.3,10.7,43.3,25.2,10.5,4.0],
            "E7": [4.2,4.7,30.1,48.8,9.4,2.8],
            "E8": [0.6,1.2,23.4,59.3,11.9,3.7],

            "F1": [0.0,21.0,14.7,37.3,22.7,4.4],
            "F2": [0.0,16.9,25.5,36.1,10.1,11.5],
            "F3": [9.6,45.8,3.7,5.9,34.7,0.2],
            "F4": [7.7,29.8,23.8,17.2,19.4,2.1],
            "F5": [3.2,17.0,40.9,21.6,13.9,3.4],
            "F6": [2.8,18.3,42.0,21.2,9.7,6.0],
            "F7": [0.6,4.8,29.1,53.5,7.7,4.2],
            "F8": [0.2,1.6,28.9,51.4,9.2,8.8],

            "G1": [0.0,14.9,27.1,25.5,13.7,18.8],
            "G2": [0.0,15.1,33.2,27.0,13.7,11.1],
            "G3": [8.0,21.0,27.1,22.0,15.6,6.3],
            "G4": [12.8,20.6,34.1,15.0,10.4,7.2],
            "G5": [9.0,16.4,41.1,16.0,12.6,5.0],
            "G6": [3.0,7.2,53.0,21.5,7.3,8.0],
            "G7": [1.2,4.6,42.3,31.9,4.4,15.6],
            "G8": [0.8,0.6,24.7,45.5,6.2,22.3],

            "H1": [0.0,1.6,28.7,44.0,5.4,20.3],
            "H2": [0.0,3.9,41.5,32.7,7.1,14.8],
            "H3": [8.7,11.8,38.4,19.3,11.9,9.9],
            "H4": [10.8,10.2,46.8,15.4,10.8,5.9],
            "H5": [5.6,6.7,58.8,12.2,6.5,10.2],
            "H6": [6.1,4.8,49.3,22.1,6.9,10.9],
            "H7": [2.9,1.4,45.7,33.7,6.7,9.6],
            "H8": [0.2,0.6,32.0,48.1,5.0,14.2]
        },
        {
            "A1": [0.4,0.7,22.4,67.6,5.7,3.1],
            "A2": [1.4,1.3,46.3,41.6,8.5,1.0],
            "A3": [1.5,3.8,59.0,26.9,7.2,1.6],
            "A4": [4.3,5.8,53.8,24.6,9.7,1.8],
            "A5": [10.5,11.8,37.1,25.0,13.0,2.6],
            "A6": [7.2,15.3,29.6,29.7,15.9,2.2],
            "A7": [0.0,2.5,38.4,44.7,6.9,7.5],
            "A8": [0.0,1.6,27.9,57.1,6.9,6.5],

            "B1": [0.7,0.8,28.7,56.4,7.2,6.2],
            "B2": [1.2,1.9,50.4,35.9,7.2,3.4],
            "B3": [4.4,6.4,57.1,22.0,6.2,3.9],
            "B4": [9.9,14.2,43.6,19.0,11.4,1.9],
            "B5": [12.0,16.5,40.0,18.6,10.1,2.9],
            "B6": [12.0,22.0,28.3,19.0,16.1,2.5],
            "B7": [0.0,10.5,34.6,36.9,13.5,4.5],
            "B8": [0.0,5.1,30.1,47.7,7.8,9.3],

            "C1": [1.3,1.9,24.5,58.4,8.3,5.6],
            "C2": [2.2,3.3,36.9,47.6,8.4,1.7],
            "C3": [7.5,16.7,41.1,24.9,8.5,1.4],
            "C4": [13.8,23.9,32.3,18.3,9.4,2.2],
            "C5": [31.1,34.7,10.9,7.4,15.1,0.9],
            "C6": [23.4,43.5,4.0,8.7,19.4,1.0],
            "C7": [0.0,24.7,25.8,32.1,11.3,6.1],
            "C8": [0.0,14.1,23.7,44.3,13.7,4.2],

            "D1": [0.4,1.6,26.7,60.9,8.4,2.0],
            "D2": [1.3,3.0,45.2,40.1,7.7,2.6],
            "D3": [7.1,10.1,46.7,25.7,8.6,1.9],
            "D4": [18.3,19.9,35.5,12.7,12.7,1.1],
            "D5": [38.5,29.0,7.7,4.3,20.3,0.2],
            "D6": [18.6,31.0,14.8,17.5,16.4,1.6],
            "D7": [0.0,31.5,13.8,25.3,27.5,1.8],
            "D8": [0.0,11.6,25.8,42.3,15.1,5.3],

            "E1": [0.7,1.4,25.7,61.5,7.1,3.6],
            "E2": [2.9,2.7,45.3,39.6,8.1,1.5],
            "E3": [5.7,6.9,46.8,30.1,8.6,1.9],
            "E4": [20.4,24.5,24.9,17.7,11.6,0.9],
            "E5": [23.2,25.1,21.2,16.1,13.2,1.2],
            "E6": [21.9,30.9,8.5,17.5,20.3,0.9],
            "E7": [0.0,30.7,18.6,18.9,30.5,1.3],
            "E8": [0.0,13.6,28.0,39.0,13.4,5.9],

            "F1": [0.2,1.6,30.4,55.5,6.1,6.3],
            "F2": [0.9,2.5,34.8,51.4,7.0,3.4],
            "F3": [1.1,10.8,50.1,27.7,7.4,2.9],
            "F4": [2.7,16.6,51.7,16.9,8.3,3.8],
            "F5": [6.0,29.7,24.9,25.1,12.5,1.9],
            "F6": [8.3,39.6,6.8,12.6,32.1,0.5],
            "F7": [0.0,14.0,33.6,33.9,9.4,9.2],
            "F8": [0.0,26.8,15.1,27.2,25.3,5.6],

            "G1": [0.4,0.8,26.4,53.4,3.9,15.1],
            "G2": [0.8,1.7,44.6,40.6,6.7,5.6],
            "G3": [1.4,7.3,54.4,25.5,4.1,7.3],
            "G4": [6.3,14.6,54.5,13.6,5.9,5.0],
            "G5": [9.3,16.1,43.6,15.4,7.5,8.2],
            "G6": [7.7,23.2,34.6,17.2,11.9,5.4],
            "G7": [0.0,13.0,45.0,24.4,8.9,8.7],
            "G8": [0.0,11.2,25.8,42.1,15.0,5.8],

            "H1": [0.6,0.3,24.9,51.9,4.8,17.6],
            "H2": [1.8,0.6,45.3,40.5,6.6,5.2],
            "H3": [1.5,3.6,57.7,22.2,3.2,11.8],
            "H4": [5.3,5.6,62.3,15.1,5.3,6.4],
            "H5": [11.6,11.1,38.8,23.2,7.3,8.1],
            "H6": [8.9,12.5,39.9,20.1,11.1,7.5],
            "H7": [0.0,6.0,42.3,28.5,5.7,17.5],
            "H8": [0.0,1.9,33.0,42.9,4.4,17.7]
        }
    ]
];

const pawnModel = new URL('./public/pawn_alt.glb', import.meta.url);
const knightModel = new URL('./public/knight_alt.glb', import.meta.url);
const bishopModel = new URL('./public/bishop_alt.glb', import.meta.url);
const rookModel = new URL('./public/rook_alt.glb', import.meta.url);
const queenModel = new URL('./public/queen_alt.glb', import.meta.url);
const kingModel = new URL('./public/king_alt.glb', import.meta.url);

const assetLoaderPawn = new GLTFLoader();
assetLoaderPawn.load(pawnModel.href, function(gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {node.castShadow = true; node.name = "Unclickable"}
    });
    const model = gltf.scene;
    scene.add(model);
    model.position.set(-2.5, 0, 7.5);
    model.scale.set(0.25, 0.25, 0.25);
}, undefined, function(error) {
    console.error(error);
});

const assetLoaderKnight = new GLTFLoader();
assetLoaderKnight.load(knightModel.href, function(gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {node.castShadow = true; node.name = "Unclickable"}
    });
    const model = gltf.scene;
    scene.add(model);
    model.position.set(-1.5, 0, 7.5);
    model.scale.set(0.2, 0.2, 0.2);
    model.rotateY(Math.PI);
}, undefined, function(error) {
    console.error(error);
});

const assetLoaderBishop = new GLTFLoader();
assetLoaderBishop.load(bishopModel.href, function(gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {node.castShadow = true; node.name = "Unclickable"}
    });
    const model = gltf.scene;
    scene.add(model);
    model.position.set(-0.5, 0, 7.5);
    model.scale.set(0.2, 0.2, 0.2);
}, undefined, function(error) {
    console.error(error);
});

const assetLoaderRook = new GLTFLoader();
assetLoaderRook.load(rookModel.href, function(gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {node.castShadow = true; node.name = "Unclickable"}
    });
    const model = gltf.scene;
    scene.add(model);
    model.position.set(0.5, 0, 7.5);
    model.scale.set(0.2, 0.2, 0.2);
}, undefined, function(error) {
    console.error(error);
});

const assetLoaderQueen = new GLTFLoader();
assetLoaderQueen.load(queenModel.href, function(gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {node.castShadow = true; node.name = "Unclickable"}
    });
    const model = gltf.scene;
    scene.add(model);
    model.position.set(1.5, 0, 7.5);
    model.scale.set(0.21, 0.21, 0.21);
}, undefined, function(error) {
    console.error(error);
});

const assetLoaderKing = new GLTFLoader();
assetLoaderKing.load(kingModel.href, function(gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {node.castShadow = true; node.name = "Unclickable"}
    });
    const model = gltf.scene;
    scene.add(model);
    model.position.set(2.5, 0, 7.5);
    model.scale.set(0.18, 0.18, 0.18);
}, undefined, function(error) {
    console.error(error);
});

var compositionContainerValue = [1, 1, 1, 1, 1, 1];
var compositionContainerValueMax;
var compositionContainer = new Array(6);

for (var i = 0; i < 6; i++) {
    compositionContainer[i] = new Array(2);
}

for (var i = 0; i < 6; i++) {
    compositionContainer[i][0] = new THREE.Mesh(cube, new THREE.MeshStandardMaterial({color: 0xFFFFFF, flatShading: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1}));
    compositionContainer[i][0].castShadow = true;
    compositionContainer[i][0].receiveShadow = true;
    compositionContainer[i][0].position.set(-2.5 + i, 0, 6.5);
    compositionContainer[i][0].scale.z = 0.5;
    compositionContainer[i][0].userData = {internalValue: 0, pieceType: ""};
    compositionContainer[i][0].name = "Piece_Act";

    scene.add(compositionContainer[i][0]);

    compositionContainer[i][1] = new THREE.LineSegments(edge, new THREE.LineBasicMaterial({color: 0x000000}));
    compositionContainer[i][1].position.set(-2.5 + i, 0, 6.5);
    compositionContainer[i][1].scale.z = 0.5;

    scene.add(compositionContainer[i][1])
}

for (var i = 0; i < 6; i++) {
    compositionContainer[i][0].position.y = (2 * compositionContainerValue[i] - compositionContainer[i][0].geometry.parameters.height * compositionContainerValue[i]) / 2;
    compositionContainer[i][0].scale.y = compositionContainerValue[i];

    compositionContainer[i][1].position.y = (2 * compositionContainerValue[i] - compositionContainer[i][1].geometry.parameters.geometry.parameters.height * compositionContainerValue[i]) / 2;
    compositionContainer[i][1].scale.y = compositionContainerValue[i];
}

compositionContainer[0][0].userData.pieceType = "Pawn";
compositionContainer[1][0].userData.pieceType = "Knight";
compositionContainer[2][0].userData.pieceType = "Bishop";
compositionContainer[3][0].userData.pieceType = "Rook";
compositionContainer[4][0].userData.pieceType = "Queen";
compositionContainer[5][0].userData.pieceType = "King";

const texturePieceActivity = new THREE.TextureLoader().load('./PieceActivity.png');
const materialPieceActivity = new THREE.MeshLambertMaterial({map: texturePieceActivity, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: true, opacity: 0});
const planePieceActivity = new THREE.Mesh(new THREE.PlaneGeometry(4, 1), materialPieceActivity);
planePieceActivity.position.set(0, 0.275, 8.5);
planePieceActivity.scale.set(1.25, 1.25, 1.25);
planePieceActivity.name = "Annotation";
planePieceActivity.userData = {Annotation_type: "Piece_Activity"};
scene.add(planePieceActivity);

// 
// Functions
// 

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
labelRenderer.domElement.style.pointerEvents = "none";
document.body.appendChild(labelRenderer.domElement);

var firstClickStatus = false;

const button = document.getElementById("explore");
button.addEventListener('click', firstClickFunctionAddons);

function firstClickFunctionAddons() {  
    if (firstClickStatus != true) {
        resetCamera();

        var tween0 = new TWEEN.Tween({angle: spotLight2.angle}).to({angle: 1}, 2000).onUpdate((coords) => {spotLight2.angle = coords.angle}).delay(3000).easing(TWEEN.Easing.Cubic.InOut);
        tween0.start();

        var tweenAnno = new TWEEN.Tween({opacity: 0}).to({opacity: 1}, 1000).onUpdate((coords) => {planeSquareUtilization.material.opacity = coords.opacity}).delay(3000);
        var tweenAnno1 = new TWEEN.Tween({opacity: 0}).to({opacity: 1}, 1000).onUpdate((coords) => {planePieceActivity.material.opacity = coords.opacity}).delay(3000);
        var tweenAnno2 = new TWEEN.Tween({opacity: 0}).to({opacity: 1}, 1000).onUpdate((coords) => {planeRookPlacement.material.opacity = coords.opacity}).delay(3000);
        var tweenAnno3 = new TWEEN.Tween({opacity: 0}).to({opacity: 1}, 1000).onUpdate((coords) => {planePieceCapture.material.opacity = coords.opacity}).delay(3000);
        
        tweenAnno.start()
        tweenAnno1.start()
        tweenAnno2.start()
        tweenAnno3.start()

        firstClickStatus = true;
    }
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', resetCamera);

function resetCamera() {
    var tween = new TWEEN.Tween({x: camera.position.x, y: camera.position.y, z: camera.position.z}).to({x: 35, y: 38, z: 35}, 3000).onUpdate((coords) => {camera.position.x = coords.x; camera.position.y = coords.y; camera.position.z = coords.z}).easing(TWEEN.Easing.Cubic.InOut);
    var tween1 = new TWEEN.Tween({x: orbit.target.x, y: orbit.target.y, z: orbit.target.z}).to({x: -2, y: 0, z: -2}, 3000).onUpdate((coords) => {orbit.target.x = coords.x; orbit.target.y = coords.y; orbit.target.z = coords.z}).easing(TWEEN.Easing.Cubic.InOut);
    
    tween.start();
    tween1.start();
}

function resetCubePressed() {
    if (isCubePressed) {
        cubePressed.material.color.r = cubePressed.userData.color;
        cubePressed.material.color.g = cubePressed.userData.color;
        cubePressed.material.color.b = cubePressed.userData.color;
        isCubePressed = false;

        var tween = new TWEEN.Tween({y: compositionContainer[0][0].position.y, yScale: compositionContainer[0][0].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[0][0].position.y = coords.y; compositionContainer[0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween.start();

        var tween1 = new TWEEN.Tween({y: compositionContainer[1][0].position.y, yScale: compositionContainer[1][0].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[1][0].position.y = coords.y; compositionContainer[1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween1.start();

        var tween2 = new TWEEN.Tween({y: compositionContainer[2][0].position.y, yScale: compositionContainer[2][0].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[2][0].position.y = coords.y; compositionContainer[2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween2.start();

        var tween3 = new TWEEN.Tween({y: compositionContainer[3][0].position.y, yScale: compositionContainer[3][0].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[3][0].position.y = coords.y; compositionContainer[3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween3.start();
    
        var tween4 = new TWEEN.Tween({y: compositionContainer[4][0].position.y, yScale: compositionContainer[4][0].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[4][0].position.y = coords.y; compositionContainer[4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween4.start();
    
        var tween5 = new TWEEN.Tween({y: compositionContainer[5][0].position.y, yScale: compositionContainer[5][0].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[5][0].position.y = coords.y; compositionContainer[5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween5.start();


        var tween = new TWEEN.Tween({y: compositionContainer[0][1].position.y, yScale: compositionContainer[0][1].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[0][1].position.y = coords.y; compositionContainer[0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween.start();

        var tween1 = new TWEEN.Tween({y: compositionContainer[1][1].position.y, yScale: compositionContainer[1][1].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[1][1].position.y = coords.y; compositionContainer[1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween1.start();

        var tween2 = new TWEEN.Tween({y: compositionContainer[2][1].position.y, yScale: compositionContainer[2][1].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[2][1].position.y = coords.y; compositionContainer[2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween2.start();

        var tween3 = new TWEEN.Tween({y: compositionContainer[3][1].position.y, yScale: compositionContainer[3][1].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[3][1].position.y = coords.y; compositionContainer[3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween3.start();

        var tween4 = new TWEEN.Tween({y: compositionContainer[4][1].position.y, yScale: compositionContainer[4][1].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[4][1].position.y = coords.y; compositionContainer[4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween4.start();

        var tween5 = new TWEEN.Tween({y: compositionContainer[5][1].position.y, yScale: compositionContainer[5][1].scale.y}).to({y: 0.5, yScale: 1}, 1000).onUpdate((coords) => {compositionContainer[5][1].position.y = coords.y; compositionContainer[5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
        tween5.start();
    
        for (var i = 0; i < 6; i++) {
            if (compositionContainer[i][0].userData.internalValue == compositionContainerValueMax) {
                var tween = new TWEEN.Tween({r: 1, g: 0.7216, b: 0}).to({r: 1, g: 1, b: 1}, 1000).onUpdate((coords) => {compositionContainer[i][0].material.color.r = coords.r; compositionContainer[i][0].material.color.g = coords.g; compositionContainer[i][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();
                break;
            }
        }

        cubePressed = false;
    }
}

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener('click', returnHome);

function returnHome() {
    document.getElementById("sideCredits").style.left = "-475px";

    if (activeSideAnnotation != undefined) {
        document.getElementById(activeSideAnnotation).style.right = "-475px";
    }

    var tween0 = new TWEEN.Tween({angle: spotLight2.angle}).to({angle: 0.5}, 2000).onUpdate((coords) => {spotLight2.angle = coords.angle}).delay(3000).easing(TWEEN.Easing.Cubic.InOut);
    tween0.start();

    resetCubePressed();

    var tweenAnno = new TWEEN.Tween({opacity: 1}).to({opacity: 0}, 1000).onUpdate((coords) => {planeSquareUtilization.material.opacity = coords.opacity});
    var tweenAnno1 = new TWEEN.Tween({opacity: 1}).to({opacity: 0}, 1000).onUpdate((coords) => {planePieceActivity.material.opacity = coords.opacity});
    var tweenAnno2 = new TWEEN.Tween({opacity: 1}).to({opacity: 0}, 1000).onUpdate((coords) => {planeRookPlacement.material.opacity = coords.opacity});
    var tweenAnno3 = new TWEEN.Tween({opacity: 1}).to({opacity: 0}, 1000).onUpdate((coords) => {planePieceCapture.material.opacity = coords.opacity});

    tweenAnno.start()
    tweenAnno1.start()
    tweenAnno2.start()
    tweenAnno3.start()

    var tween = new TWEEN.Tween({x: camera.position.x, y: camera.position.y, z: camera.position.z}).to({x: 26.4, y: 39.8, z: 35.8}, 3000).onUpdate((coords) => {camera.position.x = coords.x; camera.position.y = coords.y; camera.position.z = coords.z}).easing(TWEEN.Easing.Cubic.InOut);
    var tween1 = new TWEEN.Tween({x: orbit.target.x, y: orbit.target.y, z: orbit.target.z}).to({x: -6.5, y: 0, z: 1.5}, 3000).onUpdate((coords) => {orbit.target.x = coords.x; orbit.target.y = coords.y; orbit.target.z = coords.z}).easing(TWEEN.Easing.Cubic.InOut);
    
    tween.start();
    tween1.start();

    activeSideAnnotation = undefined;
    firstClickStatus = false;
}

const div1 = document.createElement('div');
div1.className = "tooltip";

const p = document.createElement('p');
div1.appendChild(p);

const p1 = document.createElement('p');

const div = document.createElement('div');
div.appendChild(div1);
const divContainer = new CSS2DObject(div);
scene.add(divContainer);

window.addEventListener('mousemove', changeCursor);

function changeCursor(event) {
    if (firstClickStatus) {
        var mousePosition = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1);     
                                            
        var raycaster = new THREE.Raycaster();
        raycaster.linePrecision = 0.1;
        raycaster.setFromCamera(mousePosition, camera);

        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            for (var i = 0; i < intersects.length; i++) {
                if (intersects[i].object.name == "Annotation") {
                    document.body.style.cursor = "pointer";
                    break;
                } else if (intersects[i].object.name == "barChart") {
                    div1.className = "tooltip show";
                    var pos = intersects[i].object.position;
                    divContainer.position.set(pos.x, pos.y, pos.z);
                    divContainer.position.y = intersects[i].object.geometry.parameters.height * intersects[i].object.scale.y + 0.85;
                    p.textContent = intersects[i].object.userData.internalSquare.toString() + intersects[i].object.userData.internalValue.toString();

                    div1.appendChild(p1)
                    p1.textContent = "Win Rate: " + intersects[i].object.userData.winRate.toString() + "%";
                    break;
                } else if (intersects[i].object.name.length == 2) {
                    document.body.style.cursor = "pointer";

                    div1.className = "tooltip show";
                    var pos = intersects[i].object.position;
                    divContainer.position.set(pos.x, pos.y, pos.z);
                    divContainer.position.y = intersects[i].object.geometry.parameters.height * intersects[i].object.scale.y + 0.75;
                    p.textContent = intersects[i].object.name.toString() + ": " + intersects[i].object.userData.internalValue.toString();
                    break;
                } else if (intersects[i].object.name == "Piece_Act") {
                    if (isCubePressed) {
                        div1.className = "tooltip show";
                        var pos = intersects[i].object.position;
                        divContainer.position.set(pos.x, pos.y, pos.z);
                        divContainer.position.y = intersects[i].object.geometry.parameters.height * intersects[i].object.scale.y + 0.75;
                        p.textContent = intersects[i].object.userData.pieceType + ": " + intersects[i].object.userData.internalValue.toString() + "%";
                    }
                    break;
                } else {
                    div1.className = "tooltip hide";
                    document.body.style.cursor = "default";

                    if (div1.childElementCount > 1) {
                        div1.removeChild(div1.lastElementChild);
                    }
                }
            }
        }
    }
}

document.getElementById("magnus_el").addEventListener('click', changeData);
document.getElementById("ian_el").addEventListener('click', changeData);
document.getElementById("ding_el").addEventListener('click', changeData);

document.getElementById("mix").addEventListener('click', changeData);
document.getElementById("white").addEventListener('click', changeData);
document.getElementById("black").addEventListener('click', changeData);

function resetMaxBarLeftColor() {
    for (var index = 0; index < 8; index++) {
        if (barLeftContainer[index][0].userData.internalValue == barLeftContainerValueMax) {
            var tween = new TWEEN.Tween({r: 1, g: 0.7216, b: 0}).to({r: 1, g: 1, b: 1}, 1000).onUpdate((coords) => {barLeftContainer[index][0].material.color.r = coords.r; barLeftContainer[index][0].material.color.g = coords.g; barLeftContainer[index][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
            tween.start();
            break;
        }
    }
}

function resetMaxBarRightColor() {
    for (var index = 0; index < 8; index++) {
        if (barRightContainer[index][0].userData.internalValue == barRightContainerValueMax) {
            var tween = new TWEEN.Tween({r: 1, g: 0.7216, b: 0}).to({r: 1, g: 1, b: 1}, 1000).onUpdate((coords) => {barRightContainer[index][0].material.color.r = coords.r; barRightContainer[index][0].material.color.g = coords.g; barRightContainer[index][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
            tween.start();
            break;
        }
    }
}

function changeData() {
    var activeProf = document.getElementsByClassName("ranks_active")
    var activeEl = document.getElementsByClassName("activeData");

    if (activeEl[0].id != activeDataType || activeProf[0].id != activeProfile) {
        if (activeEl[0].id == "mix") {
            activeDataType = "mix";
            activeDataTypeNum = 0;
        } else if (activeEl[0].id == "white") {
            activeDataType = "white";
            activeDataTypeNum = 1;
        } else if (activeEl[0].id == "black") {
            activeDataType = "black";
            activeDataTypeNum = 2;
        }

        if (activeProf[0].id == "magnus_el") {
            activeProfile = "magnus_el";
            activeProfileNum = 0;
        } else if (activeProf[0].id == "ian_el") {
            activeProfile = "ian_el";
            activeProfileNum = 1;
        } if (activeProf[0].id == "ding_el") {
            activeProfile = "ding_el";
            activeProfileNum = 2;
        }

        // BAR LEFT
        // RESET MAX BAR
        resetMaxBarLeftColor();

        // RESCALE BAR
        for (var i = 0; i < 8; i++) {
            barLeftContainer[i][0].userData.internalValue = barLeftContainerValue[activeProfileNum][activeDataTypeNum][i];
            barLeftContainer[i][0].userData.winRate = barLeftWinRate[activeProfileNum][activeDataTypeNum][i];
            var currentPosY = barLeftContainer[i][0].geometry.parameters.height * barLeftContainer[i][0].scale.y / 2;
            var currentScaleY = barLeftContainer[i][0].scale.y;
            var newPosY = (2 * barLeftContainerValue[activeProfileNum][activeDataTypeNum][i] - barLeftContainer[i][0].geometry.parameters.height * barLeftContainerValue[activeProfileNum][activeDataTypeNum][i]) / 2 * 2.5;
            var newScaleY = barLeftContainerValue[activeProfileNum][activeDataTypeNum][i] * 2.5;

            if (newPosY <= 0) {
                newPosY = 0.01;
            }

            if (newScaleY <= 0) {
                newScaleY = 0.01;
            }

            if (i == 0) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[0][0].position.y = coords.y; barLeftContainer[0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[0][1].position.y = coords.y; barLeftContainer[0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 1) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[1][0].position.y = coords.y; barLeftContainer[1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[1][1].position.y = coords.y; barLeftContainer[1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 2) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[2][0].position.y = coords.y; barLeftContainer[2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[2][1].position.y = coords.y; barLeftContainer[2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 3) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[3][0].position.y = coords.y; barLeftContainer[3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[3][1].position.y = coords.y; barLeftContainer[3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 4) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[4][0].position.y = coords.y; barLeftContainer[4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[4][1].position.y = coords.y; barLeftContainer[4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 5) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[5][0].position.y = coords.y; barLeftContainer[5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[5][1].position.y = coords.y; barLeftContainer[5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 6) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[6][0].position.y = coords.y; barLeftContainer[6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[6][1].position.y = coords.y; barLeftContainer[6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 7) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[7][0].position.y = coords.y; barLeftContainer[7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barLeftContainer[7][1].position.y = coords.y; barLeftContainer[7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            }            
        }

        // RECOLOR MAX BAR
        barLeftContainerValueMax = barLeftContainerValue[activeProfileNum][activeDataTypeNum].reduce((a, b) => Math.max(a, b), -Infinity);

        for (var index = 0; index < 8; index++) {
            barLeftContainer[index][0].userData.internalValue = barLeftContainerValue[activeProfileNum][activeDataTypeNum][index];
        }

        for (var index_ = 0; index_ < 8; index_++) {
            // alert(index);
            if (barLeftContainer[index_][0].userData.internalValue == barLeftContainerValueMax) {
                var tween = new TWEEN.Tween({r: 1, g: 1, b: 1}).to({r: 1, g: 0.7216, b: 0}, 1000).onUpdate((coords) => {barLeftContainer[index_][0].material.color.r = coords.r; barLeftContainer[index_][0].material.color.g = coords.g; barLeftContainer[index_][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut).delay(1000);
                tween.start();
                break;
            }
        }

        // BAR RIGHT
        // RESET MAX BAR
        resetMaxBarRightColor();

        // RESCALE BAR
        for (var i = 0; i < 8; i++) {
            barRightContainer[i][0].userData.internalValue = barRightContainerValue[activeProfileNum][activeDataTypeNum][i];
            barRightContainer[i][0].userData.winRate = barRightWinningRate[activeProfileNum][activeDataTypeNum][i];
            var currentPosY = barRightContainer[i][0].geometry.parameters.height * barRightContainer[i][0].scale.y / 2;
            var currentScaleY = barRightContainer[i][0].scale.y;
            var newPosY = (2 * barRightContainerValue[activeProfileNum][activeDataTypeNum][i] - barRightContainer[i][0].geometry.parameters.height * barRightContainerValue[activeProfileNum][activeDataTypeNum][i]) / 2 * 3.325;
            var newScaleY = barRightContainerValue[activeProfileNum][activeDataTypeNum][i] * 3.325;

            if (newPosY <= 0) {
                newPosY = 0.01;
            }

            if (newScaleY <= 0) {
                newScaleY = 0.01;
            }

            if (i == 0) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[0][0].position.y = coords.y; barRightContainer[0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[0][1].position.y = coords.y; barRightContainer[0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 1) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[1][0].position.y = coords.y; barRightContainer[1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[1][1].position.y = coords.y; barRightContainer[1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 2) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[2][0].position.y = coords.y; barRightContainer[2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[2][1].position.y = coords.y; barRightContainer[2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 3) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[3][0].position.y = coords.y; barRightContainer[3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[3][1].position.y = coords.y; barRightContainer[3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 4) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[4][0].position.y = coords.y; barRightContainer[4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[4][1].position.y = coords.y; barRightContainer[4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 5) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[5][0].position.y = coords.y; barRightContainer[5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[5][1].position.y = coords.y; barRightContainer[5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 6) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[6][0].position.y = coords.y; barRightContainer[6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[6][1].position.y = coords.y; barRightContainer[6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            } else if (i == 7) {
                var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[7][0].position.y = coords.y; barRightContainer[7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween.start();

                var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {barRightContainer[7][1].position.y = coords.y; barRightContainer[7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                tween1.start();
            }            
        }

        // RECOLOR MAX BAR
        barRightContainerValueMax = barRightContainerValue[activeProfileNum][activeDataTypeNum].reduce((a, b) => Math.max(a, b), -Infinity);

        for (var index = 0; index < 8; index++) {
            barRightContainer[index][0].userData.internalValue = barRightContainerValue[activeProfileNum][activeDataTypeNum][index];
        }

        for (var index_1 = 0; index_1 < 8; index_1++) {
            if (barRightContainer[index_1][0].userData.internalValue == barRightContainerValueMax) {
                var tween = new TWEEN.Tween({r: 1, g: 1, b: 1}).to({r: 1, g: 0.7216, b: 0}, 1000).onUpdate((coords) => {barRightContainer[index_1][0].material.color.r = coords.r; barRightContainer[index_1][0].material.color.g = coords.g; barRightContainer[index_1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut).delay(1000);
                tween.start();
                break;
            }
        }

        // RESET CUBE PRESSED
        resetCubePressed();

        // HEATMAP
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                cubeContainer[i][j][0].userData.internalValue = valueContainer[activeProfileNum][activeDataTypeNum][i][j];
                
                if (cubeContainer[i][j][0].userData.internalValue < 0.4) {
                    cubeContainer[i][j][0].userData.colorChange = 1;
                } else if (cubeContainer[i][j][0].userData.internalValue >= 0.4 && cubeContainer[i][j][0].userData.internalValue < 0.8) {
                    cubeContainer[i][j][0].userData.colorChange = 0.6275;
                } else if (cubeContainer[i][j][0].userData.internalValue >= 0.8 && cubeContainer[i][j][0].userData.internalValue < 1.2) {
                    cubeContainer[i][j][0].userData.colorChange = 0.4;
                } else if (cubeContainer[i][j][0].userData.internalValue >= 1.2 && cubeContainer[i][j][0].userData.internalValue < 1.6) {
                    cubeContainer[i][j][0].userData.colorChange = 0.2;
                } else if (cubeContainer[i][j][0].userData.internalValue >= 1.6 && cubeContainer[i][j][0].userData.internalValue < 2) {
                    cubeContainer[i][j][0].userData.colorChange = 0.102;
                } else if (cubeContainer[i][j][0].userData.internalValue > 2) {
                    cubeContainer[i][j][0].userData.colorChange = 0;
                }

                var currentPosY = cubeContainer[i][j][0].geometry.parameters.height * cubeContainer[i][j][0].scale.y / 2;
                var currentScaleY = cubeContainer[i][j][0].scale.y;
                var newPosY = (2 * valueContainer[activeProfileNum][activeDataTypeNum][i][j] - cubeContainer[i][j][0].geometry.parameters.height * valueContainer[activeProfileNum][activeDataTypeNum][i][j]) / 2;
                var newScaleY = valueContainer[activeProfileNum][activeDataTypeNum][i][j];

                if (newPosY <= 0) {
                    newPosY = 0.01;
                }

                if (newScaleY <= 0) {
                    newScaleY = 0.01;
                }

                var currentColor = cubeContainer[i][j][0].userData.color;
                var nextColor = cubeContainer[i][j][0].userData.colorChange;

                if (i == 0 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][0][0].position.y = coords.y; cubeContainer[0][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][0][1].position.y = coords.y; cubeContainer[0][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][0][0].material.color.r = coords.r; cubeContainer[0][0][0].material.color.g = coords.g; cubeContainer[0][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 0 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][1][0].position.y = coords.y; cubeContainer[0][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][1][1].position.y = coords.y; cubeContainer[0][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][1][0].material.color.r = coords.r; cubeContainer[0][1][0].material.color.g = coords.g; cubeContainer[0][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 0 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][2][0].position.y = coords.y; cubeContainer[0][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][2][1].position.y = coords.y; cubeContainer[0][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][2][0].material.color.r = coords.r; cubeContainer[0][2][0].material.color.g = coords.g; cubeContainer[0][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 0 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][3][0].position.y = coords.y; cubeContainer[0][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][3][1].position.y = coords.y; cubeContainer[0][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][3][0].material.color.r = coords.r; cubeContainer[0][3][0].material.color.g = coords.g; cubeContainer[0][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 0 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][4][0].position.y = coords.y; cubeContainer[0][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][4][1].position.y = coords.y; cubeContainer[0][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][4][0].material.color.r = coords.r; cubeContainer[0][4][0].material.color.g = coords.g; cubeContainer[0][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 0 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][5][0].position.y = coords.y; cubeContainer[0][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][5][1].position.y = coords.y; cubeContainer[0][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][5][0].material.color.r = coords.r; cubeContainer[0][5][0].material.color.g = coords.g; cubeContainer[0][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 0 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][6][0].position.y = coords.y; cubeContainer[0][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][6][1].position.y = coords.y; cubeContainer[0][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][6][0].material.color.r = coords.r; cubeContainer[0][6][0].material.color.g = coords.g; cubeContainer[0][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 0 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][7][0].position.y = coords.y; cubeContainer[0][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[0][7][1].position.y = coords.y; cubeContainer[0][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[0][7][0].material.color.r = coords.r; cubeContainer[0][7][0].material.color.g = coords.g; cubeContainer[0][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][0][0].position.y = coords.y; cubeContainer[1][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][0][1].position.y = coords.y; cubeContainer[1][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][0][0].material.color.r = coords.r; cubeContainer[1][0][0].material.color.g = coords.g; cubeContainer[1][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][1][0].position.y = coords.y; cubeContainer[1][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][1][1].position.y = coords.y; cubeContainer[1][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][1][0].material.color.r = coords.r; cubeContainer[1][1][0].material.color.g = coords.g; cubeContainer[1][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][2][0].position.y = coords.y; cubeContainer[1][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][2][1].position.y = coords.y; cubeContainer[1][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][2][0].material.color.r = coords.r; cubeContainer[1][2][0].material.color.g = coords.g; cubeContainer[1][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][3][0].position.y = coords.y; cubeContainer[1][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][3][1].position.y = coords.y; cubeContainer[1][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][3][0].material.color.r = coords.r; cubeContainer[1][3][0].material.color.g = coords.g; cubeContainer[1][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][4][0].position.y = coords.y; cubeContainer[1][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][4][1].position.y = coords.y; cubeContainer[1][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][4][0].material.color.r = coords.r; cubeContainer[1][4][0].material.color.g = coords.g; cubeContainer[1][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][5][0].position.y = coords.y; cubeContainer[1][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][5][1].position.y = coords.y; cubeContainer[1][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][5][0].material.color.r = coords.r; cubeContainer[1][5][0].material.color.g = coords.g; cubeContainer[1][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][6][0].position.y = coords.y; cubeContainer[1][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][6][1].position.y = coords.y; cubeContainer[1][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][6][0].material.color.r = coords.r; cubeContainer[1][6][0].material.color.g = coords.g; cubeContainer[1][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 1 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][7][0].position.y = coords.y; cubeContainer[1][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[1][7][1].position.y = coords.y; cubeContainer[1][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[1][7][0].material.color.r = coords.r; cubeContainer[1][7][0].material.color.g = coords.g; cubeContainer[1][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][0][0].position.y = coords.y; cubeContainer[2][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][0][1].position.y = coords.y; cubeContainer[2][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][0][0].material.color.r = coords.r; cubeContainer[2][0][0].material.color.g = coords.g; cubeContainer[2][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][1][0].position.y = coords.y; cubeContainer[2][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][1][1].position.y = coords.y; cubeContainer[2][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][1][0].material.color.r = coords.r; cubeContainer[2][1][0].material.color.g = coords.g; cubeContainer[2][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][2][0].position.y = coords.y; cubeContainer[2][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][2][1].position.y = coords.y; cubeContainer[2][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][2][0].material.color.r = coords.r; cubeContainer[2][2][0].material.color.g = coords.g; cubeContainer[2][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][3][0].position.y = coords.y; cubeContainer[2][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][3][1].position.y = coords.y; cubeContainer[2][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][3][0].material.color.r = coords.r; cubeContainer[2][3][0].material.color.g = coords.g; cubeContainer[2][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][4][0].position.y = coords.y; cubeContainer[2][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][4][1].position.y = coords.y; cubeContainer[2][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][4][0].material.color.r = coords.r; cubeContainer[2][4][0].material.color.g = coords.g; cubeContainer[2][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][5][0].position.y = coords.y; cubeContainer[2][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][5][1].position.y = coords.y; cubeContainer[2][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][5][0].material.color.r = coords.r; cubeContainer[2][5][0].material.color.g = coords.g; cubeContainer[2][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][6][0].position.y = coords.y; cubeContainer[2][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][6][1].position.y = coords.y; cubeContainer[2][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][6][0].material.color.r = coords.r; cubeContainer[2][6][0].material.color.g = coords.g; cubeContainer[2][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 2 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][7][0].position.y = coords.y; cubeContainer[2][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[2][7][1].position.y = coords.y; cubeContainer[2][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[2][7][0].material.color.r = coords.r; cubeContainer[2][7][0].material.color.g = coords.g; cubeContainer[2][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][0][0].position.y = coords.y; cubeContainer[3][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][0][1].position.y = coords.y; cubeContainer[3][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][0][0].material.color.r = coords.r; cubeContainer[3][0][0].material.color.g = coords.g; cubeContainer[3][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][1][0].position.y = coords.y; cubeContainer[3][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][1][1].position.y = coords.y; cubeContainer[3][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][1][0].material.color.r = coords.r; cubeContainer[3][1][0].material.color.g = coords.g; cubeContainer[3][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][2][0].position.y = coords.y; cubeContainer[3][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][2][1].position.y = coords.y; cubeContainer[3][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][2][0].material.color.r = coords.r; cubeContainer[3][2][0].material.color.g = coords.g; cubeContainer[3][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][3][0].position.y = coords.y; cubeContainer[3][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][3][1].position.y = coords.y; cubeContainer[3][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][3][0].material.color.r = coords.r; cubeContainer[3][3][0].material.color.g = coords.g; cubeContainer[3][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][4][0].position.y = coords.y; cubeContainer[3][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][4][1].position.y = coords.y; cubeContainer[3][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][4][0].material.color.r = coords.r; cubeContainer[3][4][0].material.color.g = coords.g; cubeContainer[3][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][5][0].position.y = coords.y; cubeContainer[3][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][5][1].position.y = coords.y; cubeContainer[3][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][5][0].material.color.r = coords.r; cubeContainer[3][5][0].material.color.g = coords.g; cubeContainer[3][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][6][0].position.y = coords.y; cubeContainer[3][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][6][1].position.y = coords.y; cubeContainer[3][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][6][0].material.color.r = coords.r; cubeContainer[3][6][0].material.color.g = coords.g; cubeContainer[3][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 3 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][7][0].position.y = coords.y; cubeContainer[3][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[3][7][1].position.y = coords.y; cubeContainer[3][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[3][7][0].material.color.r = coords.r; cubeContainer[3][7][0].material.color.g = coords.g; cubeContainer[3][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][0][0].position.y = coords.y; cubeContainer[4][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][0][1].position.y = coords.y; cubeContainer[4][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][0][0].material.color.r = coords.r; cubeContainer[4][0][0].material.color.g = coords.g; cubeContainer[4][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][1][0].position.y = coords.y; cubeContainer[4][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][1][1].position.y = coords.y; cubeContainer[4][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][1][0].material.color.r = coords.r; cubeContainer[4][1][0].material.color.g = coords.g; cubeContainer[4][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][2][0].position.y = coords.y; cubeContainer[4][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][2][1].position.y = coords.y; cubeContainer[4][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][2][0].material.color.r = coords.r; cubeContainer[4][2][0].material.color.g = coords.g; cubeContainer[4][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][3][0].position.y = coords.y; cubeContainer[4][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][3][1].position.y = coords.y; cubeContainer[4][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][3][0].material.color.r = coords.r; cubeContainer[4][3][0].material.color.g = coords.g; cubeContainer[4][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][4][0].position.y = coords.y; cubeContainer[4][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][4][1].position.y = coords.y; cubeContainer[4][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][4][0].material.color.r = coords.r; cubeContainer[4][4][0].material.color.g = coords.g; cubeContainer[4][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][5][0].position.y = coords.y; cubeContainer[4][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][5][1].position.y = coords.y; cubeContainer[4][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][5][0].material.color.r = coords.r; cubeContainer[4][5][0].material.color.g = coords.g; cubeContainer[4][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][6][0].position.y = coords.y; cubeContainer[4][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][6][1].position.y = coords.y; cubeContainer[4][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][6][0].material.color.r = coords.r; cubeContainer[4][6][0].material.color.g = coords.g; cubeContainer[4][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 4 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][7][0].position.y = coords.y; cubeContainer[4][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[4][7][1].position.y = coords.y; cubeContainer[4][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[4][7][0].material.color.r = coords.r; cubeContainer[4][7][0].material.color.g = coords.g; cubeContainer[4][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][0][0].position.y = coords.y; cubeContainer[5][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][0][1].position.y = coords.y; cubeContainer[5][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][0][0].material.color.r = coords.r; cubeContainer[5][0][0].material.color.g = coords.g; cubeContainer[5][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][1][0].position.y = coords.y; cubeContainer[5][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][1][1].position.y = coords.y; cubeContainer[5][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][1][0].material.color.r = coords.r; cubeContainer[5][1][0].material.color.g = coords.g; cubeContainer[5][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][2][0].position.y = coords.y; cubeContainer[5][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][2][1].position.y = coords.y; cubeContainer[5][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][2][0].material.color.r = coords.r; cubeContainer[5][2][0].material.color.g = coords.g; cubeContainer[5][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][3][0].position.y = coords.y; cubeContainer[5][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][3][1].position.y = coords.y; cubeContainer[5][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][3][0].material.color.r = coords.r; cubeContainer[5][3][0].material.color.g = coords.g; cubeContainer[5][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][4][0].position.y = coords.y; cubeContainer[5][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][4][1].position.y = coords.y; cubeContainer[5][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][4][0].material.color.r = coords.r; cubeContainer[5][4][0].material.color.g = coords.g; cubeContainer[5][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][5][0].position.y = coords.y; cubeContainer[5][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][5][1].position.y = coords.y; cubeContainer[5][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][5][0].material.color.r = coords.r; cubeContainer[5][5][0].material.color.g = coords.g; cubeContainer[5][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][6][0].position.y = coords.y; cubeContainer[5][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][6][1].position.y = coords.y; cubeContainer[5][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][6][0].material.color.r = coords.r; cubeContainer[5][6][0].material.color.g = coords.g; cubeContainer[5][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 5 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][7][0].position.y = coords.y; cubeContainer[5][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[5][7][1].position.y = coords.y; cubeContainer[5][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[5][7][0].material.color.r = coords.r; cubeContainer[5][7][0].material.color.g = coords.g; cubeContainer[5][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][0][0].position.y = coords.y; cubeContainer[6][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][0][1].position.y = coords.y; cubeContainer[6][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][0][0].material.color.r = coords.r; cubeContainer[6][0][0].material.color.g = coords.g; cubeContainer[6][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][1][0].position.y = coords.y; cubeContainer[6][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][1][1].position.y = coords.y; cubeContainer[6][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][1][0].material.color.r = coords.r; cubeContainer[6][1][0].material.color.g = coords.g; cubeContainer[6][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][2][0].position.y = coords.y; cubeContainer[6][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][2][1].position.y = coords.y; cubeContainer[6][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][2][0].material.color.r = coords.r; cubeContainer[6][2][0].material.color.g = coords.g; cubeContainer[6][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][3][0].position.y = coords.y; cubeContainer[6][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][3][1].position.y = coords.y; cubeContainer[6][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][3][0].material.color.r = coords.r; cubeContainer[6][3][0].material.color.g = coords.g; cubeContainer[6][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][4][0].position.y = coords.y; cubeContainer[6][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][4][1].position.y = coords.y; cubeContainer[6][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][4][0].material.color.r = coords.r; cubeContainer[6][4][0].material.color.g = coords.g; cubeContainer[6][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][5][0].position.y = coords.y; cubeContainer[6][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][5][1].position.y = coords.y; cubeContainer[6][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][5][0].material.color.r = coords.r; cubeContainer[6][5][0].material.color.g = coords.g; cubeContainer[6][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][6][0].position.y = coords.y; cubeContainer[6][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][6][1].position.y = coords.y; cubeContainer[6][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][6][0].material.color.r = coords.r; cubeContainer[6][6][0].material.color.g = coords.g; cubeContainer[6][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 6 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][7][0].position.y = coords.y; cubeContainer[6][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[6][7][1].position.y = coords.y; cubeContainer[6][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[6][7][0].material.color.r = coords.r; cubeContainer[6][7][0].material.color.g = coords.g; cubeContainer[6][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 0) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][0][0].position.y = coords.y; cubeContainer[7][0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][0][1].position.y = coords.y; cubeContainer[7][0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][0][0].material.color.r = coords.r; cubeContainer[7][0][0].material.color.g = coords.g; cubeContainer[7][0][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 1) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][1][0].position.y = coords.y; cubeContainer[7][1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][1][1].position.y = coords.y; cubeContainer[7][1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][1][0].material.color.r = coords.r; cubeContainer[7][1][0].material.color.g = coords.g; cubeContainer[7][1][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 2) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][2][0].position.y = coords.y; cubeContainer[7][2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][2][1].position.y = coords.y; cubeContainer[7][2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][2][0].material.color.r = coords.r; cubeContainer[7][2][0].material.color.g = coords.g; cubeContainer[7][2][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 3) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][3][0].position.y = coords.y; cubeContainer[7][3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][3][1].position.y = coords.y; cubeContainer[7][3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][3][0].material.color.r = coords.r; cubeContainer[7][3][0].material.color.g = coords.g; cubeContainer[7][3][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 4) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][4][0].position.y = coords.y; cubeContainer[7][4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][4][1].position.y = coords.y; cubeContainer[7][4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][4][0].material.color.r = coords.r; cubeContainer[7][4][0].material.color.g = coords.g; cubeContainer[7][4][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 5) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][5][0].position.y = coords.y; cubeContainer[7][5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][5][1].position.y = coords.y; cubeContainer[7][5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][5][0].material.color.r = coords.r; cubeContainer[7][5][0].material.color.g = coords.g; cubeContainer[7][5][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 6) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][6][0].position.y = coords.y; cubeContainer[7][6][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][6][1].position.y = coords.y; cubeContainer[7][6][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][6][0].material.color.r = coords.r; cubeContainer[7][6][0].material.color.g = coords.g; cubeContainer[7][6][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                } else if (i == 7 && j == 7) {
                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][7][0].position.y = coords.y; cubeContainer[7][7][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween.start();

                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {cubeContainer[7][7][1].position.y = coords.y; cubeContainer[7][7][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                    tween1.start();

                    var tween2 = new TWEEN.Tween({r: currentColor, g: currentColor, b: currentColor}).to({r: nextColor, g: nextColor, b: nextColor}, 1000).onUpdate((coords) => {cubeContainer[7][7][0].material.color.r = coords.r; cubeContainer[7][7][0].material.color.g = coords.g; cubeContainer[7][7][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                    tween2.start();
                }
                
                cubeContainer[i][j][0].userData.color = cubeContainer[i][j][0].userData.colorChange;
            }
        }
    }
}

document.getElementById("Piece_Activity_X").addEventListener('click', function hide() {document.getElementById("Piece_Activity").style.right = "-25vw"});
document.getElementById("Piece_Capture_X").addEventListener('click', function hide() {document.getElementById("Piece_Capture").style.right = "-25vw"});
document.getElementById("Square_Utilization_X").addEventListener('click', function hide() {document.getElementById("Square_Utilization").style.right = "-25vw"});
document.getElementById("Rook_Placement_X").addEventListener('click', function hide() {document.getElementById("Rook_Placement").style.right = "-25vw"});

var isCubePressed = false;
var cubePressed;
var activeSideAnnotation;

document.addEventListener('click', onDocumentMouseDown);

function onDocumentMouseDown(event) {
    if (firstClickStatus) {
        event.preventDefault();
        var mousePosition = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1);     
                                            
        var raycaster = new THREE.Raycaster();
        raycaster.linePrecision = 0.1;
        raycaster.setFromCamera(mousePosition, camera);

        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            console.log(intersects);
            for (var i = 0; i < intersects.length; i++) {
                if (intersects[i].object.isMesh === true && intersects[i].object.name.length > 0 && intersects[i].object.material.opacity > 0) {
                    if (intersects[i].object.name == "Annotation") {
                        var currentImgSrc = document.getElementById(intersects[i].object.userData.Annotation_type).firstElementChild.lastElementChild.src;
                        document.getElementById(intersects[i].object.userData.Annotation_type).firstElementChild.lastElementChild.src = "#";                        
                        document.getElementById(intersects[i].object.userData.Annotation_type).firstElementChild.lastElementChild.src = currentImgSrc;

                        if (activeSideAnnotation == undefined) {
                            document.getElementById(intersects[i].object.userData.Annotation_type).style.right = "0";                        
                        } else {
                            document.getElementById(activeSideAnnotation).style.right = "-25vw";
                            document.getElementById(intersects[i].object.userData.Annotation_type).style.right = "0";
                        }                        

                        activeSideAnnotation = intersects[i].object.userData.Annotation_type;

                        break;
                    } else if (intersects[i].object.name.length == 2) {
                        if (cubePressed == undefined || intersects[i].object.name != cubePressed.name) {
                            if (isCubePressed) {
                                cubePressed.material.color.r = cubePressed.userData.color;
                                cubePressed.material.color.g = cubePressed.userData.color;
                                cubePressed.material.color.b = cubePressed.userData.color;

                                for (var k = 0; k < 6; k++) {
                                    if (compositionContainer[k][0].userData.internalValue == compositionContainerValueMax) {
                                        var tween = new TWEEN.Tween({r: 1, g: 0.7216, b: 0}).to({r: 1, g: 1, b: 1}, 1000).onUpdate((coords) => {compositionContainer[k][0].material.color.r = coords.r; compositionContainer[k][0].material.color.g = coords.g; compositionContainer[k][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut);
                                        tween.start();
                                        break;
                                    }
                                }
                            }
                            
                            cubePressed = intersects[i].object;
                            isCubePressed = true;
                            intersects[i].object.material.color.set(0xffb700);

                            compositionContainerValue = compositionDictionary[activeProfileNum][activeDataTypeNum][intersects[i].object.name];
                            compositionContainerValueMax = compositionContainerValue.reduce((a, b) => Math.max(a, b), -Infinity);

                            for (var i = 0; i < 6; i++) {
                                compositionContainer[i][0].userData.internalValue = compositionContainerValue[i];

                                var currentPosY;
                                var currentScaleY = compositionContainer[i][0].scale.y;
                                var newPosY;
                                var newScaleY = compositionContainerValue[i] * 0.1;

                                if (newScaleY <= 0) {
                                    newScaleY = 0.01;
                                }

                                currentPosY = compositionContainer[i][0].geometry.parameters.height * compositionContainer[i][0].scale.y / 2;
                                newPosY = (2 * compositionContainerValue[i] - compositionContainer[i][0].geometry.parameters.height * compositionContainerValue[i]) / 2 * 0.1;

                                if (newPosY <= 0) {
                                    newPosY = 0.01;
                                }

                                if (i == 0) {
                                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[0][0].position.y = coords.y; compositionContainer[0][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween.start();

                                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[0][1].position.y = coords.y; compositionContainer[0][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween1.start();
                                } else if (i == 1) {
                                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[1][0].position.y = coords.y; compositionContainer[1][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween.start();

                                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[1][1].position.y = coords.y; compositionContainer[1][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween1.start();
                                } else if (i == 2) {
                                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[2][0].position.y = coords.y; compositionContainer[2][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween.start();

                                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[2][1].position.y = coords.y; compositionContainer[2][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween1.start();
                                } else if (i == 3) {
                                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[3][0].position.y = coords.y; compositionContainer[3][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween.start();

                                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[3][1].position.y = coords.y; compositionContainer[3][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween1.start();
                                } else if (i == 4) {
                                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[4][0].position.y = coords.y; compositionContainer[4][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween.start();

                                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[4][1].position.y = coords.y; compositionContainer[4][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween1.start();
                                } else if (i == 5) {
                                    var tween = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[5][0].position.y = coords.y; compositionContainer[5][0].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween.start();

                                    var tween1 = new TWEEN.Tween({y: currentPosY, yScale: currentScaleY}).to({y: newPosY, yScale: newScaleY}, 1000).onUpdate((coords) => {compositionContainer[5][1].position.y = coords.y; compositionContainer[5][1].scale.y = coords.yScale}).easing(TWEEN.Easing.Cubic.InOut);
                                    tween1.start();
                                }
                                
                            }

                            for (var kx = 0; kx < 6; kx++) {
                                if (compositionContainer[kx][0].userData.internalValue == compositionContainerValueMax) {
                                    var tween = new TWEEN.Tween({r: 1, g: 1, b: 1}).to({r: 1, g: 0.7216, b: 0}, 1000).onUpdate((coords) => {compositionContainer[kx][0].material.color.r = coords.r; compositionContainer[kx][0].material.color.g = coords.g; compositionContainer[kx][0].material.color.b = coords.b}).easing(TWEEN.Easing.Cubic.InOut).delay(1000);
                                    tween.start();
                                    break;
                                }
                            }
                        }
                        break;
                    }
                } 
                // else {
                //     alert([camera.position.x, camera.position.y, camera.position.z]);
                // }
            }
        }
    }
}

function animate() {
    renderer.render(scene, camera);
    orbit.update();
    TWEEN.update();
    labelRenderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);  