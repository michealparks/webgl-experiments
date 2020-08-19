/**
 * Maps a value from one space to another.
 *
 * @param {number} val
 * @param {number} smin
 * @param {number} smax
 * @param {number} emin
 * @param {number} emax
 *
 * @returns {number}
 */
const map = (val, smin, smax, emin, emax) => {
  const t = (val - smin) / (smax - smin)
  return (emax - emin) * t + emin
}

/**
 * Stacks multiple noise samples together,
 * converting random looking numbers into a nice flowing cloud field.
 * See https://www.redblobgames.com/maps/terrain-from-noise/
 * and https://blog.mozvr.com/low-poly-style-terrain-generation/
 *
 * @param {function} noise Simplex noise function
 * @param {*} nx
 * @param {*} ny
 * @param {*} octaves
 *
 * @returns {number}
 */
const octave = (noise, nx, ny, octaves) => {
  let val = 0
  let freq = 1
  let max = 0
  let amp = 1
  let i = 0

  while (i < octaves) {
    val += noise(nx * freq, ny * freq) * amp
    max += amp
    amp /= 2
    freq *= 2
    i++
  }

  return val / max
}

const degToRad = deg => deg * Math.PI / 180

export const math = {
  map,
  octave,
  degToRad
}
