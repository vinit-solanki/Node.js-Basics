const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("All Dogs")
})
router.get('/:id', (req,res)=>{
    res.send("Viewing A Dog")
})
router.get('/:id/edit', (req,res)=>{
    res.send('Editing A Dog')
})

module.exports = router;