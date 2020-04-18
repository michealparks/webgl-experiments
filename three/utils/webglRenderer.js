import {
  WebGLRenderer
} from './three.module.js'

export const webglRenderer = (config = {}) => {
  const {
    canvas = document.createElement('canvas'),
    antialias = true
  } = config

  const renderer = new WebGLRenderer({
    canvas,
    antialias
  })

  renderer.alpha = true
  renderer.gammaInput = true
  renderer.gammaOutput = true
  renderer.shadowMap.enabled = true
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor('#000', 1.0)

  return renderer
}
