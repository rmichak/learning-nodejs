// datatypes.js

// ====================================
// Primitive Data Types
// ====================================

// --- Number Type ---
// const age = 21;
// const pi = 3.14159;
// console.log(`Number examples: age=${age}, pi=${pi}`);

// --- String Type ---
// const name = "John";
// console.log(`String example: name=${name}`);

// --- Boolean Type ---
// const isStudent = true;
// console.log(`Boolean example: isStudent=${isStudent}`);

// --- Null Type ---
// const emptyVariable = null;
// console.log(`Null example: emptyVariable=${emptyVariable}`);

// --- Undefined Type ---
// let futureValue;
// console.log(`Undefined example: futureValue=${futureValue}`);

// --- BigInt Type ---
// const bigNumber = 9007199254740993n;
// console.log(`BigInt example: bigNumber=${bigNumber}`);

// ====================================
// Non-Primitive Data Types
// ====================================

// --- Object Type ---
// const student = {
//   name: 'John',
//   age: 21,
//   isStudent: true,
//   greet: function() {
//     return `Hello, ${this.name}`;
//   },
//   sayAge: () => `I am ${student.age} years old`
// };
// console.log(`Object example: student=${JSON.stringify(student)}`);
// console.log(`Method call within object: student.greet()=${student.greet()}`);
// console.log(`Arrow function within object: student.sayAge()=${student.sayAge()}`);



// --- Array Type ---
// const numbers = [1, 2, 3, 4];
// console.log(`Array example: numbers=${numbers}`);



// Iterate over the array using forEach
// console.log("Iterating over array with forEach:");
// numbers.forEach((number, index) => {
//   console.log(`Element at index ${index} is ${number}`);
// });




// --- Array of Different Types ---
// const mixedArray = [1, 'text', true, null, undefined, {name: 'Emily', age: 22}];
// console.log(`Array with mixed data types: mixedArray=${JSON.stringify(mixedArray)}`);



// --- Function Types ---
// Verbose approach using function()
// const verboseGreet = function(name) {
//   return `Hello, ${name}! This is a verbose function.`;
// };
// console.log(`Verbose Function example: verboseGreet('John')=${verboseGreet('John')}`);

// Abbreviated approach using arrow function
// const abbreviatedGreet = name => `Hello, ${name}! This is an abbreviated function.`;
// console.log(`Abbreviated Function example: abbreviatedGreet('John')=${abbreviatedGreet('John')}`);
