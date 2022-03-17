var express = require('express');
var router = express.Router();

const { userLogin } = require('../controller/AuthController');

router.get('/', userLogin);

module.exports = router;
