const Logger = require('./logger'); // use const to avoid reassign var by mistake
const logger = new Logger();
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');

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
    else console.log('Files in C:', files);
});
// !重要 盡量用Asynchronous方法才不會造成執行序阻塞

console.log('Event moudule practice:');
const emitter = new EventEmitter(); // Create emitter object
//Add an event listener
emitter.on('logging', (e) => {// callback function can use arrow function like this
    console.log("Logging event emitted! Here's the message:", e);
})
// Raise an logging event practice
emitter.emit('logging', { data: 'message from Mars xD', time: Date.now() });

console.log('Extending Event moudule practice:');
// Register a listener for logger object
logger.on('messageLogged', function (eventArg) {// arg, e, eventArg are the same thing
    console.log('MessageLogged Listener received:', eventArg);
})
// execute logger's method
logger.log('This is a message from logger');