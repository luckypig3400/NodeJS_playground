var events = require('events');
var eventEmitter = new events.EventEmitter();

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
var worldEventHandler = function () {
    console.log('World~ Hello from Node.js');
}

eventEmitter.on('hello', helloEventHandler);
eventEmitter.on('world', worldEventHandler);

eventEmitter.emit('hello');
eventEmitter.emit('world');