var http = require('http');

//create a server object:
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	// The first argument of the res.writeHead() method is the status code,
	// 200 means that all is OK,
	// the second argument is an object containing the response headers.
	res.write('Hello World!'); //write a response to the client
	res.end; //end the response
}).listen(8080); //the server object listens on port 8080