const { DocumentUsers, UserOrders } = require("../models");
const Models = require("../models");

Models.Orders.belongsToMany(Models.Users, { through: UserOrders });

exports.getOrders = (criteria, projection, limit, offset) => {
  console.log(criteria);
  return new Promise((resolve, reject) => {
    Models.Orders
      .findAll({
        where: criteria,
        attributes: projection,
        include: [{
          model: Models.Users,
          required: false
        }
      ]
      })
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err))
  })
};