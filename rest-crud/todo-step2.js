const http = require('http');
const { url } = require('inspector');
var list = [];

const reqHandler = (req, res) => {
    switch (req.method) {
        case 'POST':
            let item = '';
            req.on('data', (chunk) => {
                item += chunk;
            });
            req.on('end', () => {
                list.push(item);
                console.log(list);
                res.end("OK\n");
            });


            break;
        case 'GET':
            res.end("GET request received");
            break;
        case 'PUT':
            res.end("PUT request received");
            break;
        case 'DELETE':
            req.end("DELETE request received");
            break;
    }


}

const server = http.createServer(reqHandler);

let PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})