//Load the http module to create an http server
var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello Phonegap\n");
});

// Listen on port  8000 , ip defaults to 127.0.0.1
server.listen(3333);

// put a friendly message
console.log("Server Runing at http://127.0.0.1:3333/");

//require es una libreria que trabaja con mas librerias 