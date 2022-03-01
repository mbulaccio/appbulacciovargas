import './CartWidget.css'
import React from "react";


const CartWidget = () => {
  return(
      <button className="CartWidget">
      <img src={'./images/carrito.png'} alt="carrito" style={{width:"30px"}}/>
      <span className='itemTotal'>0</span>
      </button>
    );
}

export default CartWidget