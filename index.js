const server = require('./server')

const port = process.env.PORT || 2319

server.listen(port, () => {
    console.log('\n server listening on port ' + port)
})