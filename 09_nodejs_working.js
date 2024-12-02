/*
# Node.js Architecture and Working: 
1. Start the Process -> 2. Insert into the Queue & Identify the Operation Type ->
3. If Non-Blocking Execute it directly -> 4. If Blocking -> 5. Event Looping start ->
## Node.js Process Components: Main Thread(
1. init project -> 2. register top level code -> 3. register required modules
-> 4. Event Callbacks registration -> 5. event loop starts (for cpu intensive tasks, it goes to thread pool)

## Phases of Event Loop:
The event loop is the core mechanism of Node.js, which manages all asynchronous operations. It operates in multiple phases:\n
Timers:
1. Executes callbacks for setTimeout and setInterval.\n
I/O Callbacks:
Handles callbacks for completed I/O operations.\n
Idle, Prepare:
Internal use, mostly ignored by developers.\n
Poll:
Retrieves new I/O events and executes their callbacks.\n
Check:
Executes callbacks for setImmediate.\n
Close Callbacks:
Executes callbacks for closed sockets or other close events.\n
*/
// Simple Process in Straight FOrward Execution:
// const fs = require('fs')
// console.log("Start of the script");
// setTimeout(()=>console.log("This is a timeout-1"),0);
// fs.readFile('./06_File_Systems/example.txt','utf-8',(err,result)=>{
//     if(err) {
//         console.log("Error:", err)
//     } else{
//         console.log(result);
//     }
// })
// setImmediate(()=>{
//     console.log("This is setImmediate-1");
// })
// console.log("End of the script");

// The timer function with delayed execution (Adding one more ticking round to the event loop):
// const fs = require('fs')
// console.log("Start of the script\n");
// setTimeout(()=>console.log("This is a timeout-1\n"),20);
// fs.readFile('./06_File_Systems/example.txt','utf-8',(err,result)=>{
//     if(err) {
//         console.log("Error:", err,"\n")
//     } else{
//         console.log(result,"\n");
//     }
// })
// setImmediate(()=>{
//     console.log("This is setImmediate-1\n");
// })
// console.log("End of the script\n");

// Non-Deterministic Ordering of task:
// setTimeout(()=>{console.log("Timeout")},0);
// setImmediate(()=>{console.log("Immediate")})
// this depends on the performance bound to the process

// A comprehensive example:
const fs = require('fs');
console.log('Program starts');
setTimeout(() => {
  console.log('Timeout executed');
}, 0);
setImmediate(() => {
  console.log('Immediate executed');
});
fs.readFile('./06_File_Systems/example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File read completed');
  }
});
console.log('Program ends');
