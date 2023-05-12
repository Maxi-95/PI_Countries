import { useState } from 'react';
import s from './SearchBar.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getByNombre } from '../../Redux/Actions/actions';
//import { useSelector } from 'react-redux';

const SearchBar = () => {
   const dispatch = useDispatch()
   const ciudad = useSelector(state => state.state)
   const [ searchString, setSearchString ] = useState("");

   function handleChange(e){
      e.preventDefault();
      setSearchString(e.target.value);
   }

   function handleSumbit(e){
      e.preventDefault();
      dispatch(getByNombre(searchString))
   }
   
   return (
      <form onChange={handleChange}>
         <div className={s.navegacion}>
            <div className={s.buscador}>
               <input type='search' placeholder='Buscar...'/>
            </div>
            <div className={s.boton}>
               <button className={s.detalle} onClick={handleSumbit} type='Submit'>Buscar</button>
            </div>
         </div>
      </form>
   );
}

export default SearchBar;