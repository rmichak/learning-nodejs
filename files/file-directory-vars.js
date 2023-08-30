//Print the current directory using __dirname
//console.log(__dirname);

//Print the current file using __filename
//console.log("I am currently working on this file" + __filename);

// Import the fs module
const fs = require('fs');

// Create a new directory named 'newDir'

//  fs.mkdirSync('myworkdir');
// console.log('Directory created successfully.');

// List the contents of the current directory
  const files = fs.readdirSync('.');
  console.log('Directory contents:', files);
