var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let Countries = sequelize.define("countries", {
  id: {
    primaryKey: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: null,
  },
  isDeleted: {
    type: Sequelize.DataTypes.TINYINT,
    defaultValue: 0,
  }
},
  {
    tableName: "countries"
  }
);

module.exports = Countries;