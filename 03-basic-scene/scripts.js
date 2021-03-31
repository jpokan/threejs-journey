// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
	width: 800,
	height: 600,
}
// Perspective Camera
/* 
	First parameter is field of view - Vertical vision angle in degrees
	Second parameter is aspect ratio - Size of a container
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
/*
	At this point, the camera is positioned in the center and inside the cube, hence it will produce a black scene.
*/
// Positioning the camera
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
