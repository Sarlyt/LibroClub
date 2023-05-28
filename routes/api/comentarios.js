const router = require("express").Router();
const {Comentario} = require('../../db');
const {check, validationResult} = require('express-validator');
const { QueryTypes } = require('sequelize');


router.get('/get-all', async (req, res)=>{
    const alumnos = await Comentario.findAll();
    res.json(alumnos);
});

router.post('/', async(req, res,)=>{
    const alumno = await Comentario.create(req.body);
    res.json(alumno);
});

router.put('/:id', async(req, res)=>{
    await Comentario.update(req.body, {
        where:{ id: req.params.id}
    });

    res.send('Registro Actualizado');
});

router.get('/:id', async(req, res)=>{
    const alumnos = await Comentario.findOne({where:{ id: req.params.id}});
    res.json(alumnos);
});



router.delete('/:id', async(req, res)=>{
    await Comentario.destroy({
        where:{ id: req.params.id}
    });

    res.send("Registro eliminado");
});



module.exports=router;