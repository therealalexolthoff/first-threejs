import * as THREE from 'three'

// Non-three.js variable set up
const canvasEl = document.querySelector('.webgl')
const sizes = {
    width: 800,
    height: 600
}



// Three.js variable set up
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry,material)

// A different way to create a mesh

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000}) 
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000}) 
)

const group = new THREE.Group()
const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl
})


// For visualizing the axess in 3D space
const axesHelper = new THREE.AxesHelper(3)





// Adjust size and positions
renderer.setSize(sizes.width, sizes.height)
camera.position.z = 3

// Using  a few important methods
console.log(mesh.position.length())
console.log(mesh.position.distanceTo(camera.position))
console.log(mesh.position.normalize())

//  Playing with scale, rotation, and position
//  Always rotate the y first
//  Setting positions, scale, and rotation for the 3 meshes
mesh.scale.set(2,0.5,0.5)
mesh.rotation.y = Math.PI
mesh.rotation.z = Math.PI * .5
cube.scale.set(2,0.5,0.5)
cube.position.x = -1 
cube.rotation.y = Math.PI
cube.rotation.z = Math.PI * .5
cube2.scale.set(2,0.5,0.5)
cube2.position.x = 1 
cube2.rotation.y = Math.PI
cube2.rotation.z = Math.PI * .5


// Add content to scene
scene.add(group)
scene.add(camera)
scene.add(axesHelper)
group.add(mesh)
group.add(cube)
group.add(cube2)

// Changing the group 

group.position.y = 0 
group.position.z = 2
group.scale.x = .4
group.scale.y = .4
group.rotation.x = 2.5



// Setting the lookat
// camera.lookAt(mesh.position)

// Setting up some animations\


// Animation that is subject to change based on framerate of device
const simpleRotation = () =>  {
    group.rotation.y += .01
}

// Simple way to normalize framerate
let time = Date.now()

const tick = () => {
    
    
    // simpleRotation()
    

    // Normalizing continued
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime
    mesh.rotation.y += 0.01 * deltaTime

    // Render Scene
    renderer.render(scene, camera)

    // Run this function on the next frame (forever)
    window.requestAnimationFrame(tick)
}


tick()



