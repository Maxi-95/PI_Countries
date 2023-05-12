import { 
    GET_CIUDADES,
    BY_NOMBRE,
    GET_DETALLE,
    CREATE_ACTIVITY,
    BY_NOMBRE_ACS,
    BY_POBLACION_ACS,
    BY_CONTINENT
  } from "./Actions/constantes";

const initialState = {
    state :[],
    ciudad:[],
    detail:{},
    form:[],
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_CIUDADES:
            return { ...state, ciudad: action.payload, state: action.payload };

        case BY_NOMBRE:
            return { ...state, state: action.payload };
        
        case GET_DETALLE:
            return { ...state, detail: action.payload };
        
        case CREATE_ACTIVITY:
            return { ...state, form: action.payload };
        
        case BY_NOMBRE_ACS:
            const orderCountries = action.payload === 'A-Z' ?
                state.ciudad.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    if (b.nombre > a.nombre) {
                        return -1
                    }
                    return 0;
                }) :
                state.ciudad.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return -1;
                    }
                    if (b.nombre > a.nombre) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                state: orderCountries
            }

        case BY_POBLACION_ACS:
                const orderPoblacion = action.payload === 'Min' ?
                    state.ciudad.sort(function (a, b) {
                        if (a.poblacion > b.poblacion) {
                            return 1;
                        }
                        if (b.poblacion > a.poblacion) {
                            return -1
                        }
                        return 0;
                    }) :
                    state.ciudad.sort(function (a, b) {
                        if (a.poblacion > b.poblacion) {
                            return -1;
                        }
                        if (b.poblacion > a.poblacion) {
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    state: orderPoblacion
            }

       
        case BY_CONTINENT:
        
            const continentFilter = action.payload === 'All' ? state.ciudad :
                state.tipos.filter(i => i === action.payload)
            return { ...state, state: continentFilter }

        default:
            return {...state}
    }
}

export default rootReducer;  