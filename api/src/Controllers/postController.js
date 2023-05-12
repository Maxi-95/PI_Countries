const { Activity, Country } = require('../db.js') 

const saveActivity = async ( nombre, dificultad, duracion, temporada ) => {
   try {
      const activity = await Activity.create({ nombre, dificultad, duracion, temporada })
      
      return activity
    
   } catch (error) {
    return error
   }
}

module.exports = {
   saveActivity,
}