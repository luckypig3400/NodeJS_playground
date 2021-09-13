var url = 'http://google.com';

function log(message) {
    console.log(__filename);
    console.log(__dirname);

    // send a HTTP request
    console.log(message);
}

module.exports.log = log;
