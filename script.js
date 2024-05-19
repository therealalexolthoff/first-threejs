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
const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl
})

// Adjust size and positions
renderer.setSize(sizes.width, sizes.height)
camera.position.z = 3

// Add content to scene
scene.add(mesh)
scene.add(camera)

// Render Scene
renderer.render(scene, camera)
