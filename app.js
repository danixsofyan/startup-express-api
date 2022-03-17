require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var startupRouter = require('./routes/startups');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/register', registerRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/startups', startupRouter);

module.exports = app;
