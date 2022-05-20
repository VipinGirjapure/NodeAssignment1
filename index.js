const http = require("http"); //to import http module from node.js packages

//creating server object
http
  .createServer(function (req, res) {
    res.write("Hi Server"); //simple text response
    // res.write("<h1>Hi Server</h1>"); //simple text response
    res.end(); //to end response
  })
  .listen(1212); //to acess sever to local machine
