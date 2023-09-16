import { Link, useNavigate } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <header>
      <div>
      <button onClick={() => navigate(-1)}>⬅</button>
      <button>Cambiar Tema</button>
      </div>

      <nav className='nav'>
        <Link to="/"> <h4>Inicio</h4> </Link>
        <Link to="/favs"> <h4>Favoritos</h4></Link>
        <Link to="/contact"> <h4>Contacto</h4></Link>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      </nav>
      
    
    </header>
    
    
  )
}

export default Navbar