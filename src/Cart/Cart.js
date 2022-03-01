import React from "react"
import './Cart.css'
import { FaTrashAlt } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';

const Cart = () => {
    return (
        <div className="carritos">
            <div className="carrito">
                <div className="carritoCerrado">
                <button className="closeButton"><FaRegWindowClose/></button>
                </div>  
                <h2>Carrito de compras</h2>
                <div className="carritoCenter">
                    <div className="itemsCarrito">
                    <img src={'./images/Colombia.PNG'} alt="producto"/>
                        <div>
                            <h3>titulo</h3>
                            <p className="price">$2000</p>
                        </div>
                        <div>
                        <button className="arrow"><FaArrowUp/></button>                        
                        <p className="cantidad">1</p>
                        <button className="arrow"><FaArrowDown/></button>
                        </div>
                        <div className="removeItem">
                        <button className="remove"><FaTrashAlt /></button>
                        </div>
                    </div>                        
                </div>
                <div className="footerCart">
                    <h3>Total: $</h3>
                    <button className="btn">Pagar</button>
                </div>
            </div>
        </div>
    )
}

export default Cart