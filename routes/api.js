const router = require("express").Router();
const apiUsuarios = require('./api/usuarios');
const apiAlumnos = require('./api/alumnos');
const apiClubs = require('./api/clubs');
const apiComentarios = require('./api/comentarios');
const apiMiembros = require('./api/miembros');

router.use('/usuario', apiUsuarios);
//router.use('/examen', apiAlumnos);
router.use('/clubs', apiClubs);
router.use('/comentarios', apiComentarios);
router.use('/miembros', apiMiembros);

router.get('/', async (req, res)=>{
    res.send('Mi Sarlyt Nalgona y Preciosa Como la Amo por que se rifa mucho y me hace sentir orgulloso de lo mucho que se esfuerza <3 ');
});

module.exports = router;
