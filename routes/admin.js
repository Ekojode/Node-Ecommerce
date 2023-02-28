const path = require('path');

const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

router.get('/addProduct', productController.getAddProductsPage);
router.post('/addProduct', productController.postNewProduct)

module.exports = router;
