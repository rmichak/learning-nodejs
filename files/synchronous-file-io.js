const fs = require('fs');

//Write to a file using fs.writeFileSync
//fs.writeFileSync('notes1.txt', 'This file was created by Node.js!\n');

//Append to a file using fs.appendFileSync
//fs.appendFileSync('notes1.txt', 'This text was appended to the file!\n');

//Read from a file using fs.readFileSync
//const data = fs.readFileSync('notes1.txt');

//Print the data to the console
//console.log(data.toString());

//example of synchronous file io using encoding 
//const data = fs.readFileSync('notes1.txt', 'utf8');
//console.log(data);

//example of synchronous file io and setting file permissions
//fs.writeFileSync('notes2.txt', 'This file was created by Node.js!', { mode: 0o700 });


//example of synchronous file io catching IO errors 
//try {
//    const data = fs.readFileSync('notes122.txt');
//    console.log(data.toString());
//}
//catch (err) {
//    console.log("An error occurred while reading the file!");
//}

//example of synchronous file io using file descriptors and try/catch/finally
// let fd;
// try {
//     // Open the file and get the file descriptor
//     fd = fs.openSync('notes1.txt', 'r');
//     console.log('File descriptor:', fd);

//     // Create a buffer to store the data
//     const buffer = Buffer.alloc(1024);

//     // Read data from the file into the buffer
//     const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, null);

//     // Convert buffer to string and print the read content
//     const content = buffer.slice(0, bytesRead).toString();
//     console.log('File content:', content);
// }
// catch (err) {
//     console.log('Error:', err);
// }
// finally {
//     // Close the file descriptor
//     if (fd !== undefined) {
//         fs.closeSync(fd);
//     }
// }

//Example writing an object to a file
//  const book = {
//      title: 'Ego is the Enemy',
//      author: 'Ryan Holiday'
//  }

//Convert the object to a JSON string
//const bookJSON = JSON.stringify(book);

//Write the JSON string to a file
//fs.writeFileSync('book.json', bookJSON);


//Example reading a JSON file
//const dataBuffer = fs.readFileSync('book.json');

//Convert the JSON string to an object
//const dataJSON = dataBuffer.toString();
//const dataObj = JSON.parse(dataJSON);

//Print the object to the console
//console.log(dataObj);

//Example writing hex data to a file
//const hexData = Buffer.from('Hello World');
//fs.writeFileSync('hex.txt', hexData.toString('hex'));



