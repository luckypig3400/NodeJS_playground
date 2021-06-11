//https://www.runoob.com/nodejs/nodejs-express-framework.html

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var multer = require("multer");

// 創建application/x-www-form-urlencoded 編碼解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));

app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);

    var des_file = __dirname + "/" + req.files[0].originalname;

    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

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

app.post('/process_post', urlencodedParser, function (req, res) {
    //輸出JSON格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("表單接收範例，訪問地址http://%s:%s", host, port);

});