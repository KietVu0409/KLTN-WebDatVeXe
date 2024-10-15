"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class PromotionLine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ PromotionHeader, PromotionDetail }) {
            this.belongsTo(PromotionHeader, { foreignKey: "promotionHeaderId", as: "promotionHeader", onDelete: "cascade" });
            this.hasOne(PromotionDetail, { foreignKey: "promotionLineId", as: "promotionDetail", onDelete: "cascade" });
        }
    }
    PromotionLine.init(
        {

            title: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            status: DataTypes.BOOLEAN,
            description: DataTypes.STRING,
            promotionHeaderId: DataTypes.INTEGER,
            promotionType: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "PromotionLine",
        }
    );
    return PromotionLine;
};
