"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class PromotionDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ PromotionHeader, PromotionLine, }) {
            this.belongsTo(PromotionHeader, { foreignKey: "promotionHeaderId", as: "promotionHeader", onDelete: "cascade" });
            this.belongsTo(PromotionLine, { foreignKey: "promotionLineId", as: "promotionLine", onDelete: "cascade" });
        }
    }
    PromotionDetail.init(
        {

            percentDiscount: DataTypes.INTEGER,
            quantityTicket: DataTypes.INTEGER,
            purchaseAmount: DataTypes.FLOAT,
            moneyReduced: DataTypes.FLOAT,
            maximumDiscount: DataTypes.FLOAT,
            budget: DataTypes.FLOAT,
            promotionHeaderId: DataTypes.INTEGER,
            promotionLineId: DataTypes.INTEGER,
            remainingBudget: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: "PromotionDetail",
        }
    );
    return PromotionDetail;
};
