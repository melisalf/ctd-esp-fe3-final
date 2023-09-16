import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContextGlobal()

  return (
    <>
      <h1>Tus dentistas favoritos</h1>
      <div className="card-grid">
        {state.favs.map(fav =>   <Card dentista={fav} key= {fav.id}/> )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}      
      </div>
    </>
  );
};

export default Favs;
