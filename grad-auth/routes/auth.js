
const express = require('express');
const router=express.Router();


console.log('bbbbbbbbb')

router.get('/health', async (req, res) => {
    try {
        console.log('welcome')
        return res.status(200).send("Auth Service is Healthy");  
    } catch (error) {
        return res.status(500).send('err in catch');
    }
});


module.exports = router;

