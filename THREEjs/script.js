const scene=new THREE.Scene()

//red cube
const geometry=new THREE.BoxGeometry(1,1,1)
const material=new THREE.MeshBasicMaterial({
    color:'#ff0000'
})

const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)


//scene
// const sizes={
//     width:800,
//     height:600
// }


//camera
// const camera=new THREE.PerspectiveCamera(90,sizes.width/sizes.height)
const camera=new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight)

camera.position.z=6


scene.add(camera) 

//renderer
const canvas=document.querySelector('.webgl')
console.log(canvas)
const renderer=new THREE.WebGLRenderer({
canvas:canvas
})
// renderer.setSize(sizes.width,sizes.height)
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
