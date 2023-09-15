import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [details, setDetails] = useState ({})
  const {id} = useParams()
  console.log(id)
  const url = "https://jsonplaceholder.typicode.com/users/" + id

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => setDetails(data))
  }, [] )
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist </h1>
      <div>
        <h2> Name: {details.name}</h2>
        <h3> Email: {details.email}</h3>
        <h3> Phone: {details.phone}</h3>
        <h4> WebSite: {details.website}</h4>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail