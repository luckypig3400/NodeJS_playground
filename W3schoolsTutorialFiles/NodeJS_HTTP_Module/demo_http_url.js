var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(req.url);
	// try to open http://localhost:8080/summer in browser
	res.end();
}).listen(8080);