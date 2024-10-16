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

const priceRouter = express.Router();

/// header
priceRouter.post("/header", createPriceHeader);
priceRouter.get("/header", getAllPriceHeader);
priceRouter.get("/header/:idHeader", getOnePriceHeader);
priceRouter.put("/header/:id", updatePriceHeader);
priceRouter.delete("/header/:id", deletePriceHeader);


//// line
priceRouter.delete("/line/:id", deletePriceLine);
priceRouter.post("/line", createPriceLine);
priceRouter.get("/line/all/:idHeader", getAllPriceLine);
priceRouter.get("/line/:idLine", getOnePriceLine);
priceRouter.put("/line/:id", updatePriceLine);


module.exports = { priceRouter };
