var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let Orders = sequelize.define("orders", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: null,
  },
  description: {
    type: Sequelize.DataTypes.STRING(300),
    defaultValue: null
  },
  address: {
    type: Sequelize.DataTypes.TEXT,
    defaultValue: null,
  },
  isDeleted: {
    type: Sequelize.DataTypes.TINYINT,
    defaultValue: 0
  }
},
  {
    tableName: "orders"
  }
);

module.exports = Orders;