import {build} from './app.js'

const serverPort = process.env.serverPort

var serverBuilder = new build({
    logger: true
})

const server = serverBuilder.startRoutes()

server.listen({ port: serverPort }, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    console.log(`Server running on ${address}`)
})