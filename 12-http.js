const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is out short history');
    } else {
        res.end('<h1>Opps!!</h1>');
    }
})


server.listen(5000);
