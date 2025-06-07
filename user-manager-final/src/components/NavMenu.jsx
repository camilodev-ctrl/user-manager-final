import { Link } from 'react-router';


function NavMenu(){
    return (
        <nav>
            <h3>USER MANAGER</h3>
            <div>
                <Link to="/" className='botonNav'>Inicio</Link>
                <Link to="/carrito" className='botonNav'>Carrito</Link>
            </div>
            
        </nav>
    )
}
export default NavMenu;