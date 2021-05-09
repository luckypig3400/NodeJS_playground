//https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "nodejsUser",
    password: "nodejs1234",
    database: "mynodejsDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected~!");

    var sql = "INSERT INTO customers(name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " records inserted!");
    });
});

/*
The Result Object
When executing a query, a result object is returned.
The result object contains information about how the query affected the table.
The result object returned from the example above looks like this:

{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}
*/