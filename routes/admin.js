const path = require('path');

const express = require('express');

const pathUtil = require('../utilities/path');

const router = express.Router();

const products = [];

router.get('/addProduct', (req, res)=>{
  //  res.sendFile(path.join(pathUtil, 'views', 'add-product.html'));
  res.render('add-product',{title: 'Add Product', layout: false});
});

router.post('/addProduct', (req, res)=>{
    let newProd = req.body.title;
    products.push(newProd);
    res.redirect('/');
})

module.exports.routes = router;
module.exports.products = products;