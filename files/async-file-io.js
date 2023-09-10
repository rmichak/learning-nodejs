//Demonstrates reading a file asynchronously
const fs = require('fs');

//read file asynchronously as byte array
fs.readFile("./data.txt", (err, content) => {
    console.log("Reading file asynchronously as byte array");
    if (err) throw err;
    console.log(content);
});

//read file asynchronously as string
fs.readFile("./data.txt", "utf-8", (err, content) => {
    console.log("Reading file asynchronously as string");
    if (err) throw err;
    console.log(content);
}
);

