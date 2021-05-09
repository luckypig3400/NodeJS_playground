var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "nodejsUser",
    password: "nodejs1234"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mynodejsDB", function (err, result) {
        if (err) throw err;
        console.log("Database created!");
    });
});