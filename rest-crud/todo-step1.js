const http = require('http');

const reqHandler = (req, res) => {
    switch (req.method) {
        case 'POST':
            res.end("POST request received");
            break;
        case 'GET':
            res.end("GET request received");
            break;
        case 'PUT':
            res.end("PUT request received");
            break;
        case 'DELETE':
            res.end("DELETE request received");
            break;
    }


}

const server = http.createServer(reqHandler);

let PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})