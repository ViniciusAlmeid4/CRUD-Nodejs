import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
fastify.get('/', (req, res) =>{
    res.send('Hello Word')
})

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log('Server is now listening')
})