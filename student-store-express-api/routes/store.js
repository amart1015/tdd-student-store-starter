const express = require("express");
const router = express.Router();
const {NotFoundError, BadRequestError} = require('../utils/errors');
const Store = require('../models/store');


router.get("/:productId", async (req, res, next) => {
    try{
        const productId = req.params.productId;
        const product = await Store.oneProduct(productId);
        if (!product){
            throw new NotFoundError("Product not found!");
        }
        res.status(200).json({product});
    } catch(err) {
        next(err);
    }
}) 

router.get("/", async (req, res, next) => {
    try{
        const products = await Store.listProducts();
        res.status(200).json({ products });
    } catch(err) {
        next(err);
    }
}) 



router.post('/add', async (req, res) => {
    let user = req.body.user
    let shoppingCart = req.body.shoppingCart

    await Store.makePurchase(user, shoppingCart)
})

module.exports = router;