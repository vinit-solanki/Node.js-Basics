const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo')
.then(()=>{
    console.log("MongoDB Connected...");    
})
.catch((err)=>{
    console.log("MongoDB Connection Error...");
    console.error(err);        
})

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'mySecret',

}))

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
} 

app.get('/', requireLogin, (req,res)=>{
        res.render('home');
}) 
app.get('/feed', requireLogin, (req,res)=>{
    res.render('feed');
})
app.get('/register', (req,res)=>{
    res.render('register');
})
app.post('/register', async (req,res)=>{
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username, password: hash
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})
app.get('/login', (req,res) => {
    res.render('login');
})
app.post('/login', async (req,res)=>{
    // res.send(req.body);
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.send('User not found');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword){
        req.session.user_id = user._id;
        res.redirect('/')
    } else{
        res.redirect('/login')
    }
})
app.post('/logout', (req,res)=>{
    req.session.user_id = null;
    req.session.destroy(); 
    res.redirect('/login');
})

app.listen(3000, ()=>{
    console.log('Server Started...');    
})