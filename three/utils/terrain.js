/**
 *
 */
export const createTerrain = (config = {}) => {
  const {
    PlaneBufferGeometry = window.THREE.PlaneBufferGeometry,
    width,
    height,
    widthSegments,
    heightSegments
  } = config

  const geometry = new PlaneBufferGeometry(width, height, widthSegments, heightSegments)
}
