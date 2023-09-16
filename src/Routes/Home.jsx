
import Card from '../Components/Card'
import { useContextGlobal } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useContextGlobal()

  // mapear la información de la API y devolver una card por cada dentista;
  return (
    <div className='card-grid'>
      <h1>CLINICA DENTAL</h1>
      <h2>Nuestros especialistas</h2>
      {state.dentistas.map(dentista =>  <Card key= {dentista.id} dentista= {dentista}/> ) }
    </div>
  )
}

export default Home