var Sequelize = require("sequelize")

var sequelize = new Sequelize(
  "demodb",
  "root",
  "applify@123",
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

var connect = () => {
  sequelize.authenticate()
    .then(() => {
      sequelize.sync();
      console.log("Connected Successfully")
    })
    .catch((err) => {
      console.log("Sequelize Connection Error:  ", err)
    });
}
module.exports = {
  sequelize: sequelize,
  connect: connect
}