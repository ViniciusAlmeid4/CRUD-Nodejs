import {} from  '../models'

function hello(req, res) {
    res.send('Hello Word!!!')
}
function bye(req, res) {
    res.send('Bye Word!!!')
}

export {
    hello, bye
}