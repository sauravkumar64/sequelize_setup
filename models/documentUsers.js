var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let DocumentUsers = sequelize.define("documentUsers", {
  userDocumentsId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "userDocuments",
      col: "id"
    }
  },
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "users",
      col: "id"
    }
  }
},
  {
    timestamps: false,
    tableName: "documentUsers"
  }
);

module.exports = DocumentUsers;