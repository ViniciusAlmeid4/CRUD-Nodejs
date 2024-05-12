import Fastify from 'fastify'

import {Rotas} from './routes/routes.js'

class build {
  constructor(opts) {
    this.app = Fastify(opts)
  }
  startRoutes(){
    var rotas = new Rotas(this.app)
    rotas.createRoutes()
    return this.app
  }
}

export {
  build
}