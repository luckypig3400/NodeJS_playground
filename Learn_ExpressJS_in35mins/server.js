const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("Someone visit /");
    res.send("<h1>Hi~</h1> Everything is fine~ <a href='./download'>Download server file</a><br><a href='./jsonExample'>Show json</a>");
    res.status(200);//500代表internal server error
});

app.get('/download', (req, res) => {
    res.download("server.js");
    console.log("Someone download the server file");
});

app.get('/jsonExample', (req, res) => {
    res.json({
        message: "This is test msg for json",
        owo: "Nothing just wanna say owo"
    });
    console.log("Someone just see test json message");
});

app.listen(3000);