import { Link } from "react-router-dom";
import s from "../Landing/Landing.module.css";

const Landing = () => {
  return (
    <div className={s.fondo}>
      <div className={s.paginado}>
        <div>
          <div className={s.nombre}>
            <h1>Maximiliano Fonseca</h1>
            <h2>PI Countries</h2>
          </div>
          <div>
            <button className={s.boton}>
              <Link to="/home">
                <h3>I N I C I O</h3>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
