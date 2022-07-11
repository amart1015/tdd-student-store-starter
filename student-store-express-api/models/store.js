const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
  static async listProducts() {
    // list all items in the products array
    const products = storage.get("products").value();
    return products;
  }

  static async listPurchases() {
    // list all items in the purchases array
    const purchases = storage.get("purchases").value();
    return purchases;
  }

  static async oneProduct(productId) {
    const product = storage.get("products").find({ id:Number(productId) }).value();
    return product;
  }
}



module.exports = Store;