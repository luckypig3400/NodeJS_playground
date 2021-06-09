//https://www.runoob.com/nodejs/nodejs-express-framework.html

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Express Hello Word Example from runoob.com<br>");
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Express框架實例應用，訪問地址為 http://%s:%s", host, port);
});