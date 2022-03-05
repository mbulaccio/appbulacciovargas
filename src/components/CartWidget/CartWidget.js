import './CartWidget.css'
import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';


const CartWidget = () => {

    const {getQuantity} = useContext (CartContext)

  return(
      <Link to={'/Cart'} className="CartWidget">
      <img src={'./images/carrito.png'} alt="carrito" style={{width:"30px"}}/>
      {getQuantity()}
      {/* <span className='itemTotal'>0</span> */}
      </Link>
    );
}

export default CartWidget