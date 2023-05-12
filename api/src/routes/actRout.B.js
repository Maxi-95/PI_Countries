const {Router} = require('express');
//const { Activity, Country } = require('../db.js');
const { getIdActivity } = require('../Controllers/actController.js')
const router = Router();
// post a -> http://localhost:3001/activity

router.get('/:idActivity', async (req,res) => {
     try{
          const { idActivity } = req.params;
          // const activity = await Activity.findByPk(idActivity, {
          //      include: {
          //           model: Country
          //      }
          // });

          const laActividad = await getIdActivity(idActivity)
          res.json(laActividad);
     }catch(e){
          res.send(e);
     }
});


module.exports = router; 