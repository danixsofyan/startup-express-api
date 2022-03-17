require('dotenv').config();
const jwt = require('jsonwebtoken');
const{ JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
    if(req.headers.authorization != null){
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, JWT_SECRET);
        req.body.id = decode.user.id
        console.log(decode)
        next()
    } else{
        res.status(400).json({ message : 'Unauthorized request'});
        console.log('Unauthorized request');
    }
}