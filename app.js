require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const middleware = require('./middleware/auth')
var cors = require('cors')
var router = express.Router();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var startupRouter = require('./routes/startups');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var userLoginRouter = require('./routes/userLogin');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router.use('/', indexRouter);
router.use('/auth/register', registerRouter);
router.use('/auth/login', loginRouter);
router.use('/auth/user', middleware, userLoginRouter);
router.use('/user', middleware, usersRouter);
router.use('/startups', middleware, startupRouter);

app.use('/api/v1', router);

module.exports = app;
