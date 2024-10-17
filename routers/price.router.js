const express = require("express");
const { createPriceHeader,
    createPriceLine,
    getAllPriceHeader,
    getOnePriceHeader,
    getOnePriceLine,
    getAllPriceLine,
    updatePriceLine,
    updatePriceHeader,
    deletePriceHeader,
    deletePriceLine } = require("../controllers/price.controller");
const { checkExist } = require("../middlewares/validations/checkExist");
const { PriceLine, PriceHeader } = require("../models");

const priceRouter = express.Router();

/// header
priceRouter.post("/header", createPriceHeader);
priceRouter.get("/header", getAllPriceHeader);
priceRouter.get("/header/:idHeader", getOnePriceHeader);
priceRouter.put("/header/:id", checkExist(PriceHeader), updatePriceHeader);
priceRouter.delete("/header/:id", checkExist(PriceHeader), deletePriceHeader);


//// line
priceRouter.delete("/line/:id", checkExist(PriceLine), deletePriceLine);
priceRouter.post("/line", createPriceLine);
priceRouter.get("/line/all/:idHeader", getAllPriceLine);
priceRouter.get("/line/:idLine", getOnePriceLine);
priceRouter.put("/line/:id", checkExist(PriceLine), updatePriceLine);


module.exports = { priceRouter };
