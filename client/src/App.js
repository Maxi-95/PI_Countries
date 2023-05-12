import Home from './views/Home/Home.jsx';
import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
import NavBar from './Components/NavBar/Navbar.jsx';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path={"/"} component={Landing}/>
      <Route exact path={"/home/:id"} component={Detail}/>
      <Route exact path={"/form"} component={Form}/>
      <Route exact path={"/home"} component={Home}/>
    </div>
  );
}

export default App;
