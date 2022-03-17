var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const Validator = require('fastest-validator');

const { Startup } = require('../models');
const v = new Validator();

/* Create */
router.post('/', async (req, res) => {
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

});

/* Read */
router.get('/', async (req, res) => {
    const startup = await Startup.findAll();
    res.json({ message : 'Startup listed!', data : startup });
});

/* Show */
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const startup = await Startup.findByPk(id);
    if(!startup){
        return res.status(400).json({ message : 'Startup not found!' });
    }
    res.json({ message : 'Startup view!', data : startup });
});

/* Update */
router.put('/:id', async (req, res) => {
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
    // res.json('ok');
});

/* Delete */
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const startup = await Startup.findByPk(id);
    if(!startup){
        return res.status(400).json({ message : 'Startup not found!' });
    }
    await startup.destroy();
    res.json({ message : 'Startup is deleted!'});
});

module.exports = router;
