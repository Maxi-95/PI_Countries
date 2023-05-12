const { Router } = require("express");
const { getIdxPais } = require('../Controllers/xidController.js')
const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        const getIdPais = await getIdxPais(id) 
        console.log(getIdPais)
        res.status(200).json(getIdPais)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

module.exports = router;

