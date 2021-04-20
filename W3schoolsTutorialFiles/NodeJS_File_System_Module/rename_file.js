var fs = require('fs');

fs.rename('mynewfile1.txt', 'Renamedfile.txt',
    function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    }
);
// The fs.rename() method renames the specified file.