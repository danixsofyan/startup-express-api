const res = require('express/lib/response');
const { Startup } = require('../models');
const Validator = require('fastest-validator');
const v = new Validator();

exports.index = async (req, res) => {
    const startup = await Startup.findAll();
    res.json({ message : 'Startup listed!', data : startup});
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
        id_user: "string",
        name: "string",
        solution: "string",
        id_usecase_tribe : { type: "number", positive: true, integer: true },
        id_industry : { type: "number", positive: true, integer: true },
        target_customer: "string",
        business_model: "string",
        location: "string",
        time_of_operation: "string",
        id_stage : { type: "number", positive: true, integer: true },
        link: "string",
        contact_person: "string",
        email: "email",
        phone: "string",
        id_status : { type: "number", positive: true, integer: true }
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
    return res
    .status(400)
    .json(validate);
    }

    try {
        // $path_pitch_deck = ('uploads/pitchdeck');
        // if (!file_exists($path_pitch_deck)) {
        //     mkdir($path_pitch_deck, 0777, true);
        // }
        // let file_pitch_deck = req.files.pitch_deck;
        // let filename_pitch_deck = file_pitch_deck.filename;
        // file.mv(path_pitch_deck+filename_pitch_deck, (err) => {
        //     if(err){
        //         res.status(400).json({ message : err});
        //     }
        // })

        // let file_analysis = req.files.pitch_deck;
        // let filename_analysisk = file_analysis.filename;
        // file.mv('./uploads/analysis'+filename_analysisk, (err) => {
        //     if(err){
        //         res.status(400).json({ message : err});
        //     }
        // })

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