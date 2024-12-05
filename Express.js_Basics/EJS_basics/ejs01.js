/*
EJS (Embedded JavaScript) is a simple templating language that lets 
you generate HTML markup with JavaScript. It's widely used in 
Node.js applications, especially when building server-rendered 
apps with Express.js.
*/
const express = require('express');
const app = express();
const path = require('path')
app.set('view engine','ejs');
// app.set('views','./views');
app.set('views',path.join('./views'));

app.get('/',(req,res)=>{
    console.log("Home Page");
    const name = process.argv[2];
    res.render('home',{name: name});
})
app.get('/about',(req,res)=>{
    console.log("About Page");
    res.render('about');
})
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.render('user',{id})
})
app.get('/random',(req,res)=>{
    const random = Math.floor(Math.random()*100+1);
    res.render('randomNum',{random});
})
app.get('/fruits',(req,res)=>{
    const fruits = ['Apple','Banana','Grapes','Mango'];
    res.render('loops',{fruits})
})
app.listen(3000,()=>console.log("Server Started..."));