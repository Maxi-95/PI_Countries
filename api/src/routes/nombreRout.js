const { Router } = require("express");
const { getNameCount } = require('../Controllers/nombreController.js')
const router = Router();

router.get("/", async (req, res) => { 
    try {
        const { name } = req.query;
        
        const countryName = await getNameCount(name)
        res.status(200).json(countryName)
    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
})


module.exports = router;