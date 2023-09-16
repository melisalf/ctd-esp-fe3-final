import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contacto'>
      <h2>Quieres saber mas?</h2>
      <p>Envíanos tus dudas y nos pondremos en contacto contigo.</p>
      <Form/>
    </div>
  )
}

export default Contact