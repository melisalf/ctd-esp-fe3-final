import React from "react";
import { Link } from "react-router-dom";
import fotoDentista from '../assets/doctor.jpg'
import { useContextGlobal } from "../Context/Context";

const Card = ({dentista}) => {

  const {favs, setFavs} = useContextGlobal()

  const addFav = () =>{
    setFavs([...favs, dentista])
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to= {"/detail/" + dentista.id}>
        <h3>{dentista.name}</h3>
        <h4>{dentista.username}</h4>
        <img src={fotoDentista} alt="dentista" style={{ width: 200, height: 200 }} />
      </Link>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
