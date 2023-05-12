//import { useState } from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import s from "./CardsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ordenAscCont, ordenAscPopu, filterByCont } from "../../Redux/Actions/actions.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
import Detail from "../../views/Detail/Detail.jsx";

const CardsContainer = () => {
  const dispatch = useDispatch();
  
  const ciudades = useSelector((state) => state.state);
  const [orden, setOrden] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = ciudades.slice(firstPostIndex, lastPostIndex);
  //const detail = useSelector((state) => state.detail);
  
  
  function handleOrden(e) {
    e.preventDefault();
    dispatch(ordenAscCont(e.target.value));
    setOrden(e.target.value);
  }
  function handlePopulation(e) {
    e.preventDefault();
    dispatch(ordenAscPopu(e.target.value));
    setOrden(e.target.value);
  }
  function handleContinent(e) {
    e.preventDefault();
    dispatch(filterByCont(e.target.value));
    setOrden(e.target.value);
  }
  


  return (
    <div className={s.fondo}>
      <div className={s.division}>
        <div className={s.filtrados}>
            <h3 className={s.titulos}>Ordenar por:</h3>
          <select name="seleccion" id="" onChange={handleOrden} className={s.boton}>
            <option value="nombre">Nombre</option>
            <option value="A-Z">Ascendente</option>
            <option value="Z-A">Descendente</option>
          </select>
          <select name="" id="" onChange={handlePopulation} className={s.boton}>
            <option value="poblacion">Poblacion</option>
            <option value="Min">Ascendente</option>
            <option value="Max">Descendente</option>
          </select>
            <h3 className={s.titulos}>Continentes:</h3>
          <select name="" id="" onChange={handleContinent} className={s.boton}>
            <option value="All" key="All">
              All continents
            </option>
            <option value="Africa" key="Africa">
              Africa
            </option>
            <option value="Antarctica" key="Antarctica">
              Antarctica
            </option>
            <option value="Asia" key="Asia">
              Asia
            </option>
            <option value="Europe" key="Europe">
              Europe
            </option>
            <option value="North America" key="NorthAmerica">
              North America
            </option>
            <option value="Oceania" key="Oceania">
              Oceania
            </option>
            <option value="South America" key="SouthAmerica">
              South America
            </option>
          </select>
        </div>
        <div className={s.lasCartas}>
          {currentPosts.map((ciudad) => {
            return (
              <Card
                id={ciudad.id}
                imagen={ciudad.flag}
                nombre={ciudad.nombre}
                continente={ciudad.continente}
                poblacion={ciudad.poblacion}
              />
            );
          })}
        </div>
      </div>
      <div className={s.paginado}>
      <Pagination
        totalPost={ciudades.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      </div>
    </div>
  );
};

export default CardsContainer;
