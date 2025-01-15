const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Home Page");
});
app.get('/error', (req, res, next) => {
    const err = new Error('Custom Error Message');
    err.status = 400; // Set a status code
    next(err); // Forward error to error-handling middleware
});
app.get('/no-page', (req,res,next)=>{
    const err = new Error('No page');
    err.status = 400;
    next(err);
})
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    console.error(err.stack); // Log the error stack
    res.status(status).json({ error: { message } });
});


app.listen(3000,()=>console.log("Server Started!"));