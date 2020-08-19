/**
 *
 * @param {*} config
 */
export const createCamera = (config = {}) => {
  const {
    PerspectiveCamera = window.THREE.PerspectiveCamera,
    fov = 45,
    aspect = window.innerWidth / window.innerHeight,
    near = 1,
    far = 1000
  } = config

  const camera = new PerspectiveCamera(fov, aspect, near, far)

  return camera
}
