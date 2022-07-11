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



router.post("/", async (req, res, next) => {
    try{
        const purchase = await Store.createPurchase(req.body.user, req.body.shoppingCart);
        res.status(201).json({ purchase });
    } catch(err) {
        next(err);
    }
}) 

module.exports = router;