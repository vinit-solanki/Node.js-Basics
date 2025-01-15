const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser('mySecretKey'));
// Set a cookie
app.get('/set-cookie', (req,res)=>{
    res.cookie('user', 'John Doe', {maxAge:900000, httpOnly:true})
    res.cookie('session', '123456', {signed:true, httpOnly:true})
    res.send('Cookie have been set!')
})
// Read the cookie
app.get('/read-cookie', (req,res)=>{
    const user = req.cookies.user;
    const session = req.signedCookies.session;
    res.send(`User: ${user}, Signed Session: ${session}`)
})
// Delete Cookies
app.get('/delete-cookie', (req,res)=>{
    res.clearCookie('user');
    res.clearCookie('session');
    res.send('Cookies have been deleted!');
})

app.listen(3000,()=>console.log("Server Started..."));