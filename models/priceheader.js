"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class PriceHeader extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ PriceLine }) {
            this.hasMany(PriceLine, { foreignKey: "priceHeaderId", as: "priceLine", onDelete: "cascade" });
        }
    }
    PriceHeader.init(
        {
            title: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            status: DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: "PriceHeader",
        }
    );
    return PriceHeader;
};
