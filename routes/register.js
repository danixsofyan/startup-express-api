var express = require('express');
var router = express.Router();

const { register } = require('../controller/AuthController');

router.post('/', register);

module.exports = router;
