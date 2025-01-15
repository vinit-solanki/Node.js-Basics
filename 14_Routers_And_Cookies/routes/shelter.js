const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Home Page');
})
router.get('/shelters', (req,res)=>{
    res.send('All Shelters')
})
router.post('/shelters', (req,res)=>{
    res.send('Creating  Shelter...')
})
router.get('/shelters/:id', (req,res)=>{
    res.send('Viewing One Shelter')
})
router.get('/shelters/:id/edit', (req,res)=>{
    res.send('Editing One Shelter')
})

module.exports = router;