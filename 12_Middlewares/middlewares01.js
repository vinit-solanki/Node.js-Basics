const express =  require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("Middleware-1, before calling next");
    next();    
    console.log("Middleware-1, after calling next");
})
app.use((req,res,next)=>{
    console.log("Middleware-2, before calling next");
    return next(); //return ensures anything woun't be executed after this...
    console.log("Middleware-2, after calling next");    
})
app.get('/',(req,res)=>{
    console.log('Home Page Hitted!');
    res.send('Home Page');    
})
app.listen(3000,()=>console.log('Server Started...'));