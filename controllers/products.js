// const products = [];
const Product = require('../models/product');

module.exports.getAddProductsPage =  (req, res)=>{
    res.render('add-product',{title: 'Add Product',});
  }

module.exports.postNewProduct = (req, res)=>{
  let newProd = req.body.title;
  const product = new Product(newProd);
  product.create();
  res.redirect('/');
}

module.exports.getProducts = (req, res)=>{
  Product.print();
  const products = Product.fetchAll();
  res.render('shop', {prods: products, title: 'My Shopping Site'});
}