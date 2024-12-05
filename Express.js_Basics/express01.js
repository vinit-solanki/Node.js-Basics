const express = require('express');
const app = express();

// Using Node.js:
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.method==='GET'&& req.url==='/'){
//         res.end('Home Page')
//     }else{
//         res.statusCode=404;
//         res.end('Error, Page does not exists!');
//     }
// })
// server.listen(3000,(req,res)=>console.log('Server Started...'));

// Using Express.js:
app.use((req,res)=>{
    console.log("A new Request was made.");
});
app.get('/',(req,res)=>{
    res.send(`Welcome ${req.query.username} to Home Page!`);
});
app.get('/about',(req,res)=>{
    res.send(`Welcome ${req.query.username} to About Page!`);
});
// app.get('*',(req,res)=>{
//     console.log("The path is unknown");
//     res.send("The path is unknown");
// })
app.listen(3000,()=>console.log("Server Started..."));