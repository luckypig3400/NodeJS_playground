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
});