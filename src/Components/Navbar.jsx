import { Link, useNavigate } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/favs"> Favs </Link>
      <Link to="/contact"> Contact </Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => navigate(-1)}>Atras</button>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar