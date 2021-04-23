var events = require('events');
var eventEmitter = new events.EventEmitter();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});//https://www.codecademy.com/articles/getting-user-input-in-node-js

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

var helloEventHandler = function () {
    console.log('Hello World~');
}
var hiEventHandler = function () {
    console.log('World~ Hello from Node.js');
}
var oopsEventHandler = function () {
    console.log('Oops! I don\'t understand that ...');
}

eventEmitter.on('hello', helloEventHandler);
eventEmitter.on('hi', hiEventHandler);
eventEmitter.on('oops', oopsEventHandler);

readline.question('Hello~ Please greet to me(hello/hi):', answer => {
    if (answer == 'hello')
        eventEmitter.emit('hello');
    else if (answer == 'hi')
        eventEmitter.emit('hi');
    else
        eventEmitter.emit('oops');

    readline.close();
});