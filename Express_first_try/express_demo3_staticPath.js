//https://www.runoob.com/nodejs/nodejs-express-framework.html

var express = require("express");
var app = express();

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    console.log("接收到請求主頁面，請求者域名:%s\tIP:%s", req.hostname, req.ip);
    res.send("Hello World");
});

var server = app.listen(8081, function (req, res) {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Express應用實例，請訪問地址 http://%s:%s", host, port);

});