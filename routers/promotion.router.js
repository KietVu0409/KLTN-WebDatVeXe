const express = require("express");
const { createPromotionHeader, getAllPromotionHeader, getOnePromotionHeader, updatePromotionHeader, deletePromotionHeader, createPromotionLine, updatePromotionLine, getAllPromotionLine, getOnePromotionLine, deletePromotionLine } = require("../controllers/promotion.controller");

const promotionRouter = express.Router();

/// header
promotionRouter.post("/header", createPromotionHeader);
promotionRouter.get("/header", getAllPromotionHeader);
promotionRouter.get("/header/:id", getOnePromotionHeader);
promotionRouter.put("/header/:id", updatePromotionHeader);
promotionRouter.delete("/header/:id", deletePromotionHeader);

// //// line
promotionRouter.delete("/line/:id", deletePromotionLine);
promotionRouter.post("/line", createPromotionLine);
promotionRouter.get("/line/all/:headerId", getAllPromotionLine);
promotionRouter.get("/line/:id", getOnePromotionLine);
promotionRouter.put("/line/:id", updatePromotionLine);

module.exports = { promotionRouter };
