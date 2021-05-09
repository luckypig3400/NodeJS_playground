var mysql = require('mysql');
//https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
var con = mysql.createConnection({
    host: "localhost",
    user: "nodejsUser",
    password: "nodejs1234",
    database: "mynodejsDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected & Used Database 'mynodejsDB'");

    var sql_createTB = "CREATE TABLE IF NOT EXISTS " +
        "customers(id INT AUTO_INCREMENT PRIMARY KEY, " +
        "name VARCHAR(255), address varchar(255))";
    var sql_alterTB = "ALTER TABLE customers " +
        "ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql_alterTB, function (err, result) {
        if (err) throw err;
        console.log("Table altered!");
    });
});