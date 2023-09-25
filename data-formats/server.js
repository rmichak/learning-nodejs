const http = require('http');
const url = require('url');

const reqHandler = (req, res) => {
    //Grab the query string from the URL
    let query = url.parse(req.url, true).query;
    //Grab the name property from the query string
    let name = query.name;
    let age = query.age;
    console.log(name);
    console.log(age);
    console.log(query);
    res.end("Hello World\n");
}

const server = http.createServer(reqHandler);

let PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})