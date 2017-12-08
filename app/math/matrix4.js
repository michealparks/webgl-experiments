export default class Matrix4 {
  constructor () {
    this.isMatrix4 = true
    this.elements = new Float32Array(16)
    this.identity()
  }

  set (
    n11, n12, n13, n14,
    n21, n22, n23, n24,
    n31, n32, n33, n34,
    n41, n42, n43, n44
  ) {
    const te = this.elements

    te[0] = n11; te[1] = n21; te[2] = n31; te[3] = n41
    te[4] = n12; te[5] = n22; te[6] = n32; te[7] = n42
    te[8] = n13; te[9] = n23; te[10] = n33; te[11] = n43
    te[12] = n14; te[13] = n24; te[14] = n34; te[15] = n44

    return this
  }

  identity () {
    return this.set(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1)
  }

  makeTranslation (x, y, z) {
    return this.set(
      1, 0, 0, x,
      0, 1, 0, y,
      0, 0, 1, z,
      0, 0, 0, 1)
  }

  makeRotationX (theta) {
    const c = Math.cos(theta)
    const s = Math.sin(theta)

    return this.set(
      1, 0, 0, 0,
      0, c, -s, 0,
      0, s, c, 0,
      0, 0, 0, 1)
  }

  makeRotationY (theta) {
    const c = Math.cos(theta)
    const s = Math.sin(theta)

    return this.set(
       c, 0, s, 0,
       0, 1, 0, 0,
      -s, 0, c, 0,
       0, 0, 0, 1)
  }

  makeRotationZ (theta) {
    const c = Math.cos(theta)
    const s = Math.sin(theta)

    return this.set(
      c, -s, 0, 0,
      s, c, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1)
  }

  makeScale (x, y, z) {
    return this.set(
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, z, 0,
      0, 0, 0, 1)
  }

  makeShear (x, y, z) {
    return this.set(
      1, y, z, 0,
      x, 1, z, 0,
      x, y, 1, 0,
      0, 0, 0, 1)
  }

  multiply (m) {
    return this.multiplyMatrices(this, m)
  }

  multiplyMatrices (a, b) {
    const ae = a.elements
    const be = b.elements
    const te = this.elements

    const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12]
    const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13]
    const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14]
    const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15]

    const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12]
    const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13]
    const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14]
    const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15]

    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44

    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44

    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44

    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44

    return this
  }
}