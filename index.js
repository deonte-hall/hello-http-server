// write your code here

const http = require('http');

const server = http.createServer(function (req, res){

    console.log('Recieved a ' + req.method + ' method on the port: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World");


})

server.listen(8080, 'localhost', null, function(){
    console.log("Server is listening on port localhost:3000, enjoy!");

})
