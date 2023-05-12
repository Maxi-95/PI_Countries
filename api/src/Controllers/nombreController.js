const { Country, Activity } = require("../db.js");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getNameCount = async (name) => {
    try {
        if(!name){
            const result1 = await Country.findAll({indludes: Activity})
            return result1;
        }
        
        const result2 = await Country.findAll({
            where:{
                nombre: {
                    [Op.iLike]: `%${name}%`
                }
            },
            includes: Activity
        })

        if(result2.length === 0){
           return "No se encontro ningun pais con ese NAME"
        } 

        return result2;
    } catch (error) {
        return {
            error: error.message
        };
    }


}

module.exports = {
    getNameCount
}