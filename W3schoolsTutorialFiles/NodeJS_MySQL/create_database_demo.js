var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "nodejsUser",
    password: "nodejs1234"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sqlCommand = "CREATE DATABASE IF NOT EXISTS mynodejsDB";
    con.query(sqlCommand, function (err, result) {
        if (err) throw err;
        console.log("Database created!");
    });
});