
import * as THREE from 'three';
import gsap from 'gsap'
//canvas
console.log(gsap);
const canvas=document.querySelector('canvas.webgl');

//scene
const scene=new THREE.Scene();

//object

//sqaure
const geometry=new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshBasicMaterial({
    color:'red'
});
const cube = new THREE.Mesh (geometry ,material);
scene.add(cube);
const cube2 = new THREE.Mesh (geometry ,material);
cube2.position.x=1.44;
scene.add(cube2);
//sizes
const sizes={
    width:800,
    height:600
}

//camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
camera.position.z=3;
scene.add(camera);
//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(sizes.width,sizes.height);

//time
//const clock=new THREE.Clock();
gsap.to(cube.position,{duration:1, delay:1,x:2 })
gsap.to(cube.position,{duration:10, delay:8,x:9 })


//animations
const tick=()=>{
    //console.log('tick')
//update objects
// const elapsedtime=clock.getElapsedTime();

// console.log(elapsedtime);
        // cube.position.x=Math.sin(elapsedtime*7);
        // cube2.position.y=Math.sin(elapsedtime*3.1415);

    //render
    renderer.render(scene,camera);
    window.requestAnimationFrame(tick);
}

tick();