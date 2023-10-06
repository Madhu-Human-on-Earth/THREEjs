import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import './fullcrres.css'
//cursor

const cursor={
    x:0,
    y:0
}
window.addEventListener('mousemove',(event)=>
{
    cursor.x=event.clientX/sizes.width-0.5
    cursor.y=-(event.clientY/sizes.height-0.5)


})

// Create a scene
const scene = new THREE.Scene();

// Create a canvas element (assuming you have it)
const canvas = document.querySelector('canvas.webgl');

// Sizes for the renderer
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// Create a mesh (cube)
// const geometry = new THREE.BoxGeometry(1, 1, 1,2,2,2);

// const positionsArray=new Float32Array([
//     0,0,0,
//     0,1,0,
//     1,0,0
// ])
// //triangle
// const positionsAttribute=new THREE.BufferAttribute(positionsArray,3)
// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position',positionsAttribute)

const geometry = new THREE.BufferGeometry();

const count=5000
const positionsArray=new Float32Array(count*3*3)
for(let i=0;i<count*3*3;i++){
    positionsArray[i]=(Math.random()-0.5)*4
}
const positionsAttribute=new THREE.BufferAttribute(positionsArray,3)
geometry.setAttribute('position',positionsAttribute)

const material = new THREE.MeshBasicMaterial({
     color: 0xff0000,
     wireframe:true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Create a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);

// const aspectratio=sizes.width/sizes.height
// const camera = new THREE.OrthographicCamera(-1*aspectratio,1*aspectratio,1,-1,0.1,100);

// camera.position.set(3, 3, 3);

camera.position.z=3
console.log("camera position",camera.position )
camera.lookAt(mesh.position);
scene.add(camera);

//control
const controls=new OrbitControls(camera,canvas)
controls.enableDamping=true


// Create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Render the scene once
renderer.render(scene, camera);




// Animate the scene
const clock = new THREE.Clock();
const tick = () => {
    const elapsedTime = clock.getElapsedTime();


    //update controls
    controls.update()




    // Render the scene

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);
