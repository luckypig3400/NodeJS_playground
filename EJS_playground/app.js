const express = require('express');
const path = require('path');
const indexRouter = require('./routes/router')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);

var server = app.listen(3088, function () {
    var hostname = server.address().address;
    var port = server.address().port;
    console.log("Server start at: http://%s:%s", hostname, port);
})