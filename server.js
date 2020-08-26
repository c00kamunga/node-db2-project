const express = require('express')
const helmet = require('helmet')

const carsRouter = require('./carsRouter')

const server = express()

server.use(helmet())
server.use(express.json())

// server.get('/', (req, res) => {
//     res.send('<h1>Hello Everyone Welcome to Cookamunga</h1>')
// })

server.use(carsRouter)

module.exports = server