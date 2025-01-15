const express = require('express');
const app = express();

class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

app.get('/error',(req,res,next)=>{
    const error = new AppError('Error Occured!', 400);
    res.send(error.message);
});

app.get('/custom-error', (req, res, next) => {
    const error = new AppError('Custom error occurred!', 400);
    next(error);
});

app.get('/async-error', async (req, res, next) => {
    try {
        const data = await someAsyncOperation(); // May throw an error
        res.send(data);
    } catch (err) {
        next(err); // Forward error
    }
});

app.listen(3000,()=>console.log("Server Started!"));