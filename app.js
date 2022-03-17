require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const middleware = require('./middleware/auth')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var startupRouter = require('./routes/startups');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var userLoginRouter = require('./routes/userLogin');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/auth/register', registerRouter);
app.use('/api/v1/auth/login', loginRouter);
app.use('/api/v1/auth/user', middleware, userLoginRouter);
app.use('/api/v1/user', middleware, usersRouter);
app.use('/api/v1/startups', middleware, startupRouter);

module.exports = app;
