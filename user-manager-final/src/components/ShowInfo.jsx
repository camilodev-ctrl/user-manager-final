import UserContext from "./UserContext";
import { useContext } from "react";

function ShowInfo(){

  const { user, mostrar } = useContext(UserContext);


    return (
      <div>
         { mostrar && 
        (<div>
            <h2>INFORMACION DEL USUARIO</h2>
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
            <p>Color Favorito: {user.favoriteColor}</p>
        </div>)
        }
      </div> 
       
    )
}
export default ShowInfo;