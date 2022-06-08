const { DocumentUsers, UserOrders } = require("../models");
const Models = require("../models");

Models.Users.belongsTo(Models.Countries, {
  foreignKey: "countryId",
  as: "countries"
});

// Models.Users.hasMany(Models.UserDocuments, {
//   foreignKey: "userId"
// });

Models.Users.belongsToMany(Models.UserDocuments, { through: DocumentUsers });
Models.UserDocuments.belongsToMany(Models.Users, { through: DocumentUsers });

Models.Users.belongsToMany(Models.Orders, { through: UserOrders });
Models.Orders.belongsToMany(Models.Users, { through: UserOrders });

exports.getUsers = (criteria, projection, limit, offset) => {
  console.log(criteria);
  return new Promise((resolve, reject) => {
    Models.Users
      .findAll({
        where: criteria,
        attributes: projection,
        include: [{
          model: Models.Countries,
          as: "countries",
          required: true
        },
        {
          model: Models.UserDocuments,
          required: false
        },
        {
          model: Models.Orders,
          required: false
        }
      ]
        // group: "city"
      })
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err))
  })
};

exports.addUser = (objToSave) => {
  return new Promise((resolve, reject) => {
    Models.Users
      .create(objToSave)
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err))
  })
}

exports.updateUser = (criteria, objToUpdate) => {
  return new Promise((resolve, reject) => {
    Models.Users
      .update(objToUpdate, { where: criteria })
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err))
  })
}

exports.getUserDetail = (criteria, projection) => {
  return new Promise((resolve, reject) => {
    Models.Users
      .findOne({
        where: criteria,
        attributes: projection
      })
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err))
  })
};

exports.deleteUser = (criteria) => {
  return new Promise((resolve, reject) => {
    Models.Users
      .destroy({where: criteria})
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err))
  })
};