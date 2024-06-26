var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require("method-override");

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mount middleware into the middleware/request pipeline
// app.use([starts with path]<middleware fn> [, <middleware fn>])

app.use(function(req, res, next){
    // add a time property to the res.locals object
    // the time property will then be accessible 
    res.locals.time = new Date().toLocaleTimeString()
    next();
});

//Log in the terminal the HTTp request info
app.use(logger('dev'));

// Processes data sent in the body of the request, if it's jason
app.use(express.json());
 // Processe data sent in the "form" body of the request
 // It will create a propertu on req.body for each <input>, <select> and/or <textarea> in the <form>
app.use(express.urlencoded({ extended: false }));
//Add a coockies property for each cookie sent in the request
app.use(cookieParser());
// If the request is for a static asset, return the file
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));


// The first arg is the "starts with" path
// The path within the route modules are appended to the starts with paths
app.use('/', indexRouter);
app.use('/todos', todosRouter);

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
