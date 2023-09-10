const event = require('events');
const fs = require('fs');
const path = require('path');

// Constants for choices
const WRITE = "write";
const APPEND = "append";

// Constants for argv indices
const FILENAME_ARG = 2;
const TEXT_ARG = 3;
const CHOICE_ARG = 4;

if (process.argv.length < 5) {
    console.log(`Usage: node ${path.basename(process.argv[1])} [file name] [text] [choice]`);
} else {
    const myevent1 = new event.EventEmitter();

    const eventHandler1 = (fname, data) => {
        fs.writeFile(fname, data, (err) => {
            if (err) throw err;
            console.log("Data has been written to the file");
        });
    }

    const eventHandler2 = (fname, data) => {
        fs.appendFile(fname, data, (err) => {
            if (err) throw err;
            console.log("Data has been appended to the file");
        });
    }

    // Listener registration using constants
    myevent1.on(WRITE, eventHandler1);  // listener for "write"
    myevent1.on(APPEND, eventHandler2); // listener for "append"

    // Fire the correct event handler according to the choice received
    // Use the constants for comparison
    const choice = process.argv[CHOICE_ARG];
    if (choice !== WRITE && choice !== APPEND) {
        console.log(`Invalid choice: ${choice}. Please use either "${WRITE}" or "${APPEND}".`);
        return;
    }

    // Replace the string "\n" with the actual newline character
    const processedText = process.argv[TEXT_ARG].replace(/\\n/g, '\n');

    myevent1.emit(choice, process.argv[FILENAME_ARG], processedText);
}
