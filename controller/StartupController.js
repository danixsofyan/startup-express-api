const res = require('express/lib/response');
const Validator = require('fastest-validator');
const { Startup } = require('../models');
const v = new Validator();

exports.index = async (req, res) => {
    const startup = await Startup.findAll();
    const iduser = 1
    res.json({ message : 'Startup listed!', data : startup, iduser:  iduser});
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
        id_user: "integer",
        name: "string",
        solution: "string",
        id_usecase_tribe: "integer",
        id_industry: "integer",
        target_customer: "string",
        business_model: "string",
        location: "string",
        time_of_operation: "string",
        id_stage: "integer",
        link: "string",
        contact_person: "string",
        email: "email",
        phone: "integer",
        pitch_deck: "string",
        analysis: "string",
        id_status: "integer",
        desc: "string",
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
    return res
    .status(400)
    .json(validate);
    
    }

    try {
        const startup = await Startup.create(req.body);
        res.status(201).json({ message : 'Startup successfully created!', data : startup });
    } catch (err) {
        res.status(400).json({ message : err});
    }
    
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