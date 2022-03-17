const res = require('express/lib/response');
const Validator = require('fastest-validator');
const { Startup } = require('../models');
const v = new Validator();

exports.index = async (req, res) => {
    const startup = await Startup.findAll();
    res.json({ message : 'Startup listed!', data : startup });
}

exports.show = async (req, res) => {
    const id = req.params.id;
    const startup = await Startup.findByPk(id);
    if(!startup){
        return res.status(400).json({ message : 'Startup not found!' });
    }
    res.json({ message : 'Startup detail!', data : startup });
}

exports.store = async (req, res) => {
    const schema = {
        name: "string",
        email: "email",
        desc: "string",
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
    return res
    .status(400)
    .json(validate);
    
    }
    
    const startup = await Startup.create(req.body);
    res.status(201).json({ message : 'Startup successfully created!', data : startup });
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const startup = await Startup.findByPk(id);

    if(!startup){
        return res.status(400).json({ message : 'Startup not found!' });
    }

    const schema = {
        name: "string|optional",
        email: "email|optional",
        desc: "string|optional",
    }
    
    const validate = v.validate(req.body, schema);

    if(validate.length){
    return res
    .status(400)
    .json(validate);
    
    }

    await startup.update(req.body);
    res.json({ message : 'Startup edited!', data : startup });
}

exports.destroy = async (req, res) => {
    const id = req.params.id;
    const startup = await Startup.findByPk(id);
    if(!startup){
        return res.status(400).json({ message : 'Startup not found!' });
    }
    await startup.destroy();
    res.json({ message : 'Startup is deleted!'});
}