
import * as THREE from 'three';


const canvas=document.querySelector('canvas.webgl');

//sizes
const sizes={
    width:800,
    height:600
}


//scene
const scene=new THREE.Scene();

//object
const mesh=new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,5,5,5),
    new THREE.MeshBasicMaterial({color:'red'})
)
scene.add(mesh)

//camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
camera.position.x=2
camera.position.y=2
camera.position.z=2
camera.lookAt(mesh.position)
scene.add(camera);

//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(sizes.width,sizes.height);

//time
  const clock=new THREE.Clock();
// gsap.to(cube.position,{duration:1, delay:1,x:2 })
// gsap.to(cube.position,{duration:10, delay:8,x:9 })


//animations
const tick=()=>{
    //console.log('tick')
//update objects
 const elapsedtime=clock.getElapsedTime();
mesh.rotation.y=elapsedtime
// console.log(elapsedtime);
        // cube.position.x=Math.sin(elapsedtime*7);
        // cube2.position.y=Math.sin(elapsedtime*3.1415);

    //render
    renderer.render(scene,camera);
    window.requestAnimationFrame(tick);
}

tick();