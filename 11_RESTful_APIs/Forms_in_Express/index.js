const express = require('express');
const app = express();
const path = require('path');
const {v4:uuid} = require('uuid');


let comments=[
    {
        id: uuid(),
        username: 'Alice',
        content: 'Wow, From Season 3 is the best!'
    },
    {
        id: uuid(),
        username:'Bod',
        content: 'What did the ending of season 3 ment?'
    },
    {
        id: uuid(),
        username: 'Jenny',
        content: 'Why did Jim has to die?'
    }
]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/comments',(req,res)=>{
    res.render('comments',{comments});
})
app.get('/comments/new',(req,res)=>{
    res.render('new',{comments});
})
app.get('/comments/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    let comment;
    for(let c of comments){
        if(c.id === id){
            comment = {id:c.id,username:c.username,content:c.content}
        }
    }
    console.log(comment);    
    res.render('show',{comment});
})
app.post('/comments/new',(req,res)=>{
    console.log(req.body);
    const {username,content} = req.body;
    let nextId = uuid(); 
    console.log(nextId);
    comments.push({id:nextId,username:username,content:content})
    res.redirect('/comments');   
})
app.get('/comment/update',(req,res)=>{
    res.render('update')
})
app.post('/comment/update', (req, res) => {
    const { id, newComment } = req.body;
    for (let c of comments) {
        if (c.id === id) {
            c.content = newComment;
        }
    }
    res.redirect('/comments');
});
app.get('/comments/:id/edit',(req,res)=>{
    const id = req.params.id;
    const comment = comments.find(c=>c.id===id);    
    res.render('edit',{comment});
})
app.patch('/comments/:id/edit',(req,res)=>{
    const id = req.params.id;
    const comment = comments.find(c=>c.id===id);    
    
})

app.listen(3000,()=>console.log("Server Started..."));