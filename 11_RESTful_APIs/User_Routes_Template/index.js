const express = require('express');
const app = express();
let users = require('./MOCK_DATA.json');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Defining a Middleware:
app.use((req,res,next)=>{
    fs.appendFile('./logs.txt',
        `${req.method} on /${req.path} at ${Date.now()}`,(err,data)=>{
            if(err){
                res.end('No Request Made.');
            } else{
                next();
            }
        })
})

app.get('/api/users',(req,res)=>{
    res.json(users);
})
app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    let user = users.find(u => u.id === id);
    if(user){
    res.json(user);
    } else{
        res.send('User not found');
    }
})
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    users.push({id: users.length+1,...newUser});
    console.log(newUser);    
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            res.status(500).send('Error writing file');
        } else {
            res.json({ status: "Success", user: newUser });
        }
    });
});
app.patch('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find(u=>u.id === id);
    if(user){
        user.first_name = body.first_name;
        user.last_name = body.last_name;
        user.email = body.email;
        user.gender = body.gender;
        user.job_title = body.job_title;
    }
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err=>{
        if(err){
            res.send('Error!');
        } else{
            res.json(user);
        }
    }))
});
app.delete('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    users = users.filter(u=> u.id!==id);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err)=>{
        if(err){
            res.send('User does not exist');
        } else{
            res.json('User deleted successfully');
        }
    })
})

app.listen(3000,()=>console.log("Server Started..."));