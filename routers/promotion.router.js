const express = require("express");
const {createPromotionHeader, getAllPromotionHeader, getOnePromotionHeader, updatePromotionHeader, deletePromotionHeader} = require("../controllers/promotion.controller");

const promotionRouter = express.Router();

/// header
promotionRouter.post("/header", createPromotionHeader);
promotionRouter.get("/header", getAllPromotionHeader);
promotionRouter.get("/header/:id", getOnePromotionHeader);
promotionRouter.put("/header/:id", updatePromotionHeader);
promotionRouter.delete("/header/:id", deletePromotionHeader);

// //// line
// promotionRouter.delete("/line/:id", deletePriceLine);
// promotionRouter.post("/line", createPriceLine);
// promotionRouter.get("/line", getAllPriceLine);
// promotionRouter.get("/line/:idLine", getOnePriceLine);
// promotionRouter.put("/line/:id", updatePriceLine);

module.exports = {promotionRouter};
