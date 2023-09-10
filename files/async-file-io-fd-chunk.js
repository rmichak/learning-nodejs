//demomstrates reading a file using file descriptor and reading in chunks
const fs = require('fs');

fs.open("./data.txt", "r", (err, fd) => {
    if (err) throw err;

    const bufferSize = 1024;
    let buffer = Buffer.alloc(bufferSize);
    let bytesRead = 0;

    function readNextChunk() {
        fs.read(fd, buffer, 0, buffer.length, bytesRead, (err, numBytesRead, buffer) => {
            if (err) throw err;

            bytesRead += numBytesRead;

            // If we read some bytes, output them and read the next chunk
            if (numBytesRead > 0) {
                console.log(buffer.slice(0, numBytesRead).toString());
                //console.log("Read Chunk: " + numBytesRead + " bytes");
                readNextChunk();
            } else {
                // Close the file if we're done
                fs.close(fd, (err) => {
                    if (err) throw err;
                });
            }
        });
    }

    readNextChunk();
});
