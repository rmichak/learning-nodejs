const fs = require('fs');
let src = './data.txt'
let dest = './data2.txt'
console.time('pipeCopy');
const rdStream = fs.createReadStream(src);
const wtStream = fs.createWriteStream(dest);
rdStream.pipe(wtStream);
console.timeEnd('pipeCopy');
