//https://ithelp.ithome.com.tw/articles/10160090

var mysql = require('mysql');
var conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'demo_nodejs',
        port: 3306
    }
);

//與資料庫建立連線
conn.connect();

//隨意測試個SQL Query指令，執行正常代表連線成功
var sqlCommand = 'select 12 + 34 as result';
conn.query(sqlCommand,
    function (err, rows, fields) {
        if (err) throw err;
        console.log('The result is:', rows[0].result);
    }
);

//執行完SQL後要記得關閉與資料庫的連線
conn.end();