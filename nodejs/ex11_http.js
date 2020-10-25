const http = require('http');
const serve = http.createServer(function (req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<h1>Acho que e melhor usar express, nao?</h1>');
 })

 const porta = 3456
 serve.listen(porta, function () { 
     console.log(`Escutando a ${porta}`)
  })