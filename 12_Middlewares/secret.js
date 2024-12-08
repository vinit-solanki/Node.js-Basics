const express = require('express');
const app = express();

const validatePassword = (req,res,next)=>{
    const password = Number(req.query.password);
    if(password === 123456){
        next();
    } else{
        res.send('Enter Correct Password');
    }
}

app.get('/',(req,res)=>{
    res.send('Home Page');
});
app.get('/secret',validatePassword,(req,res)=>{
    res.send('I hate coding...');
});

app.listen(3000,()=>console.log('Server Started...'));