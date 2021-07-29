//https://ithelp.ithome.com.tw/articles/10187106
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.render('index',
        {
            title: 'EJS template',
            description: 'Website:http://www.embeddedjs.com/'
        });
});

var server = app.listen(3088, function () {
    var hostname = server.address().address;
    var port = server.address().port;
    console.log("Server start at: http://%s:%s", hostname, port);
})