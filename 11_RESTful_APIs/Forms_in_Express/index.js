const express = require('express');
const app = express();
const path = require('path');
const {v4:uuid} = require('uuid');
// Data
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
// GET / - home
app.get('/',(req,res)=>{
    res.render('home');
})
// GET /comments (retrieve all the comments)
app.get('/comments',(req,res)=>{
    res.render('comments',{comments});
})
// GET /comments/new (retrieve the form for new comment post)
app.get('/comments/new',(req,res)=>{
    res.render('new',{comments});
})
// GET /comments/:id (retireve a specific comment)
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
// POST /comments/new (create a form to post a new comment with uuid)
app.post('/comments/new',(req,res)=>{
    console.log(req.body);
    const {username,content} = req.body;
    let nextId = uuid(); 
    console.log(nextId);
    comments.push({id:nextId,username:username,content:content})
    res.redirect('/comments');   
})
// GET /comment/update (retirive a form to update an existing comment)
app.get('/comment/update',(req,res)=>{
    res.render('update');
})
// POST /comment/update (update an existing comment)
app.post('/comment/update', (req, res) => {
    const { id, newComment } = req.body;
    for (let c of comments) {
        if (c.id === id) {
            c.content = newComment;
        }
    }
    res.redirect('/comments');
});

// Used to achieve put, patch, delete and other request in html forms
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// GET /comments/:id/edit (retreive form to edit a specific comment)
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    if (!comment) {
        return res.status(404).send('Comment not found');
    }
    res.render('edit', { comment });
});
// PATCH /comments/:id (patch request to edit a specific comment)
app.patch('/comments/:id', (req, res) => {
    console.log('PATCH route hit');
    console.log('ID:', req.params.id);
    console.log('Body:', req.body);
    const { id } = req.params;
    const { content } = req.body;
    const comment = comments.find(c => c.id === id);
    if (!comment) {
        console.log('Comment not found');
        return res.status(404).send('Comment not found');
    }
    comment.content = content;
    res.redirect('/comments');
});
// GET /comment/delete (retrieve form to delete a comment)
app.get('/comment/delete',(req,res)=>{
    res.render('delete',{comments});
});
// DELETE /comment/:id (delete a specific comment)
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c=> c.id !== id);
    res.redirect('/comments'); // Redirect to the comments list after deletion
});

app.listen(3000,()=>console.log("Server Started..."));