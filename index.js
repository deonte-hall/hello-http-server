// write your code here

const http = require('http');



const server = http.createServer(req ,res){

    console.log("The server is up!");

    res.end("Byeeee")

}

