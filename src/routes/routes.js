import { hello } from "../controllers/Users.js";

class Rotas{
    constructor (app){
        this.app = app
    }
    createRoutes() {
        this.app.get('/', hello)
        // this.app.post('/teste', login)
    }
}

export {
    Rotas
}