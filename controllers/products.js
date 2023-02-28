const products = [];

module.exports.getAddProductsPage =  (req, res)=>{
    res.render('add-product',{title: 'Add Product',});
  }

module.exports.postNewProduct = (req, res)=>{
  let newProd = req.body.title;
  products.push(newProd);
  res.redirect('/');
}

module.exports.getProducts = (req, res)=>{
  res.render('shop', {prods: products, title: 'My Shopping Site'});
}