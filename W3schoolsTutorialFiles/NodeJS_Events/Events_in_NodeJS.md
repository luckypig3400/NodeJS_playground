# Node.js Events

> Reference: https://www.w3schools.com/nodejs/nodejs_events.asp
> [color=#C87630]

---

###### Node.js is perfect for event-driven applications.

---

## Events in Node.js

Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

```=javascript
var fs = require('fs);
var rs = fs.createReadSteam('./demofile.txt');

rs.on('open', function(){
  console.log('The file is open');
});
```

---

## Events Module

Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

```=javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();
```

---

