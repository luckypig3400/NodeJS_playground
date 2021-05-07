var http = require("http");
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.fileToUpload.path;
            var newpath = './UserUploadedFiles/' + files.fileToUpload.name;
            console.log('File Saved At Cache Folder:' + oldpath);
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File Uploaded and Moved!');
                res.end();
                console.log('File Saved At:' + newpath);
            });
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="POST" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileToUpload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);