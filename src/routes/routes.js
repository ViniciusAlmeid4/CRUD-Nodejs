import { hello, bye } from "../controllers/helloWord.js";

class Rotas{
    constructor (app){
        this.app = app
    }
    createRoutes() {
        this.app.get('/', hello)
        this.app.get('/1', bye)
    }
}

export {
    Rotas
}