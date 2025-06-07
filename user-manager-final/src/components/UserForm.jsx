import {useState} from 'react';

function UserForm({titulo,guardar, cambiarEstado, estado}){
    let [nombre, setNombre] = useState("");
    let [edad, setEdad] = useState(0);
    let [colorFav, setColorFav] = useState("");
    
    const guardarLocal = () => {
        let newUser = {
            name: nombre,
            age: edad,
            favoriteColor: colorFav
        };
     
        guardar(newUser);
    } 

    return (
        <div>
            <h2>{titulo}</h2>
            <input type="text" value={nombre} onChange={(e)=>{ setNombre(e.target.value)}} placeholder="NOMBRE" />
            <input type="text" value={edad} onChange={(e)=> setEdad(e.target.value)} placeholder="EDAD" />
            <input type="text" value={colorFav} onChange={(e) => setColorFav(e.target.value)}   placeholder="COLOR FAVORITO" />
            <button onClick={()=> guardarLocal()}>Guardar</button>
            <button onClick={()=> {cambiarEstado(!estado)}} >Ocultar informacion</button>
            
        </div>
    )
}

export default UserForm;