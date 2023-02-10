const path = require('path');

const express = require('express');

const adminData = require('./admin');
const pathUtil = require('../utilities/path');

const router = express.Router();

router.get('/',(req, res)=>{
    // console.log(adminData.products);
    // res.sendFile(path.join(pathUtil, 'views', 'shop.html'));
    res.render('shop', {prods: adminData.products, title: 'My Shopping Site', hasProducts: adminData.products.length > 0 , layout: false});
});

module.exports = router;