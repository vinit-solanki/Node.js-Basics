const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next();
    } else{
        res.send("Not an Admin");
    }
})
router.get('/top-secret', (req,res)=>{
    res.send('Top Secret')
})
router.get('/delete-everything', (req,res)=>{
    res.send('Deleting All..')
})

module.exports = router;