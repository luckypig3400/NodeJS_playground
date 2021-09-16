//https://www.youtube.com/watch?v=TlB_eWDSMt4
//start from 1:10:48
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('root');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 6, 9]));
        res.end();
    }
    else {
        res.write('You are going to visit:' + req.url);
        res.write('\nBut that route is not on this server');
        res.end();
    }
});

server.listen(3000);
console.log('Server listening on port 3000');