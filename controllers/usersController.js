const Services = require("../services");
module.exports = {
  getAllUsers: async(data) => {
    let criteria = {
      // email: data.email
    };
    let projection = ["id", "name", "city"];
    let users = await Services.UsersService.getUsers(criteria, projection, data.limit || 10, data.skip || 0);
    return users;
  },
  addUser: async(data) => {
    let dataToSave = {
      email: data.email,
      name: data.name,
      city: data.city,
      age: data.age
    };
    let user = await Services.UsersService.addUser(dataToSave);
    console.log(user)
    return user;
  },
  updateUser: async(data) => {
    let dataToUpdate = {};
    if(data && data.email) dataToUpdate.email = data.email;
    if(data && data.name) dataToUpdate.name = data.name;
    if(data && data.city) dataToUpdate.city = data.city;
    if(data && data.email) dataToUpdate.age = data.age;
    let criteria = {
      id: data.id
    }
    let user = await Services.UsersService.updateUser(criteria, dataToUpdate);
    console.log(user);
    return user;
  },
  getUser: async(data) => {
    let criteria = {
      id: data.id
    };
    let projection = ["name", "email", "city"];
    let user = await Services.UsersService.getUserDetail(criteria, projection);
    return user;
  },
  deleteUser: async(data) => {
    let criteria = {
      id: data.id
    };
    let user = await Services.UsersService.deleteUser(criteria);
    console.log(user);
    return user;
  }
}