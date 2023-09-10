//demonstrates reading a file asynchronously using file descriptor
const fs = require('fs');

fs.open("./data.txt", "r", (err, fd) => {
    if (err) throw err;
    let buffer = Buffer.alloc(1024);
    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead, buffer) => {
        if (err) throw err;
        console.log(buffer.toString());
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
}
);
