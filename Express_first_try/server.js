var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use('public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("表單接收範例，訪問地址http://%s:%s", host, port);
    
});