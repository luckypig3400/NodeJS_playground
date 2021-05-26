const express = require('express');
const app = express();
const port = 3000;

app.use('/rwd_html_template', express.static('rwd_html_template'))

//ref1: http://expressjs.com/en/starter/hello-world.html
//ref2: https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/development_environment
app.get('/', function (req, res) {
    res.send('Hello World');
    // (req, res) => { } is equal to function(req, res) { }
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port);
});