import CardsContainer from "../../Components/CardsContainer/CardsContainer.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCiudades } from "../../Redux/Actions/actions";
//import Pagination from "../../Components/Pagination/Pagination.jsx";


const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch( getCiudades() )
    },[])

    return (
        <>
        <CardsContainer/>
        
        </>
    )
}

export default Home;