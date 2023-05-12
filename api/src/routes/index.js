const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const traerActividad = require('./actRout.B.js');
const traerCiudades = require('./countRout.js');
const traerPorNombre = require('./nombreRout.js');
const agregarActividad = require('./postRout.js');
const traerPorId = require('./xidRout.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/activities', traerActividad);
router.use('/countries', traerCiudades);
router.use('/countries', traerPorNombre);
router.use('/activity', agregarActividad);
router.use('/countrie', traerPorId);

 
module.exports = router; 
