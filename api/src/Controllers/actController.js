const { Activity, Country } = require('../db.js');

const getIdActivity = async (idActivity) => {
    const activity = await Activity.findByPk(idActivity, {
             include: {
                  model: Country
             }
        });

        return activity ? activity : []
}

module.exports = {
    getIdActivity
}