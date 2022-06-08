var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let UsersOrders = sequelize.define("users_orders", {
  orderId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "order",
      col: "id"
    }
  },
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "users",
      col: "id"
    }
  },
},
  {
    tableName: "users_orders"
  }
);

module.exports = UsersOrders;