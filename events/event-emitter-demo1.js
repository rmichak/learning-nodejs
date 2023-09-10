//Demonstrates using the event emitter
//add dependency
const event = require('events');
//declare a new event object that will trigger two events
const myevent1 = new event.EventEmitter();
//define the event handlers
const eventHandler1 = () => { console.log('this is an odd number'); }
const eventHandler2 = () => { console.log('This is an even number'); }
//The two events are called "odd" and "even"
myevent1.on("odd", eventHandler1); //listener for "odd"
myevent1.on("even", eventHandler2);//listener for "even"
//Check the number written on the command line
let ename = Number(process.argv[2]) % 2 === 0 ? "even" : "odd";
//fire the correct event handler according to the number received
myevent1.emit(ename);
