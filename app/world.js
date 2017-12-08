import {
  Scene,
  Mesh,
  PerspectiveCamera,
  PointLight,
  AmbientLight,
  PlaneBufferGeometry,
  SphereBufferGeometry,
  MeshStandardMaterial
} from '/three.module.js'

import Vector3 from '/math/vector3.js'

const scene = new Scene()
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)

const focus = new Vector3(0, 1, 700)
camera.position.set(focus.x, focus.y, focus.z)
camera.lookAt(focus)

const pointLight = new PointLight(0xffffff, 100, 600, 2)
pointLight.position.set(0, 400, 0)
pointLight.castShadow = true
scene.add(pointLight)

const pointLight2 = new PointLight(0xffffff, 50, 500, 2)
pointLight2.position.set(0, 300, 400)
pointLight2.castShadow = true
scene.add(pointLight2)

const pointLight3 = new PointLight(0xffffff, 10, 300, 2)
pointLight3.position.set(200, 100, 200)
pointLight3.castShadow = true
scene.add(pointLight3)

const ambientLight = new AmbientLight(0x404040, 0.5)
scene.add(ambientLight)

const geometry = new SphereBufferGeometry(25, 25, 25)
const material = new MeshStandardMaterial({color: '#fff'})
const sphere = new Mesh(geometry, material)
sphere.position.set(200, -175, 200)
sphere.receiveShadow = true
scene.add(sphere)

const planeGeometry = new PlaneBufferGeometry(700, 700)
const planeMaterial = new MeshStandardMaterial({color: '#ddd'})
const plane = new Mesh(planeGeometry, planeMaterial)
plane.position.set(0, -200, 0)
plane.rotation.set(-1, 0, 0)
plane.receiveShadow = true
scene.add(plane)

export {scene, camera, pointLight, ambientLight, plane}
