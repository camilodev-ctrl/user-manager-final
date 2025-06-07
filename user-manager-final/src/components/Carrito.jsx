import { Nav } from 'react-bootstrap';
import NavMenu from './NavMenu.jsx'
import { useEffect, useState } from 'react';
import '../App.css'

function Carrito(){
    const [consultar, setConsultar] = useState(false);
    const [productos, setProductos] = useState([]);
    const [productosCarrito, setProductosCarrito] = useState([]);

    useEffect(() => {

        if(consultar===true){
        fetch('https://fakestoreapi.com/products')
        .then((respuesta)=> respuesta.json())
        .then((json)=> {

          
                setProductos(json);
                //console.log(productos);
        }).catch((error) => console.error('Hubo un error',error));
    }

       
    },[consultar]);


    const consultarFunction = () => {
        setConsultar(!consultar);
        console.log(consultar); 
    }


    const agregar = (producto) => {
        //setProductosCarrito(productosCarrito.push(producto));


        let newArray = [...productosCarrito];
        console.log(newArray);
        let existe = newArray.find((item) => item.id === producto.id);
         console.log("EXISTE?: "+existe);

         let jsonProducto = {
            id: producto.id,
            title: producto.title,
            price: producto.price,
            image: producto.image,
            quatity: 1
         }


        if (existe){
            jsonProducto.quatity = existe.quatity +  1;
            let index = newArray.indexOf(existe);
            newArray[index] = jsonProducto;
            setProductosCarrito(newArray);
        }else{
            setProductosCarrito([...productosCarrito, jsonProducto  ]);
        }


    }

    const limpiar = () => {
        setProductosCarrito([]);
    }


    const elimarDeCarrito = (id) =>{
        let newArray = [...productosCarrito];
        newArray = newArray.filter((item)=> item.id !== id);
        setProductosCarrito(newArray);
    }
    return (
      
        <div>
            <NavMenu />
            <h2>PRODUCTOS</h2>
            <button onClick={consultarFunction}>CONSULTAR</button>
            <div>
                {productos.map((producto)=> (
                    <div key={producto.id} className="items" >
                        <img src={producto.image} alt="" />
                       <p>Nombre : {producto.title}</p>
                       
                       <div>
                        <button onClick={()=> agregar(producto)}>Agregar</button>
                        </div>
                    </div>
                ))}
            </div>
            <hr/>
            <hr/>
            <h2>CARRITO</h2>
            <div>
                <button onClick={limpiar}>Limpiar</button>
                {productosCarrito.map((pcarrito)=>(
                   
                    <div key={pcarrito.id}>
                         <hr />
                        <p>Nombre: {pcarrito.title}</p>
                        <p> Cantidad : {pcarrito.quatity}</p>
                        <button onClick={()=> elimarDeCarrito(pcarrito.id)} title='ELIMINAR'>X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrito;