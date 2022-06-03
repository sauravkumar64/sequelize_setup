var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let Users = sequelize.define("users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  email: {
    type:  Sequelize.DataTypes.STRING,
    defaultValue: null
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: null,
  },
  city: {
    type: Sequelize.DataTypes.STRING(30),
    defaultValue: null
  },
  age: {
    type: Sequelize.DataTypes.INTEGER,
    defaultValue: null,
  },
  countryId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "countries",
      col: "id"
    }
  }
},
  {
    tableName: "users"
  }
);

module.exports = Users;