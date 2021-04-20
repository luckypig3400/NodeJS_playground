var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is new text append at ' + Date() + '\n',
    function (err) {
        if (err) throw err;
        console.log('Updated!');
    }
);// The fs.appendFile() method appends the specified
// content at the end of the specified file.