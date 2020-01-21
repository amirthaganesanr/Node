let http = require("http");

const implementation = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}

http.createServer(implementation).listen(8081);

console.log('Server running at http://127.0.0.1:8081');