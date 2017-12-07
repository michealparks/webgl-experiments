import {
  Matrix4,
  WebGLRenderer
} from '/three.module.js'

import {scene, camera, pointLight} from '/world.js'
import Cube from '/objects/cube.js'

const renderer = new WebGLRenderer({
  canvas: window.canvas,
  antialias: true,
  preserveDrawingBuffer: true
})

const render = renderer.render.bind(renderer)

renderer.gammaInput = true
renderer.gammaOutput = true
renderer.shadowMap.enabled = true

renderer.setSize(
  window.innerWidth * window.devicePixelRatio,
  window.innerHeight * window.devicePixelRatio)

renderer.setClearColor('#000', 1.0)

const rotateFactor = 0.005

const RotateMatrix = new Matrix4()
  .makeRotationX(rotateFactor)
  .multiply(new Matrix4().makeRotationY(rotateFactor))
  .multiply(new Matrix4().makeRotationZ(rotateFactor))

const translateMatrix = new Matrix4()

const cubeTranslation = (i, n) => {
  const x = ((i % 3) * n) - n
  const y = (((i % 9) / 3 | 0) * n) - n
  const z = ((i / 9 | 0) * n) - n
  translateMatrix.makeTranslation(x, y, z)
}

const cubes = []
for (let i = 0; i < 27; i += 1) {
  cubes.push(Cube(50, 50, 50, '#333', true, true))

  cubeTranslation(i, 50)
  cubes[i].applyMatrix(translateMatrix)
  scene.add(cubes[i])
}

let x = 0
const tick = (timestamp) => {
  render(scene, camera)

  x += 0.075 * Math.PI
  const size = 2.5 * Math.sin(x)

  camera.applyMatrix(RotateMatrix)

  console.log(size)

  for (let i = 0; i < 27; i += 1) {
    // cubes[i].applyMatrix(RotateMatrix)

    cubeTranslation(i, size)
    cubes[i].applyMatrix(translateMatrix)
  }
}

export default tick
