const http = require('http');

const reqHandler = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World\n");
}

const server = http.createServer(reqHandler);

let PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})