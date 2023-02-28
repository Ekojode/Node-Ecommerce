const products = [];

module.exports = class Product {
    constructor(title, description, image){
        this.title = title;
        this.description = description;
        this.image = image;
    }

    create(){
        products.push(this);
    }

    static fetchAll(){
          return products;
    }

    static print(){
        console.log(products);
    }
}