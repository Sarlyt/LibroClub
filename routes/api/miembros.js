const router = require("express").Router();
const {Club} = require('../../db');
const {check, validationResult} = require('express-validator');
const { QueryTypes } = require('sequelize');


router.get('/get-all', async (req, res)=>{
    const alumnos = await Club.findAll();
    res.json(alumnos);
});

router.post('/', [
    check('nombre', 'El nombre del club es obligatorio').not().isEmpty()
], async(req, res,)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty() ){
        return res.status(422).json({errores: errors.array()})
    }

    const alumno = await Club.create(req.body);
    res.json(alumno);
});

router.put('/:id', async(req, res)=>{
    await Alumno.update(req.body, {
        where:{ id: req.params.id}
    });

    res.send('Registro Actualizado');
});

router.get('/:id', async(req, res)=>{
    const alumnos = await Club.findOne({where:{ id: req.params.id}});
    res.json(alumnos);
});



router.delete('/:id', async(req, res)=>{
    await Alumno.destroy({
        where:{ id: req.params.id}
    });

    res.send("Registro eliminado");
});



module.exports=router;