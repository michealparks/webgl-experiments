const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/node_modules/three`))
app.use(express.static(`${__dirname}/three`))
app.use('/assets', express.static(`${__dirname}/assets`))

app.listen(5000)
console.log('listening on port 5000')
