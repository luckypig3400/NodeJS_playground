var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("<h3>The date and time are currently:</h3>");
	res.write(dt.myDateTime());
	res.end();
}).listen(8080);