import Fastify from 'fastify'
import FastCookies from "@fastify/cookie";

import {Rotas} from './routes/routes.js'

class build {
  constructor(opts) {
    this.app = Fastify(opts)
    this.fastCookies = FastCookies
  }
  createApp(){
    return this.app
  }
  configureApp(){
    this.app.register(this.fastCookies, {
      secret: "my-secret", // for cookies signature
      hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
      parseOptions: {}  // options for parsing cookies
    })
  }
  startRoutes(){
    var rotas = new Rotas(this.app)
    rotas.createRoutes()
  }
}

export {
  build
}