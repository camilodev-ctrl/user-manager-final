import {   useState } from 'react'
import './App.css'
import Boton from  './components/Boton.jsx'
import UserForm from './components/UserForm.jsx'
import ShowInfo from './components/ShowInfo.jsx'
import NavMenu from './components/NavMenu.jsx'
import UserContext from './components/UserContext.jsx'

function App() {
  let [user, setUser] = useState({});
  let [mostrar,setMostrar] =useState(true);
  let [titulo, setTitulo] = useState("FORMULARIO DE USUARIO");

 const guardar = (json) =>{
    let newUser = json;
    setUser(newUser);
    console.log(user);

 }


  return (
    <>
    <div>
      <UserContext.Provider value={{
      user,
      mostrar,
      titulo ,
      guardar ,
      setMostrar
    }} >

      <NavMenu />
      <UserForm titulo ={"FORMULARIO DE USUARIO"} guardar ={guardar} 
      cambiarEstado = {setMostrar} estado = {mostrar} />
      <ShowInfo />
    </UserContext.Provider>
    </div>
    </>
  )
}

export default App
