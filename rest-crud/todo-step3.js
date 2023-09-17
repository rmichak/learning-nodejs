const http = require('http');
const url = require('url');
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
            //curl -X DELETE http://localhost:3000/1
            let path = url.parse(req.url).pathname;
            let index = parseInt(path.slice(1), 10);

            if (!list[index]) {
                res.end("Not Found\n");
            } else {
                list.splice(index, 1);
                console.log(list);
                res.end("OK\n");
            }
            break;
    }


}

const server = http.createServer(reqHandler);

let PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})