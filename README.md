# NodeJS_playground
 Node JS Playground (follow W3school tutorial or try something fun with NodeJS)

## [W3Schools NodeJS Tutorial](https://www.w3schools.com/nodejs/default.asp)

## Node.js MySQL

### Install required package
```
npm install mysql
```

### 在電腦上安裝MySQL(也可用XAMPP)
**單獨安裝MySQL可參考這篇:**
+ https://jerrynest.io/windows-mysql-installer/

### [Connect to MySQL Example Code](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
```javascipt=
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
```

### [Query a Database Example Code](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
```javascript=
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
``` 

### [Creating a Database Example Code](https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp)
```javascript=
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
```

### [Creating a Table Example Code](https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp)
```javascript=
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
```
---

## 模仿Google Doc建立自己的線上文件編輯系統
+ [How To Build A Google Docs Clone With React, Socket.io, and MongoDB](https://www.youtube.com/watch?v=iRaelG7v0OU)

---

## 使用npx建立react app專案
Type in Command Line
```
npx create-react-app [your_project_name]
```
+ Ref: 3:36 => https://www.youtube.com/watch?v=iRaelG7v0OU

---

## 使用express generator建立express專案
前置作業
```
npm install express-generator -g
```
Type in Command Line
```
express [your_project_name]
```
+ Ref: https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_the_express_application_generator

---

## Search Keywords
+ node js async function
+ npx create-react-app