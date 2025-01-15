const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();

// Add view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware Setup
app.use(cookieParser());
app.use(
  session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
      httpOnly: true, 
    },
  })
);
// Middleware to make flash messages available in views
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success');
    res.locals.error_msg = req.flash('error');
    next();
  });
// Session Routes
app.get('/set-session', (req, res) => {
  req.flash('success', 'Session Stored Successfully');
  req.session.username = 'JohnDoe'; //setting the cookie with name as 'username' and value as 'JohnDoe' 
  res.redirect('/show-message');
});

app.get('/get-session', (req, res) => {
  try{
      const username = req.session.username; // destructuring the cookie value saved in the session
      req.flash('success', 'Got the session value!');
      res.redirect('/show-message');
    } catch(err){
        req.flash('error', 'Failed to get the session')
        res.redirect('/show-message');
    }
});

app.get('/delete-session', (req, res) => {
  req.session.destroy((err) => { // Clearing out the session
    if (err) {
      return res.status(500).send('Session delete karte waqt error hua');
    }
    res.send('Session delete ho gaya!');
  });
});

// Cookie Routes
app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'JohnDoe', { maxAge: 60000, httpOnly: true }); //setting a cookie manually
  res.send('Cookie set ho gayi!');
});

app.get('/get-cookie', (req, res) => {
  const user = req.cookies.user; // fetching the user named cookie
  res.send(user ? `Cookie value: ${user}` : 'Koi cookie nahi mili!');
});

app.get('/delete-cookie', (req, res) => {
  res.clearCookie('user');  // deleting a cookie named 'user'
  res.send('Cookie delete ho gayi!');
});

// Add a new route to show messages
app.get('/show-message', (req, res) => {
    res.render('message', {
        sessionData: req.session.username || 'No session data'
    });
});

// Start Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
