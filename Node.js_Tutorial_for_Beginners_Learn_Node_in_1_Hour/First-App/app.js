const logger = require('./logger'); // use const to avoid reassign var by mistake
const path = require('path');

console.log('See mudule Obj:');
console.log(logger); // see property of a module

console.log('Testing our module:');
logger.log('Hello my tomodachi~');

console.log('Using path module to parse filename:');
var pathObj = path.parse(__filename);
console.log(pathObj);