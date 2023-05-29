const router = require("express").Router();
const {Club} = require('../../db');
const { Op } = require("sequelize");
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

    const clubV = await Club.create(req.body);
    res.json(clubV);
});

router.put('/:id', async(req, res)=>{
    await Club.update(req.body, {
        where:{ id: req.params.id}
    });
    res.send('Registro Actualizado');
});

router.get('/misClubs/:id', async(req, res)=>{
    const clubV = await Club.findAll({where:{ idUsuario: req.params.id}});
    res.json(clubV);
});

router.get('/clubsPublicos/:id', async(req, res)=>{
    const clubV = await Club.findAll();
    const libros = JSON.parse(JSON.stringify(clubV));
    var salida=[];
    for (var i=0; i <libros.length; i++){
        if(libros[i].idUsuario!=parseInt(req.params.id)){
            salida.push(libros[i]);
        }
    }
    res.json(salida);
});




router.get('/:id', async(req, res)=>{
    const clubV = await Club.findOne({where:{ id: req.params.id}});
    res.json(clubV);
});



router.delete('/:id', async(req, res)=>{
    await Club.destroy({
        where:{ id: req.params.id}
    });
    res.send("Registro eliminado");
});



module.exports=router;