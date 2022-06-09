var sequelize = require("../dbConnection").sequelize;

let UsersOrders = sequelize.define("users_orders", {

},
  {
    tableName: "users_orders",
    timestamps: false
  }
);

module.exports = UsersOrders;