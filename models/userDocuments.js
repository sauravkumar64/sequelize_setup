var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let UserDocuments = sequelize.define("userDocuments", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  docType: {
    type:  Sequelize.DataTypes.STRING,
    defaultValue: null
  },
  image: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: null,
  },
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "users",
      col: "id"
    }
  },
  isDelted: {
    type: Sequelize.DataTypes.TINYINT,
    defaultValue: 0,
  }
},
  {
    tableName: "userDocuments"
  }
);

module.exports = UserDocuments;