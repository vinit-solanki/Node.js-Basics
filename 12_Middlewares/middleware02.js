const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));

// Middleware to check login
app.use((req, res, next) => {
    const login = true;
    if (login) {
        console.log('Login Success!');
        next();
    } else {
        console.log('First Login');
        res.status(401).send('Please log in first.');
    }
});

// Middleware to check password (applies only to specific routes)
const passwordMiddleware = (req, res, next) => {
    const password = Number(req.query.password);
    if (password === 123456) {
        console.log('Correct Password');
        next();
    } else {
        console.log('Wrong Password');
        res.status(403).send('Incorrect password.');
    }
};

// Middleware to check admin access (applies only to specific routes)
const adminMiddleware = (req, res, next) => {
    if (req.query.admin === 'true') {
        console.log('Admin access granted.');
        res.redirect('/admin');
    } else {
        console.log('No admin privileges.');
        next();
    }
};

// Home route
app.get('/', passwordMiddleware, adminMiddleware, (req, res) => {
    res.send('Home Page');
});

// Admin route
app.get('/admin', (req, res) => {
    console.log('Admin Page');
    res.send('Welcome to the Admin Page!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('NOT FOUND!');
});

// Start the server
app.listen(3000, () => console.log('Server Started...'));
