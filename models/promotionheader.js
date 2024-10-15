"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class PromotionHeader extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ PromotionLine, PromotionDetail }) {
            this.hasMany(PromotionLine, { foreignKey: "promotionHeaderId", as: "promotionLine", onDelete: "cascade" });
            this.hasMany(PromotionDetail, { foreignKey: "promotionHeaderId", as: "promotionDetail", onDelete: "cascade" });
        }
    }
    PromotionHeader.init(
        {

            title: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            status: DataTypes.BOOLEAN,
            description: DataTypes.STRING,
            imgUrl: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "PromotionHeader",
        }
    );
    return PromotionHeader;
};
