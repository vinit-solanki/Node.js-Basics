// morgan is an external package used for adding a middleware
// to the app which prints the log of every request
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.listen(3000,()=>console.log('Server Started...'));