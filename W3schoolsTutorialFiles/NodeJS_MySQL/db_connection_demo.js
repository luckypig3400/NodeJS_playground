var mysql = require('mysql');
// The following account must exists in MySQL!
var con = mysql.createConnection({
    host: "localhost",
    user: "nodejsUser",
    password: "nodejs1234"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "select * from mysql.user";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result:" + result);
        con.destroy();//close connection after query data sent back
    });
});