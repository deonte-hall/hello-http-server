// write your code here

const http = require('http');

const server = http.createServer(function (req, res){
    var ohNo = "THE MISS";
    console.log('Recieved a ' + req.method + ' method on the port: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'


});
    res.end("Hello World");


})

server.listen(3000, 'localhost', null, function(){
    console.log("Server is listening on port 4650, enjoy!");

})
