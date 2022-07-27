const Product = require("../model/product");

class ProductDB {
  constructor() {
    this.data = [];
  }

  // create product function pass
  // /**
  //  *
  //  * @param {*} name
  //  * @param {*} price
  //  * @param {*} brand
  //  * @returns {<Array>}
  //  */

  create(name, price, brand) {
    const product = new Product(name, price, brand);
    this.data.push(product);
    return product;
  }

  //   find all data
  find() {
    return this.data;
  }

  // find  product by Id

  findById(id) {
    const product = this.data.find((item) => item.id == id);

    console.log(id, product);
    return product;
  }
  // update product
  updateById(id, data) {
    const product = this.data.find((item) => item.id == id);
    product.name = data.name ? data.name : product.name;
    product.price = data.price ? data.price : product.price;
    product.brand = data.brand ? data.brand : product.brand;
    return product;
    // console.log(product);
  }

  // delete product
  deleteProduct(id) {
    const product = this.data.find((item) => item.id == id);
    this.data.splice(product, 1);
    return this.data;
  }
}

const db = new ProductDB();
module.exports = db;
