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
mesh.position.y = 1
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
mesh.position.set(0.7, -0.6, 1)

// Playing with scale, rotation, and position
mesh.scale.set(2,0.5,0.5)
mesh.rotation.y = Math.PI * .75
// Always rotate the y first
mesh.position.z = -.5

// Add content to scene
scene.add(mesh)
scene.add(camera)
scene.add(axesHelper)


// Setting the lookat
camera.lookAt(mesh.position)

// Render Scene
renderer.render(scene, camera)
