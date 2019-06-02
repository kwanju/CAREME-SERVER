var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var csession = require('./utils/clientSession');

var indexRouter = require('./routes/index');
var shelterRouter = require('./routes/shelter/shelter');
var adoptRegisterRouter = require('./routes/adoptRegister/adoptRegister');
var adoptDetailRouter = require('./routes/adoptDetail/adoptDetail');
var erpRouter = require('./routes/erp/erp');
var androidRouter = require('./routes/android/android');
var mapRouter = require('./routes/map/mapTest');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(session({
  secret : 'keyboard',
  resave : false,
  saveUninitialized : true,
  cookie : {secure:false}
}));
app.use(logger('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit:'50mb',extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/drive',express.static(path.join(__dirname,'drive')));

app.use(csession); // user side session

app.use('/', indexRouter);
app.use('/user', shelterRouter);
app.use('/adoptRegister', adoptRegisterRouter);
app.use('/adoptDetail', adoptDetailRouter);
app.use('/erp',erpRouter);
app.use('/android',androidRouter);
app.use('/mapTest', mapRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
