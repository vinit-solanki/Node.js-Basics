const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine','ejs');
app.set('views',path.join('./views'));

fs.readFile('./userSample.json', 'utf8', (err, data) => {
    if (err) {
        console.log("File Cannot Be Fetched!");
        return; 
    }
    console.log("File Fetched!");
    const users = JSON.parse(data).users;
    console.log(users);

    app.get('/', (req, res) => {
        res.render('userPost', { users });
    });
});

app.listen(3000,()=>console.log("Server Started..."));