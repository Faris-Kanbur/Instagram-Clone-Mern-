const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("HELLO")
})

router.post('/singup', (req,res) => {
    console.log(req.body.name)
})




module.exports = router
