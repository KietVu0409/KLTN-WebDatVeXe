"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class PriceLine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ PriceHeader, Station }) {
            this.belongsTo(Station, { foreignKey: "fromStation", as: "fromStationFK", onDelete: "cascade" });
            this.belongsTo(Station, { foreignKey: "toStation", as: "toStationFK", onDelete: "cascade" });
            this.belongsTo(PriceHeader, { foreignKey: "priceHeaderId", as: "priceHeader", onDelete: "cascade" });
        }
    }
    PriceLine.init(
        {
            price: DataTypes.FLOAT,
            priceHeaderId: DataTypes.INTEGER,
            fromStation: DataTypes.INTEGER,
            toStation: DataTypes.INTEGER,
            typeSeat: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "PriceLine",
        }
    );
    return PriceLine;
};
