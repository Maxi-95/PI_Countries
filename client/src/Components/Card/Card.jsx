import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (prop) => {
  return (
    <div className={s.carta}>
      <Link to={`/home/${prop.id}`}>
        <div>
          <img src={prop.imagen} alt={"imagen"} className={s.banderas} />
          <h3 className={s.nombre}>{prop.nombre}</h3>
        </div>
        <div>
          <div className={s.acomodar}>
            <h4>Continente:</h4>
            <p>{prop.continente}</p>
          </div>
          <div className={s.acomodar}>
            <h4>Poblacion:</h4>
            <p>{prop.poblacion}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

//gente, me queda hacer el Detail de los paises y los filtrados, me ayudan con el Detail ?
