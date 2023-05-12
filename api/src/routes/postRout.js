const { Router } = require("express");
//const { Activity, Country } = require('../db.js')
const { saveActivity } = require('../Controllers/postController.js')
const router = Router();

router.post("/agregar", async (req, res) => {
    const { nombre, dificultad, duracion, temporada } = req.body;

    try {

        if(!nombre || !dificultad || !duracion || !temporada){
            res.status(404).send("Faltan datos para crear una Actividad")
        }
        await saveActivity(nombre, dificultad, duracion, temporada)
        res.status(200).send("actividad Creada")
      
    } catch (error) {
       res.status(404).json({error: error.message})
    }
})


module.exports = router;