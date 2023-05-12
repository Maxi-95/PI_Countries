const { Router } = require("express");
//const { getApiInfo, saveInfoBD } = require("../Controllers/actController.js");
//const axios = require('axios');
const { Country } = require('../db.js')
const router = Router();
//SET CLIENT_ENCODING TO 'UTF8';
router.get("/countries", async(req, res) => {
  try {

    const getCountries = await Country.findAll()
    res.status(200).json(getCountries)

  } catch (error) {
    res.status(404).json({error: error.message})

  }
})

module.exports = router;