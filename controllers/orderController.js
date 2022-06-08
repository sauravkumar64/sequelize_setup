const Services = require("../services");
module.exports = {
  getAllOrders: async(data) => {
    let criteria = {
      // email: data.email
    };
    let projection = [];
    let orders = await Services.OrdersService.getOrders(criteria, projection, data.limit || 10, data.skip || 0);
    return orders;
  }
}