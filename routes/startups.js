var express = require('express');
var router = express.Router();

const { index, show, store, update, destroy } = require('../controller/StartupController')
router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
