var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'ContentType': 'html/plain'
    });
    res.end('Hello World');
}).listen(3000);

console.log("Server running at http://localhost:3000/");