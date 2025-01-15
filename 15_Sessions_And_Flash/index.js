const express = require('express');
const session = require('express-session');
const app = express();

// Cofiguring Session Middleware
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60000,
        secure: false,
        httpOnly: true,
    }
}));
// Setting Session Data:
app.get('/set-session', (req,res)=>{
    req.session.username = 'John Doe';
    res.send('Session data has been set!')
})
// Get Session Data:
app.get('/get-session', (req,res)=>{
    const username = req.session.username;
    res.send(username ? `Logged in as ${username}`: 'No session data found')
})
// Destroy session
app.get('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send('Error destroying session')
        }
        res.send('Session destroyed, user logged out!')
    })
})
app.get('/register', (req,res)=>{
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})
app.get('/greet', (req,res)=>{
    const { username } = req.session;
    res.send(`Welcome back ${username}!`);
})

app.listen(3000, ()=>console.log('Server Started...'))