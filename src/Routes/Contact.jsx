import Form from '../Components/Form'
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { theme, dispatch } = useContextGlobal(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'} id="contacto">
      <h2>Quieres saber mas?</h2>
      <p>Envíanos tus dudas y nos pondremos en contacto contigo.</p>
      <Form/>
    </div>
  )
}

export default Contact