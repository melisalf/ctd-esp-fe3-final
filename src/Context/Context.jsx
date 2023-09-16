import { createContext , useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";

const ContextGlobal = createContext()

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
  dentistas: [],
  favs: initialFavState,
  theme: "light",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return {...state, dentistas: action.payload}
    case "ADD_FAVS":
      return {...state, favs: [...state.favs, action.payload]}
    case 'TOGGLE_THEME':
      const nuevoTheme = state.theme === 'light' ? 'dark' : 'light';
      return { ...state, theme: nuevoTheme };
    default:
      return state;
  }
}




const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users"
  
  useEffect(() => {
    axios(url)
    .then(res => {
      console.log(res.data)
      dispatch({type: "GET_DENTISTAS" , payload: res.data})})
    .catch(err => console.log(err))
  },[])

  
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs] )



  return (
    <ContextGlobal.Provider value={{dispatch, state}}>
      {children}
    </ContextGlobal.Provider>
  )

}

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)

