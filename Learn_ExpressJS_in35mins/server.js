const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("Someone visit /");
    res.send("<h1>Hi~</h1>");
});

app.listen(3000);