import {build} from './app.js'

const serverPort = process.env.serverPort

var serverBuilder = new build({
    logger: false
})

const server = serverBuilder.createApp()
serverBuilder.configureApp()
serverBuilder.startRoutes()

server.listen({ port: serverPort || 8080 }, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    console.log(`Server running on ${address}`)
})