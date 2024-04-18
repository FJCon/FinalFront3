import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates} from '../context/AppContext'
import { IoStar } from "react-icons/io5";



const Card = ({users}) => {

  const addToFavorites = () => {
    if(!isInFavs(users.id)){
      dispatch({ type: 'ADD_FAV', payload: users });
      alert("Se ha añadido un favorito.")
      console.log("click");
    }
};

  const isInFavs = (id) => state.favs.some(fav => fav.id == id)
  

  const {dispatch, state} = useDentistaStates()
  return (
    <div className= "card">
      <Link to={'/dentist/' + users.id}>
          <h3>{users.name}</h3>
                {/* Renderizar la imagen si existe */}
      {(
        <img className='doctoricon'
          src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
          alt={`Imagen de ${users.name}`}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )} 
      </Link>
      {isInFavs(users.id) ? 
  <button>  Guardado en favoritos!  </button> : 
  <button onClick={addToFavorites}>  Añadime a favoritos!</button>
  
}
    </div>
  )
}

export default Card