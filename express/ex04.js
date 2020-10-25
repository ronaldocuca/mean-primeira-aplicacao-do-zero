const express = require('express')
const server = express();


server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes'))
    .post((req, res) => res.send('Novo Clientes'))
    .put((req, res) => res.send('Altera de Clientes'))
    .delete((req, res) => res.send('Deleta Clientes'))




server.listen(3000, () => {
    console.log('Executando...')
})
