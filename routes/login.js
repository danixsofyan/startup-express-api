require('dotenv').config();
var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const Validator = require('fastest-validator');
const { User } = require('../models');
const v = new Validator();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const{ SECRET } = process.env;

/* Register */
router.post('/', async (req, res) => {
  const schema = {
    email: { type: "email" },
    password: "string",
  }

  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }

  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if(user){
        const checkPassword = bcrypt.compareSync(req.body.password, user.password)
        if(checkPassword){
            const token = jwt.sign({
                user : {
                    id : user.id,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    username : user.username,
                    email : user.email,
                }
            }, SECRET)
            res.status(200).json({ message : 'Login success!', data : {token} });
        } else {
            res.status(400).json({ message : 'These credentials do not match our records.'});
            console.log('These credentials do not match our records.');
        }
    } else {
        res.status(400).json({ message : 'These credentials do not match our records.'});
        console.log('These credentials do not match our records.');
    }
  });

});

module.exports = router;
