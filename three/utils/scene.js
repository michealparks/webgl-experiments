
export const createScene = (config = {}) => {
  const {
    Scene = window.THREE.Scene
  } = config

  const scene = new Scene()

  return scene
}
