import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import imageSource from './images/world-map.gif'; // Import the image source correctly

// TEXTURES
// const image = new Image();
// const texture = new THREE.Texture(image);

// image.onload = () => {
//     texture.needsUpdate = true;
// };

// image.src = imageSource; // Use the imported image source

//texture 2

const loadingManager=new THREE.LoadingManager()

loadingManager.onStart=()=>{
    console.log('started')
}

loadingManager.onLoad=()=>{
    console.log('Loaded')
}
loadingManager.onProgress=()=>{
    console.log('progress')
}



const textureLoader = new THREE.TextureLoader();

const colorTexture=textureLoader.load('./images/world-map.gif');
// const alphaTexture=textureLoader.load('./ima');
//repeat
colorTexture.repeat.x=2;
colorTexture.repeat.y=3;

//mirror repeated
colorTexture.wrapS=THREE.MirroredRepeatWrapping;
colorTexture.wrapT=THREE.MirroredRepeatWrapping;

//offset
colorTexture.offset.x=0.5;
colorTexture.offset.y=0.5;

//rotation
colorTexture.rotation=Math.PI*0.25; 

// const texture=textureLoader.load('./images/H.jpg',
// ()=>{
//     console.log('loaded')
// },
// ()=>{
//     console.log('progress')
// },
// ()=>{
//     console.log('error')
// }

// )



// Sizes for the renderer
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// Create a scene
const scene = new THREE.Scene();

// colorTexture.minFilter=THREE.NearestFilter
colorTexture.magFilter=THREE.NearestFilter

// Create a canvas element (assuming you have it)
const canvas = document.querySelector('canvas.webgl');

// Create a mesh (cube)
// const geometry = new THREE.SphereGeometry(1, 32,16);
const geometry = new THREE.BoxGeometry(1,1,1);
//uv
console.log(geometry.attributes.uv)
const material = new THREE.MeshBasicMaterial({ map: colorTexture }); // Use the texture here

// const material = new THREE.MeshBasicMaterial({ map: texture }); // Use the texture here
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Create a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

// Create OrbitControls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // Add damping for smoother camera movement
controls.dampingFactor = 0.05; // Adjust damping factor as needed

// Track mouse movement
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
});

// Create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Render the scene initially
renderer.render(scene, camera);

// Animate the scene
const animate = () => {
    // Update camera and controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);

    // Call animate again on the next frame
    window.requestAnimationFrame(animate);
};

// Start the animation loop
animate();
