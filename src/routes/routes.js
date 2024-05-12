import { hello, stock } from "../controllers/helloWord.js";

class Rotas{
    constructor (app){
        this.app = app
    }
    createRoutes() {
        this.app.get('/', hello)
        this.app.get('/teste', stock)
    }
}

export {
    Rotas
}