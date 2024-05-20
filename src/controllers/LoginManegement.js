import jws from 'jsonwebtoken'

function login(req, res) {
    /*  Code to collect data from database  */
    const senha = '123'
    const user = 'teste'

    if(user == res.request.body.user && senha == res.request.body.pass){

        res.send('Login bem sucedido')

    } else {
        if (user != res.request.body.user) {
            res.send('Usuário incorreto')
        }

        if (senha != res.request.body.senha) {
            res.send('Senha incorreta')
        }

        res.send()
    }

    console.log(res.request.body);    
}

export {
    login
}