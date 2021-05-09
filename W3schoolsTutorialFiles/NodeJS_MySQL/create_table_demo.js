var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "nodejsUser",
    password: "nodejs1234",
    database: "mynodejsDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected & Used Database 'mynodejsDB'");
    var sql = "CREATE TABLE customers(name VARCHAR(255), address varchar(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created!");
    });
});