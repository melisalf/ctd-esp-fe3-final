
import Card from '../Components/Card'
import { useContextGlobal } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state, dispatch} = useContextGlobal()
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };

  // mapear la información de la API y devolver una card por cada dentista;
  return (
    <main className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'} >
      <h1>CLINICA DENTAL</h1>
      <div className='card-grid'>
      {state.dentistas.map(dentista => <Card key= {dentista.id} dentista= {dentista}/> ) }
      </div>
    </main>
    
  )
}

export default Home