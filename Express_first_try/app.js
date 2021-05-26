const express = require('express');
const app = express();
const port = 3000;

app.use('/rwd_html_template', express.static('rwd_html_template'));
//Express靜態文件設置:https://www.runoob.com/nodejs/nodejs-express-framework.html

//ref1: http://expressjs.com/en/starter/hello-world.html
//ref2: https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/development_environment
app.get('/', function (req, res) {
    // (req, res) => { } is equal to function(req, res) { }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Redirect in 1 Second...<h1>');
    
    res.write('<meta http-equiv="refresh" content="1; url=/rwd_html_template" />');
    //網頁連結轉跳https://stackoverflow.com/questions/5411538/redirect-from-an-html-page
    
    return res.end();
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port);
});