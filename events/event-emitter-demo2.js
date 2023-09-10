const event = require('events');
const fs = require('fs');
const path = require('path');
if (process.argv.length < 5) {
    console.log(`Usage: node ${path.basename(process.argv[1])} [file name] [text] [choice]`);
} else {
    const myevent1 = new event.EventEmitter();
    const eventHandler1 = (fname, data) => {
        fs.writeFile(fname, data, (err) => {
            if (err) throw err;
            console.log("data has been written to the file");
        });
    }
    const eventHandler2 = (fname, data) => {
        fs.appendFile(fname, data, (err) => {
            if (err) throw err;
            console.log("data has been appended to the file");
        });
    }
    myevent1.on("write", eventHandler1); //listener for "write"
    myevent1.on("append", eventHandler2);//listener for "append"
    //5. fire the correct event handler according to the choice received
    myevent1.emit(process.argv[4], process.argv[2], process.argv[3]);
} 
