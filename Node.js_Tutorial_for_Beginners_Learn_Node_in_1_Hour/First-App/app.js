const logger = require('./logger'); // use const to avoid reassign var by mistake
const path = require('path');
const os = require('os');

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
    Remaining Percent: ${freeMemory / totalMemory * 100}%`);// new way to 