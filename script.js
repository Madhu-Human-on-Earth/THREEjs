const scene=new THREE.Scene()

//group
const group=new THREE.Group()

group.position.y=0.5
group.scale.y=0.2
group.rotation.y=0.6

scene.add(group)

const cube1=new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'red'}),

)
group.add(cube1)



const cube2=new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'yellow'}),

)
group.add(cube2)
cube2.position.x=-2

const cube3=new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'green'}),

)
group.add(cube3)
cube3.position.x=2



//red cube
// const geometry=new THREE.BoxGeometry(1,1,1)
// const material=new THREE.MeshBasicMaterial({
//     color:'#ff0000'
// })

// const mesh=new THREE.Mesh(geometry,material)
// // mesh.position.y=-0.6
// // mesh.position.x=0.7
// // mesh.position.z=1
// scene.add(mesh)




// //scale
// // mesh.scale.x=2
// // mesh.scale.y=0.5
// // mesh.scale.z=0.5
// mesh.scale.set(2,0.5,0.5)

// //rotation
// //reorder
// mesh.rotation.reorder('YXZ')
// // mesh.rotation.y=3.1415926//pi
// mesh.rotation.x=Math.PI*0.25
// mesh.rotation.y=Math.PI*0.25


// mesh.position.set(0.7,-0.6,1)

//axes helper
const axesHelper=new THREE.AxesHelper()
scene.add(axesHelper)


//normalize
// mesh.position.normalize()
// console.log(mesh.position.normalize())
//vector_3

//console.log(mesh.position.length())



//scene
// const sizes={
//     width:800,
//     height:600
// }


//camera
// const camera=new THREE.PerspectiveCamera(90,sizes.width/sizes.height)
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight)

camera.position.z=3
// camera.position.y=1
// camera.position.x=1

//lgt bw dis from camers
//  console.log(mesh.position.distanceTo(camera.position))
scene.add(camera) 

// camera.lookAt(new THREE.Vector3(3,0,0))
//camera.lookAt(mesh.position)

//renderer
const canvas=document.querySelector('.webgl')
console.log(canvas)
const renderer=new THREE.WebGLRenderer({
canvas:canvas
})
// renderer.setSize(sizes.width,sizes.height)
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
