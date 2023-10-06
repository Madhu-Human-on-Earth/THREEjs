import './fullcrres.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'


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

window.addEventListener('resize', () => {

    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))  
})

    window.addEventListener('dblclick',()=>{

 const fullscreenElement=document.fullscreenElement || document.webkitFullscreenElement


    if(!fullscreenElement)
    {
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    }
    else{
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }

        // if(!document.fullscreenElement)
        // {
        //     canvas.requestFullscreen()
        // }
        // else{
        //     document.exitFullscreen()
        // }
    })

// Create a mesh (cube)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
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

    // mesh.rotation.y = elapsedTime;


    //update controls
    controls.update()




    // Render the scene

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);
