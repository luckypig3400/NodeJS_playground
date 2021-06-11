var express = require("express");
var app = express();
var bodyParser = require("body-parser");



var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("表單接收範例，訪問地址http://%s:%s", host, port);
    
});