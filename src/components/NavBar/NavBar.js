import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = () => {    

    return (
        <nav className="NavBar">
            <img src={'./images/coffeelogo.jpg'} alt="LOGO" width="50px"/>
            <h1>BISTREA SHOP</h1>
            <div className="NavBarMenu">
                <ul>
                    <NavLink to="/" className="Item">INICIO</NavLink>
                    <NavLink to={'./category/cafe'} className="Item">CAFE</NavLink>
                    <NavLink to={'./category/capsulas'} className="Item">CAPSULAS</NavLink>
                    <NavLink to="/" className="Item">CONTACTO</NavLink>
                    <CartWidget/>
                </ul>                                 
            </div>              
        </nav>
    )
}

export default NavBar
