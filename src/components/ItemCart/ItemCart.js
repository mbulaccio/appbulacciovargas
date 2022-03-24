import React from "react"
import './Cart.css'
import { FaTrashAlt } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';

const itemCart = ({ product }) => {

return (
    <div className="cartContainer">
        <div className="carrito">
            <div className="carritoCerrado">
            <button className="closeButton"><FaRegWindowClose/></button>
            </div>  
        <h1>Carrito de Compras</h1>
        {        
        cart.map (prod => {
            return ( 
                <div key={prod.id}>                    
                <h3>{prod.name}</h3>
                <img className="ImgCart" src={product.img}/>
                <h2 className='product-price'>${product.price}</h2>
                <button className="arrow"><FaArrowUp/></button> 
                <div>
                <h3>Cantidad {prod.quantity}</h3>
                <button className="arrow"><FaArrowDown/></button>
                </div>
                <div className="removeItem">
                <button onClick={() => removeItem (prod.id)}><FaTrashAlt/></button>
                
                </div>
                </div>                                   
            )
        })}
        <div className="footerCart">
        <h1 className="btn">Total: ${getTotalPrice()}</h1>
        <button className="btn">Terminar compra</button>
        </div>      
        </div>
    </div>
)    

}       

export default itemCart