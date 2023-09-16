import {useState} from "react";


const Form = () => {

  /*const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };*/
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const validarEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
      if (nombre.length > 5 && nombre === nombre.trim() && validarEmail(email)) {
          setShow(true);
          setError(false);
      } else {
          setShow(false);
          setError(true);
      }
      console.log(nombre, email)
      console.log(error, show)
    };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo: </label>
        <input onChange={(event) => setNombre(event.target.value)}/>
        <label>Email:</label>
        <input onChange={(event) => setEmail(event.target.value)}/>
        <br />
        <button>Enviar</button>
        <br />
        {show && <h4>Gracias {nombre}, te contactaremos cuanto antes a través de tu correo.</h4>}
        <br />
        {error && <h4 style={{color: 'red'}}>Por favor verifique su informacion nuevamente</h4>}
      </form>
     
    </div>
  );
};

export default Form;
