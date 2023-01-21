const path = require('path');

const express = require('express');

const pathUtil = require('../utilities/path');

const router = express.Router();

router.get('/addProduct', (req, res)=>{
    res.sendFile(path.join(pathUtil, 'views', 'add-product.html'));
});

router.post('/addProduct', (req, res)=>{
    console.log(req.body)
    let newProd = req.body["title"];
    res.send(`${newProd} has been created <br>  <p><a href="/">Destinations</a></p>  `);
})

module.exports = router;