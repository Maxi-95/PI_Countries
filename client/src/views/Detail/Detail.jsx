import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../Redux/Actions/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Detail.module.css";

const Detail = () => {
  const estado = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getById(id));
  }, []);
  return (
    <div className={s.fondo}>
      <div className={s.detalles}>
        <div>
          <div>
            <img className={s.imagen} src={estado.flag} alt="foto" />
          </div>
        </div>
        <div className={s.descripcion}>
          <div className={s.caracteristicas}>
            <div className={s.titulo}>
              <h1>{estado.nombre}</h1>
            </div>
            <div className={s.puntos_a}>
              <h3>Código:</h3>
              <p>{estado.id}</p>
            </div>
            <div className={s.puntos_b}>
              <h3>Capital:</h3>
              <p>{estado.capital}</p>
            </div>
            <div className={s.puntos_a}>
              <h3>Superficie:</h3>
              <p>{estado.area / 1000} km2</p>
            </div>
            <div className={s.puntos_b}>
              <h3>Población:</h3>
              <p>{estado.poblacion}</p>
            </div>
            <div className={s.puntos_a}>
              <h3>Continente:</h3>
              <p>{estado.continente}</p>
            </div>
          </div>
          <button className={s.boton}>
            <Link to={"/home"}>Inicio</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
