const shortid = require("shortid");

class Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} brand
   */
  constructor(name, price, brand) {
    this.id = shortid.generate();
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.created = new Date();
  }
}

module.exports = Product;
