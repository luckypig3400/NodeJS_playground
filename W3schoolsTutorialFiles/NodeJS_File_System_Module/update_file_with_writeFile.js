var fs = require('fs');
var stringToWrite = 'This is my text replaced at ' + Date();
fs.writeFile('mynewfile3.txt', stringToWrite,
    function (err) {
        if (err) throw err;
        console.log('Replaced!');
    }
);// The fs.writeFile() method replaces
// the specified file and content