const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World\n");
});

let verbose =false;
let PORT = 3000;

// Loop through command line arguments
for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] === '--verbose') {
        verbose = true;
    } else if (!isNaN(parseInt(process.argv[i]))) {
        PORT = parseInt(process.argv[i]);
    }
}


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})