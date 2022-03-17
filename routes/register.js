var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const Validator = require('fastest-validator');
const { User } = require('../models');
const v = new Validator();
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* Create */
router.post('/', async (req, res) => {
  const schema = {
    firstName: "string",
    lastName: "string",
    username: "string",
    email: { type: "string", unique: true },
    password: "string",
  }

  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }

  const email = await User.findOne({ where: { email: req.body.email } });
  const username = await User.findOne({ where: { username: req.body.username } });
  
  if (username != null) {
    res.status(400).json({ message : 'Username is already registered'});
    console.log('Username is already registered');
  } 
  else if(email != null) {
    res.status(400).json({ message : 'Email is already registered'});
    console.log('Email is already registered');
  } 
  else {
    const salt = bcrypt.genSaltSync(saltRounds);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    
    const user = await User.create(req.body);
    res.status(201).json({ message : 'User successfully created!', data : user });
  }

});

module.exports = router;
