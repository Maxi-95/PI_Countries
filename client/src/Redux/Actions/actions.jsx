import axios from "axios";
import { 
    GET_CIUDADES,
    CREATE_ACTIVITY,
    BY_NOMBRE,
    GET_DETALLE,
    BY_CONTINENT,
    LOAD_STATE,
    BY_NOMBRE_ACS,
    BY_NOMBRE_DES,
    BY_POBLACION_ACS,
 } from "./constantes";

export const getCiudades = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/countries/countries"); 
        const info = result.data;

        return dispatch({ type:GET_CIUDADES, payload:info })
    }
}

export const getByNombre = (nombre) => {
    return async function(dispatch){
    await axios(`http://localhost:3001/countries?name=${nombre}`)
    .then(datos => {
        return dispatch({
            type: BY_NOMBRE,
            payload: datos.data
        })
    })
    .catch(e => {
        alert('¡Pais no encontrado o inexistente!')
        dispatch({
            type: LOAD_STATE,
            payload: false
        })
        return dispatch(getCiudades())
    })  
}
}

export const getById = (id) => {
    return async function(dispatch){
                                           
        const result = await axios(`http://localhost:3001/countrie/${id}`); 
        const info = result.data;

        return dispatch({ type:GET_DETALLE, payload:info })
    }
}

export const createActivity = (input) => {
    return async function(dispatch){
            const result = await axios.post('http://localhost:3001/activity/agregar',input); 
            const info = result.data;
            return dispatch({ type:CREATE_ACTIVITY, payload:info })
    } 
}

export const ordenAscCont = (payload) => {
       
    return { type:BY_NOMBRE_ACS, payload }
}
export const ordenAscPopu = (payload) => {
       
    return { type:BY_POBLACION_ACS, payload }
}


export const filterByCont = (elFiltrado) => {
    console.log(elFiltrado);    
    return { type:BY_CONTINENT, payload: elFiltrado }
}




