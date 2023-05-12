const { Country, Activity } = require('../db.js');

const getIdxPais = async (id) => {

    const idPais = await Country.findOne({
        where:{
            id: id
        },
    })
    if(!idPais){
        const todoCountry = await Country.findAll()
        return todoCountry;

    }

    return idPais
}

module.exports = {
    getIdxPais
}