import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap';
import * as dat from 'dat.gui'


console.log(dat)

// debug
const gui=new dat.GUI(
    {
        closed:true,//control 
        width:400
    }
)

// gui.hide()//click h
const params={
    color:0xff38,
    spin:()=>{//rotation animation
        gsap.to(mesh.rotation,{
            duration:1,
            y:mesh.rotation.y+10
        })
        }
    }


gui.add(params,'spin')


//baic cube

//camera positions

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
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: params.color });
const mesh = new THREE.Mesh(geometry, material);
// mesh.visible=false
scene.add(mesh);


//  Debug
// gui.add(mesh.position,'y').min(-3).max(3).step(0.01).name('elevation')
gui.add(mesh.position,'y',-3,3,0.01)
gui.add(mesh.position,'x',-3,3,0.01)
gui.add(mesh.position,'z',-3,3,0.01)

//boolean control..check box
gui.add(mesh,'visible')

gui.add(material,'wireframe')

//add color
gui.addColor(params,'color').
onChange(()=>{
    material.color.set(params.color)
})

// Create a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);


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


    controls.update()




    // Render the scene

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);
