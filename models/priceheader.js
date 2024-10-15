"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class PriceHeader extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate({ TimePoint, Ticket }) {
        //     this.belongsTo(TimePoint, { foreignKey: "timepointId", as: "timepointTicket", onDelete: "cascade" });
        //     this.belongsTo(Ticket, { foreignKey: "ticketId", as: "ticketPointId", onDelete: "cascade" });
        // }
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
