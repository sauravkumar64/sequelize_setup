var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var Sequelize = require("sequelize");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Sequelize connection
require("./dbConnection").connect();
require("./models");

// var sequelize = new Sequelize(
//   "demodb",
//   "root",
//   "applify@123",
//   {
//     host: 'localhost',
//     dialect: 'mysql'
//   }
// );

// sequelize.authenticate()
//   .then(() => {
//     sequelize.sync();
//     console.log("Connected Successfully")
//   })
//   .catch((err) => {
//     console.log("Sequelize Connection Error:  ", err)
//   });

// sequelize.define("users", {
//   id: {
//     primaryKey: true,
//     type: Sequelize.DataTypes.INTEGER,
//   },
//   name: {
//     type: Sequelize.DataTypes.STRING,
//     defaultValue: null,
//   },
//   city: {
//     type: Sequelize.DataTypes.STRING(30),
//     defaultValue: null,
//   },
//   age: {
//     type: Sequelize.DataTypes.INTEGER,
//     defaultValue: null,
//   }
// },
//   {
//     tableName: "users"
//   }
// );

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
