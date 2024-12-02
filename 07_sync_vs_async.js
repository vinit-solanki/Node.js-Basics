const fs = require('fs');
const os = require('os');
console.log("No. of CPUSs:",os.cpus().length);

// Sync Task -> Blocking 
// Async Task -> Non-Blocking
console.log(1);
// This is a asyn operation
fs.readFile('./06_File_System/example.txt','utf-8',(err,result)=>{
    console.log("Blocking Opeartion...",result);
})  
console.log(2);

console.log(1);
// This is a sync operation
const result = fs.readFileSync('./06_File_System/example.txt','utf-8')
console.log("Non-Bloacking Operation:", result);
console.log(2);


