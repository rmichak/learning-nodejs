// arguments.js

// Accessing process.argv array
//const args = process.argv;
//console.log("All Arguments:", args);

// Remove the first two elements (node executable path and script path)
//const realArgs = args.slice(2);
//console.log("Real Arguments:", realArgs);

// ========================================
// Iterating Over Arguments
// ========================================

// Using forEach
//console.log("Using forEach to iterate over arguments:");
//realArgs.forEach((arg, index) => {
//  console.log(`Argument ${index + 1}: ${arg}`);
//});

// Using for...of loop
//console.log("Using for...of loop to iterate over arguments:");
//for (const arg of realArgs) {
//  console.log(`Argument: ${arg}`);
//}

// Using traditional for loop
//console.log("Using traditional for loop to iterate over arguments:");
//for (let i = 0; i < realArgs.length; i++) {
//  console.log(`Argument ${i + 1}: ${realArgs[i]}`);
//}

// ========================================
// Parsing Key-Value Arguments
// ========================================
//const parsedArgs = {};

//realArgs.forEach(arg => {
//  const [key, value] = arg.split("=");
//  if (key && value) {
//    parsedArgs[key] = value;
//  }
//});
//console.log("Parsed Key-Value Arguments:", parsedArgs);

// ========================================
// Using Argument Flags
// ========================================
//const flags = {
//  verbose: false,
//  help: false
//};

//realArgs.forEach(arg => {
//  if (arg === "--verbose") {
//    flags.verbose = true;
//  }
//  if (arg === "--help") {
//    flags.help = true;
//  }
//});

//console.log("Flags:", flags);
