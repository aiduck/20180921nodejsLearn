var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//api接口
const file = require('./routes/api/file')
const uploads = require('./routes/api/uploads')
const download = require('./routes/api/download')
const exportWord = require('./routes/api/exportWord')
const excel = require('./routes/api/excel')
const academyesc = require('./routes/api/academyesc')
const user = require('./routes/api/user')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 自己写的接口
app.use('/api/file', file);
app.use('/api/uploads', uploads);
app.use('/api/download', download);
app.use('/api/excel',excel);
app.use('/api/exportWord',exportWord);
app.use('/api/academyesc',academyesc);
app.use('/api/user',user);


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
