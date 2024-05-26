import * as THREE from 'three'

// import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
// Non-three.js  set up

const canvasEl = document.querySelector('.webgl')
// const cursor = {
//     x: 0,
//     y: 0
// }

// window.addEventListener('mousemove', (e) => {
//     cursor.x = e.clientX / sizes.width - 0.5
//     cursor.y = - (e.clientY / sizes.height - 0.5)
//     console.log(cursor)
// })


// Different ways to set up the size of the scene (canvas)

// Static
// const sizes = {
//     width: 800,
//     height: 600
// }
// Full screen (once you get rid of margins)
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// const sizes = {
//     width: window.visualViewport.width,
//     height: window.visualViewport.height
// }



// Three.js variable set up
const scene = new THREE.Scene()

// Playing with cameras
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio,1 * aspectRatio,1,-1,0.1,100)
// More Three.js set up
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
camera.position.z = 2.5

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
group.position.z = 1
group.scale.x = .4
group.scale.y = .4
// group.rotation.x = 2.5

// Setting up controls
const controls = new OrbitControls(camera,canvasEl)
controls.enableDamping = true
// Setting the lookat
// camera.lookAt(mesh.position)

// Setting up some animations\


// Animation that is subject to change based on framerate of device
// const simpleRotation = () =>  {
//     group.rotation.y += .01
// }

// Simple way to normalize framerate
// let time = Date.now()

// Three.js way to manage time
const clock = new THREE.Clock()




const tick = () => {
    
    
    // simpleRotation()
    

    // Normalizing continued
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // mesh.rotation.y += 0.01 * deltaTime

    // Three.js way to normalize
    // const elapsedTime = clock.getElapsedTime()
    // group.rotation.y = elapsedTime

    // Using Cos and Sin for animation
    // group.position.x = Math.cos(elapsedTime)
    // group.position.y = Math.sin(elapsedTime)
    
    // Using GSAP to create a weird bouncing effect
    // gsap.to(group.position, { duration: 1, delay: 1, x: 1 })
    // gsap.to(group.position, { duration: 1, delay: 1, x: -1 })

    // Cursor movement moves camera
    // Note: Changing the value the sin and cos acts on will increase the rate at which the object turns. Making this number 4 will result in one full rotation in either direction
    // Changing the number outside the sin and cos will increase the distance from the camera and thus improve the ability to visualize the rotation
    // Setting a y here will make sure that you can see the top and bottom. Also, removing the position update on z will get cause the rotation to lack a realistic turn
    // camera.position.x = Math.sin(cursor.x * Math.PI * 4) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 4) * 3
    // camera.position.y = cursor.y * 2
    // camera.lookAt(group.position)

    // Update Controls
    controls.update()

    // Render Scene
    renderer.render(scene, camera)

    // Run this function on the next frame (forever)
    window.requestAnimationFrame(tick)
}


tick()



