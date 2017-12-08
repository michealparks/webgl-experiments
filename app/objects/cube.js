import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial
} from '/three.module.js'

const Cube = (l, w, h, color, cast, recieve) => {
  const geometry = new BoxBufferGeometry(l, w, h)
  const material = new MeshStandardMaterial({color})
  const cube = new Mesh(geometry, material)

  cube.castShadow = cast || false
  cube.receiveShadow = recieve || false

  return cube
}

export default Cube
