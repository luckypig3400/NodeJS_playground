const express = require('express');
const app = express();
const port = 3000;
//ref1: http://expressjs.com/en/starter/hello-world.html
app.get('/', function (req, res) {
    res.send('Hello World');
    // (req, res) => { } is equal to function(req, res) { }
});
//ref2: https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/development_environment
app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port);
});