require('dotenv').config();
const jwt = require('jsonwebtoken');
const{ JWT_SECRET } = process.env;
const { User } = require('../models');

module.exports = async (req, res, next) => {
    if(req.headers.authorization != null){
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decode = jwt.verify(token, JWT_SECRET);
            const id = decode.user.id;
            console.log(id);
            const user = await User.findByPk(id);
            if(user != null){
                console.log('Token authorized');
                console.log('iduser='+id);
                next()
            } else {
                res.status(400).json({ message : 'User not found'});
                console.log('User not found');
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