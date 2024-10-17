const express = require("express");
const { createPromotionHeader, getAllPromotionHeader, getOnePromotionHeader, updatePromotionHeader, deletePromotionHeader, createPromotionLine, updatePromotionLine, getAllPromotionLine, getOnePromotionLine, deletePromotionLine, getPromotionByTripId, updateBugetPromotionLine } = require("../controllers/promotion.controller");
const { checkExist } = require("../middlewares/validations/checkExist");

const promotionRouter = express.Router();
const { PromotionLine, PromotionHeader } = require("../models");
/// header
promotionRouter.post("/header", createPromotionHeader);
promotionRouter.get("/header", getAllPromotionHeader);
promotionRouter.get("/header/:id", getOnePromotionHeader);
promotionRouter.put("/header/:id", checkExist(PromotionHeader), updatePromotionHeader);
promotionRouter.delete("/header/:id", checkExist(PromotionHeader), deletePromotionHeader);

// //// line
promotionRouter.delete("/line/:id", checkExist(PromotionLine), deletePromotionLine);
promotionRouter.post("/line", createPromotionLine);
promotionRouter.get("/line/all/:headerId", getAllPromotionLine);
promotionRouter.get("/line/:id", getOnePromotionLine);
promotionRouter.put("/line/:id", checkExist(PromotionLine), updatePromotionLine);
promotionRouter.get("/trip/:tripId", getPromotionByTripId);
promotionRouter.put("/line/update-budget/:id", checkExist(PromotionLine), updateBugetPromotionLine);

module.exports = { promotionRouter };
