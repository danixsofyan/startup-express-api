const res = require('express/lib/response');
const Validator = require('fastest-validator');
const { User } = require('../models');
const v = new Validator();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const{ JWT_SECRET } = process.env;
var uuid = require('uuid');

exports.register = async (req, res) => {
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
    req.body.id = uuid.v4();
    
    const user = await User.create(req.body);
    const token = jwt.sign({
        user : {
            id : user.id,
            firstName : user.firstName,
            lastName : user.lastName,
            username : user.username,
            email : user.email,
        }
    }, JWT_SECRET)
    res.status(201).json({ message : 'User successfully created!', data : {user, token} });
    }
}

exports.login = async (req, res) => {
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
            }, JWT_SECRET)
            res.status(200).json({ message : 'Login success!', data : {user, token} });
        } else {
            res.status(400).json({ message : 'These credentials do not match our records.'});
            console.log('These credentials do not match our records.');
        }
    } else {
        res.status(400).json({ message : 'These credentials do not match our records.'});
        console.log('These credentials do not match our records.');
    }
    });
    
}

exports.userLogin = async (req, res) => {
    if(req.headers.authorization != null){
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decode = jwt.verify(token, JWT_SECRET);
            const id = decode.user.id;
            const user = await User.findByPk(id);
            if(user != null){
                res.json({ message : 'User login info', data : user });
            } else {
                res.status(400).json({ message : 'Invalid token'});
                console.log('Invalid token');
            }
        } catch(err) {
          res.status(400).json({ message : 'Invalid token'});
          console.log('Invalid token');
        }
    } else {
        res.status(400).json({ message : 'Unauthorized request, a token is required for authentication'});
        console.log('Unauthorized request, a token is required for authentication');
    }
}