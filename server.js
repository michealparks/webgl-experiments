const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/app`))
app.use(express.static(`${__dirname}/node_modules/three/build`))
app.use(express.static(`${__dirname}/node_modules/three/src`))
app.listen(5000)
console.log('listening on port 5000')
