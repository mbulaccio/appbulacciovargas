import React, { useContext } from "react"
import './Cart.css'
import { FaTrashAlt } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';
import { Link } from "react-router-dom";
import CartContext from '../../CartContext/CartContext';

const Cart = () => {
    const { cart, getQuantity, removeItem,  getTotalPrice } = useContext(CartContext);

    if (cart.length === 0 ) {
        return <h2>No hay productos en el carrito</h2>        
    }    
   
    return (
        <div className="cartContainer">
            <div className="carrito">
                <div className="carritoCerrado">
                {/* <button className="closeButton"><FaRegWindowClose/></button> */}
                </div>  
            <h1>Carrito de Compras</h1>
            {        
            cart.map (prod => {
                return ( 
                    <div key={prod.id}>                    
                    <h3>{prod.name}</h3>
                    <img className="imgCart" src={prod.img}/>
                    <p className='product-price'>${prod.price}</p>          
                    <div>
                    {/* <button onClick={() => getQuantity (prod.id) }><FaArrowUp/></button> */}
                    <h3>Cantidad {prod.quantity}</h3>
                    {/* <button className="arrow"><FaArrowDown/></button> */}
                    </div>
                    <div className="removeItem">
                    <button onClick={() => removeItem (prod.id)}><FaTrashAlt/></button>                    
                    </div>
                    
                    </div>                                   
                )
            })}            
            <div className="footerCart">
            <h1 className="totalPrice">Total: ${getTotalPrice()}</h1>
            <Link to="/">
                <button className='btn'>Seguir comprando</button>
            </Link>
            <button className="btn">Terminar compra</button>
            </div>      
            </div>
        </div>       
    )   
}       
export default Cart
