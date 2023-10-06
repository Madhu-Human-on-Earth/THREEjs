// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import './fullcrres.css';

// // Cursor
// const cursor = {
//     x: 0,
//     y: 0,
// };

// window.addEventListener('mousemove', (event) => {
//     cursor.x = event.clientX / sizes.width - 0.5;
//     cursor.y = -(event.clientY / sizes.height - 0.5);
// });

// // Sizes for the renderer
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight,
// };

// // Create a scene
// const scene = new THREE.Scene();

// // Create a canvas element (assuming you have it)
// const canvas = document.querySelector('canvas.webgl');

// // Load your image texture
// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load('H.jpg');

// // Calculate the aspect ratio of the screen
// const aspectRatio = sizes.width / sizes.height;

// // Set the width and height of the image plane to cover the screen
// const imageWidth = aspectRatio * 3.141592; // Set the width of the image plane
// const imageHeight = aspectRatio*2; // Set the height of the image plane

// // Create a plane geometry with the image texture
// const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
// const material = new THREE.MeshBasicMaterial({ map: texture });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 2;
// camera.lookAt(mesh.position);
// scene.add(camera);

// // Control
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// // Create a renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);

// // Render the scene once
// renderer.render(scene, camera);

// // Animate the scene
// const clock = new THREE.Clock();
// const tick = () => {
//     const elapsedTime = clock.getElapsedTime();

//     // Update controls
//     controls.update();

//     // Render the scene
//     renderer.render(scene, camera);
//     window.requestAnimationFrame(tick);
// };

// window.requestAnimationFrame(tick);


import * as THREE from "three";
import * as globe from "three-globe";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

var globeMesh = globe.createGlobe(100, {
  texture: "c2_anime.gif",
  water: true,
  terrain: true,
});

scene.add(globeMesh);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 100, 0);
scene.add(light);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
