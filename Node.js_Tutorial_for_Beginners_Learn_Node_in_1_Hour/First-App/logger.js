const EventEmitter = require('events');
var url = 'http://google.com';

class Logger extends EventEmitter {
    log(message) {
        // send a HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4' });
    }
}

module.exports = Logger;
