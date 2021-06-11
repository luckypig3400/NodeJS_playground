//https://www.runoob.com/nodejs/nodejs-express-framework.html

var express = require("express");
var app = express();

// 主頁輸出"Hello World"
app.get('/', function (req, res) {
    console.log("主頁GET請求");
    res.send("Hello GET from main page");
});

// POST請求
app.post('/', function (req, res) {
    console.log("主頁POST請求");
    res.send("Hello POST from main page");
});

app.get('/del_user', function (req, res) {
    console.log("/del_user 可以再加入程式碼響應DELETE請求");
    res.send("刪除頁面...功能建置中...");
});

app.get('/list_user', function (req, res) {
    console.log("/list_user GET請求");
    res.send("<h3>用戶清單</h3><table><th>用戶名稱</th><th>用戶IP</th></table>");
})

app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd GET 請求");
    res.send('正則匹配');
})



var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Expres應用實例，訪問地址為 http://%s:%s", host, port);
});