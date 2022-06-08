var express = require('express');
var router = express.Router();
let Controllers = require("../controllers");

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let data = await Controllers.OrdersController.getAllOrders(req.query);
  res.json(data);
});

module.exports = router;
