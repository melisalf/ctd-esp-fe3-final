import { Link, useNavigate } from 'react-router-dom'
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContextGlobal(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };

  return (
    <header id="header" className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <nav className='nav'>
        <Link to="/"> <h4>Inicio</h4> </Link>
        <Link to="/favs"> <h4>Favoritos</h4></Link>
        <Link to="/contact"> <h4>Contacto</h4></Link>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='theme' onClick={toggleTheme}>Cambiar Tema</button>
      </nav>
   
    </header>    
    
    
  )
}

export default Navbar