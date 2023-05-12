import { useEffect, useState } from "react";
import s from "./Form.module.css";
import { createActivity, getCiudades } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  //const paises = ["Alemania", "Africa", "Francia", "Bengica", "Autralia"];
  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
   // ciudades:""
  });

  const [error, setError] = useState({
    nombre: "datos obligatorios",
    dificultad: "datos obligatorios",
    duracion: "datos obligatorios",
    temporada: "datos obligatorios",

  });

  const validate = (input) => {
    if (!input.nombre) {
      setError({ ...error, nombre: "tiene que ingresar un nombre" });
      return;
    }
    if (!input.dificultad) {
      setError({ ...error, dificultad: "tiene que ser un nuemro del 1 al 5" });
      return;
    }
    if (!input.duracion) {
      setError({ ...error, duracion: "tiene que agregar el tiempo" });
      return;
    }
    if (!input.temporada) {
      setError({
        ...error,
        temporada: "debe elegir entre entre las estaciones de año",
      });
      return;
    } else {
      setError({
        ...error,
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
      });
    }
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handlePais(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }


  console.log(input)
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createActivity(input));
  }

  const dificultad = ["elegir", 1, 2, 3, 4, 5];
  const duracion = ["elegir",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  return (
    <div className={s.fondo}>
      <form onSubmit={handleSubmit} className={s.formulario}>
        <div className={s.losInput}>
          <label htmlFor=""><h2>Nombre:</h2></label>
          <input name="nombre" value={input.value} onChange={handleChange} />
          <h4 className={s.errores}>{error.nombre}</h4>
        </div>

        <div className={s.losInput}>
          <label htmlFor=""><h2>Dificultad:</h2></label>
          <select name="dificultad" value={input.value} onChange={handleChange}>
            {dificultad.map((e) => {
              return <option value={input.value}>{e}</option>;
            })}
          </select>
          <h4 className={s.errores}>{error.dificultad}</h4>
        </div>

        <div className={s.losInput}>
          <label htmlFor=""><h2>Duracion:</h2></label>
          <select name="duracion" value={input.value} onChange={handleChange}>
            {duracion.map((e) => {
              return <option value={input.value}>{e}</option>;
            })}
          </select>
          <p>Hs</p>
          <h4 className={s.errores}>{error.duracion}</h4>
        </div>

        <div className={s.losInput}>
          <label htmlFor=""><h2>Temporada:</h2></label>
          <select name="temporada" value={input.value} onChange={handleChange}>
            <option value={input.value}>Estaciones:</option>
            <option value={input.value}>Verano</option>
            <option value={input.value}>Otoño</option>
            <option value={input.value}>Invierno</option>
            <option value={input.value}>Primavera</option>
          </select>

          <h4 className={s.errores}>{error.temporada}</h4>
          {/* <div className={s.losInput}>
            <select name="ciudades" value={input.value} onChange={handlePais}>
              {paises.map((e) => {
                return <option value={input.value}>{e}</option>;
              })}
            </select>
          </div> */}
        </div>
        {error.nombre &&
        error.dificultad &&
        error.duracion &&
        error.temporada ? null : (
          <button type="submit" className={s.boton}>
            Crear Actividad
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
