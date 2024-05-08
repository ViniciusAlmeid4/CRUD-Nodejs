import fastify from 'fastify'

import {createRoutes} from './routes/routes.js'

function build(opts={}) {
  const app = fastify(opts)

  createRoutes(app)

  return app
}

export {
  build
}