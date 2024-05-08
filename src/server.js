import {build} from './app.js'

const serverPort = process.env.serverPort

const server = build({
    logger: true
})

server.listen({ port: serverPort }, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    console.log(`Server running on ${address}`)
})