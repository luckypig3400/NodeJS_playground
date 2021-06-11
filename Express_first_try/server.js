var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// 創建application/x-www-form-urlencoded 編碼解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get', urlencodedParser, function (req, res) {
    //輸出JSON格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});



var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("表單接收範例，訪問地址http://%s:%s", host, port);

});