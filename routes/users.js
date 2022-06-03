var express = require('express');
var router = express.Router();
let Controllers = require("../controllers");

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let data = await Controllers.UsersController.getAllUsers(req.query);
  res.json(data);
});

router.post('/', async (req, res, next) => {
  let data = await Controllers.UsersController.addUser(req.body);
  if(data) res.json({status: 200, message: "User Successfully Created"});
  else {
    res.json({status: 400, message: "Something Wrong!!"});
  }
});

router.put('/', async (req, res, next) => {
  let data = await Controllers.UsersController.updateUser(req.body);
  if(data) res.json({status: 200, message: "Updated Successfully"});
  else {
    res.json({status: 400, message: "Something Wrong!!"});
  }
});

router.get('/:id', async (req, res, next) => {
  let data = await Controllers.UsersController.getUser(req.params);
  if(data) res.json({status: 200, data: data});
  else {
    res.json({status: 400, message: "Something Wrong!!"});
  }
});


router.delete('/:id', async (req, res, next) => {
  let data = await Controllers.UsersController.deleteUser(req.params);
  if(data) res.json({status: 200, data: "User Deleted Successfully"});
  else {
    res.json({status: 400, message: "Something Wrong!!"});
  }
});

module.exports = router;
