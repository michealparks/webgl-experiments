export const createRenderer = (config = {}) => {
  const {
    WebGLRenderer = window.THREE.WebGLRenderer,
    antialias = true,
    shadowMap = true
  } = config

  document.body.style.margin = '0px'

  const canvas = document.createElement('canvas')

  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.id = '#canvas'

  const renderer = new WebGLRenderer({
    canvas,
    antialias
  })

  /**
   * Taken from https://threejsfundamentals.org/threejs/lessons/threejs-responsive.html
   */
  renderer.handleResize = (camera) => {
    const pixelRatio = window.devicePixelRatio
    const width = canvas.clientWidth * pixelRatio | 0
    const height = canvas.clientHeight * pixelRatio | 0

    if (canvas.width !== width || canvas.height !== height) {
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
  }

  renderer.shadowMap.enabled = shadowMap
  renderer.setSize(window.innerWidth, window.innerHeight, false)
  renderer.setClearColor('#000', 1.0)

  return renderer
}
