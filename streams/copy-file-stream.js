const fs = require('fs');
let src = './data.txt';
let dest = './data2.txt'
console.time('streamCp'); //benchmarking
const rStream = fs.createReadStream(src);
const wStream = fs.createWriteStream(dest);
rStream.on('data', function (chunk) {//data is a defined event in the stream class
    wStream.write(chunk);
});
rStream.on('end', function () {//end is a defined event in the stream class
    console.log('finished copying the file');
    wStream.end();
});
console.timeEnd('streamCp');//benchmarking
