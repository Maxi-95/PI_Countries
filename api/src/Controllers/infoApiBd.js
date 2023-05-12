const { Country } = require ('../db.js')

const {data} = await axios.get("https://restcountries.com/v3/all");
data.map(async (c) => {
  await Country.findOrCreate({
    where: {
      id: c.cca3, 
      nombre: c.name.common,
      flag: c.flags[0],
      continente: c.continents[0],
      capital: c.capital ? c.capital[0] : "No Capital",
      subregion: c.subregion || "None",
      area: c.area.toString(),
      poblacion: c.population.toString(),
    },
  });
});
