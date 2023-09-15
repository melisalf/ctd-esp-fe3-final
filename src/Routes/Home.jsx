
import Card from '../Components/Card'
import { useContextGlobal } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentistas} = useContextGlobal()

  // mapear la información de la API y devolver una card por cada dentista;
  return (
    <div className='card-grid'>
      <h1>Dentistas</h1>
      {dentistas.map(dentista =>  <Card key= {dentista.id} dentista= {dentista}/> ) }
    </div>
  )
}

export default Home