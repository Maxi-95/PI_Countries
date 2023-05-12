import { Link } from "react-router-dom";
import s from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx";
import { filterByCont, ordenAscCont } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";


const NavBar = () => {

    return (
        <div className={s.navegador}>
            <div className={s.buscador}>
               <SearchBar/>
            </div>
            
            <div className={s.botones}>
                <div >
                    <button className={s.boton}>
                    <Link to={"/home"}>Inicio</Link>

                    </button>
                </div>
                <div >
                    <button className={s.boton}>
                    <Link to={"/form"}>Crear Actividad</Link>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

