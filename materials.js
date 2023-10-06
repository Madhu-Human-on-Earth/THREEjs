import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui'

//degug ui
const gui=new dat.GUI()



//textures
const textureLoader=new THREE.TextureLoader()
const cubeTextureLoader=new THREE.CubeTextureLoader()



const doorColorTexture = textureLoader.load('./static/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('./static/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./static/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./static/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('./static/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./static/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./static/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('./static/textures/matcaps/8.png')
const gradientTexture = textureLoader.load('./static/textures/gradients/5.jpg')

//env

                    
const environmentMapTexture=cubeTextureLoader.load(

    
    [ 
    './static/textures/environmentMaps/0/px.jpg',
    './static/textures/environmentMaps/0/nx.jpg',
    './static/textures/environmentMaps/0/py.jpg',
    './static/textures/environmentMaps/0/ny.jpg',
    './static/textures/environmentMaps/0/pz.jpg',
    './static/textures/environmentMaps/0/nz.jpg'
    ]
);

//canva
const canvas=document.querySelector('.webgl');

//scene
const scene=new THREE.Scene();

//objects
// const material=new THREE.MeshBasicMaterial({color:'red'})
   //way -01
    // {
    //     map:doortexture,
    //     metalnessMap:doormetalness,
    //     roughnessMap:doorroughness
    // }
//)
//  way -02
//  material.map=doortexture
// material.color.set('pink')
// material.color=new THREE.Color('green')
// material.wireframe=true
// material.opacity=0.5
// material.transparent=true
//  material.alphaMap=doortexture
//  material.side=THREE.DoubleSide


//mesh normal material

// const material=new THREE.MeshNormalMaterial()
// material.wireframe=true 
// material.flatShading=true 

//meshMatcapmaterial
// const material=new THREE.MeshMatcapMaterial()
// material.matcap=doortexture


// //MeshdEPTHmATERIAL
//  const material=new THREE.MeshDepthMaterial()

//MeshLambertMaterial
//  const material=new THREE.MeshLambertMaterial()

//MESH PHONG MATERIAL
// const material=new THREE.MeshPhongMaterial()
//  material.shininess=100
//     material.specular=new THREE.Color(0x1188ff)

//MeshTOONMaterial
// const material=new THREE.MeshToonMaterial()
// material.gradientMap=doortexture

//mesh standard material
// const material=new THREE.MeshStandardMaterial()
// material.metalness=0.7
// material.roughness=0.2
// material.map=doormetalness
// material.aoMapIntensity=1
// material.aoMap=doormetalness
// material.displacementMap=doormetalness
// material.displacementScale=0.05
// material.metalnessMap=doormetalness
// material.normalMap=doormetalness
// material.roughnessMap=doorroughness
// material.normalScale.set(0.5,0.5)
// material.transparent=true
// material.alphaMap=doormetalness

const material=new THREE.MeshStandardMaterial()
material.metalness=0.5
material.roughness=0.2

material.envMap=environmentMapTexture
material.needsUpdate = true;




//gui
gui.add(material,'metalness').min(0).max(1).step(0.0001)
gui.add(material,'roughness').min(0).max(1).step(0.0001)
gui.add(material,'wireframe')
gui.add(material,'displacementScale').min(0).max(1).step(0.0001)
const sphere=new THREE.Mesh(
    new THREE.SphereGeometry(0.5,64,64),
    material
)





sphere.position.x=-1.5

const plane=new THREE.Mesh(
    new THREE.PlaneGeometry(1,1),
    material
)

plane.geometry.setAttribute('uv2',
new THREE.BufferAttribute(
    plane.geometry.attributes.uv.array,2
)
)


const toru=new THREE.Mesh(
    new THREE.TorusGeometry(0.3,0.2,64,32),
    material
)

toru.geometry.setAttribute('uv2',
new THREE.BufferAttribute(
    toru.geometry.attributes.uv.array,2
)
)


toru.position.x=1.5
scene.add(sphere,plane,toru)

//Light
const ambientLight=new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientLight)

const pointLight=new THREE.PointLight(0xffffff,0.5)
pointLight.position.x=2
pointLight.position.y=3
pointLight.position.z=4
scene.add(pointLight)

//sizes
const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}

window.addEventListener('resize',()=>{
    //update sizes
    sizes.width=window.innerWidth;
    sizes.height=window.innerHeight;

    //update camera
    camera.aspect=sizes.width/sizes.height;
    camera.updateProjectionMatrix();

    //update renderer
    renderer.setSize(sizes.width,sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
})

//base camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100);
camera.position.x=1
camera.position.y=1
camera.position.z=2
scene.add(camera)

//controls
const controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;

//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

//clock
const clock=new THREE.Clock();

const tick=()=>{
    const elapsedTime=clock.getElapsedTime();

    //update objects
    sphere.rotation.y=0.1*elapsedTime;
    plane.rotation.y=0.1*elapsedTime;
    toru.rotation.y=0.1*elapsedTime;

    sphere.rotation.x=0.15*elapsedTime;
    plane.rotation.x=0.15*elapsedTime;
    toru.rotation.x=0.15*elapsedTime;
    //update controls
    controls.update();

    //render
    renderer.render(scene,camera);

    //call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick()   //  

