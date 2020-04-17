const express = require('express')
const app = express()

const dirs = [
  'three',
  'node_modules/three/src',
  'node_modules/three/build'
]

for (const dir of dirs) {
  app.use(express.static(`${__dirname}/${dir}`))
}

app.listen(5000)
console.log('listening on port 5000')
