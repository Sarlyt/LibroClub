const router = require("express").Router();
const {Usuario} = require('../../db');
const {check, validationResult} = require('express-validator');
const e = require("express");


router.get('/:id', async(req, res)=>{
    const usuario = await Usuario.findOne({
        where:{ id: req.params.id}
    });
    res.json(usuario);
});


router.get('/', async (req, res)=>{
    res.send('USUARIOS');
});


router.get('/get-all', async (req, res)=>{
    const alumnos = await Usuario.findAll();
    res.json(alumnos);
});


router.post('/registrar', async(req, res,)=>{
    console.log(req.body);
    try {
        const usuarioN = await Usuario.create(req.body);
        res.json(usuarioN);
        
    } catch (error) {
        console.log(error);
        res.send("Esta mal weon");
    }
});


router.get('/login/:correo/:password', async(req, res)=>{
    const{correo, password} = req.params;

    const usuario = await Usuario.findOne({  where:{ 'correo':correo, 'password':password } });
    if (usuario !== null) {
       return res.json(usuario);
    }

    console.log('Not found!');
    return res.status(200).json({msg: 'Usuario o Contraseña incorrectos' })

});


router.put('/:id', async(req, res)=>{
    await Usuario.update(req.body, {
        where:{ id: req.params.id}
    });

    res.send('Registro Actualizado');
});


router.get('/:id', async(req, res)=>{
    const usuario = await Usuario.findOne({  where:{ id: req.params.id} });
    if (usuario === null) {
        console.log('Not found!');
        return res.status(404).json({msg: 'Usuario No encontrado' })
    }
    res.json(usuario);
});


router.delete('/:id', async(req, res)=>{
    await Usuario.destroy({
        where:{ id: req.params.id}
    });

    res.send("Registro eliminado");
});






module.exports=router;

