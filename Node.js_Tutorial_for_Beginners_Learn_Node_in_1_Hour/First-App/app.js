const logger = require('./logger'); // use const to avoid reassign var by mistake
const path = require('path');
const os = require('os');
const fs = require('fs');

console.log('See mudule Obj:');
console.log(logger); // see property of a module

console.log('Testing our module:');
logger.log('Hello my tomodachi~');

console.log('Using path module to parse filename:');
var pathObj = path.parse(__filename);
console.log(pathObj);

console.log('Using OS module to see OS info:');
console.log('Free RAM size:' + os.freemem() / 1024 / 1024 + 'MB');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory}\nTotal Memory: ${totalMemory}\n
    Remaining Percent: ${freeMemory / totalMemory * 100}%`);// new way to output variable in console

console.log('File System module pratice(Sync):');
var files = fs.readdirSync('./');
console.log('Files in curent folder:', files);

console.log('File System module pratice(Asynchronous):');
fs.readdir('C:/', function (err, files) {
    if (err) console.log('!Error:' + err);
    else console.log('Files in C:' , files);
});
