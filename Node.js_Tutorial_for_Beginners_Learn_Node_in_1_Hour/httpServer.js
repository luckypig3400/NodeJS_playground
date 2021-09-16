//https://www.youtube.com/watch?v=TlB_eWDSMt4
//start from 1:10:48
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('root');
        res.end();
    }
    
});

server.listen(3000);
console.log('Server listening on port 3000');