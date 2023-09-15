import { createContext , useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";

const ContextGlobal = createContext()

const localFavs = JSON.parse(localStorage.getItem("favs"))
const initialFavState = localFavs ? localFavs : []

const ContextProvider = ({children}) => {
  const [dentistas, setDentistas] = useState([])
  const [favs, setFavs] = useState([])
  const [theme, setTheme] = useState(true)
  const url = "https://jsonplaceholder.typicode.com/users"
  
  const axiosDentistas = () => {
    axios(url)
    .then(res => {
        console.log(res.data)
        setDentistas(res.data)
    })
    .catch((err) => console.log(err)) 
  }
  
  useEffect(axiosDentistas,[])

  
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs] )



  return (
    <ContextGlobal.Provider value={{dentistas, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  )

}

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)

//export const initialState = {theme: "", data: []}
// agregar una tercera variable para guardar los favoritos.


