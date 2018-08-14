'use strict'

const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    let name = req.url
    if (name === '/golgo') {
        res.end('Good bye, Golgo!\n');
    }else{
        res.end('Hello ' + name.slice(1,name.length));
    }
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);