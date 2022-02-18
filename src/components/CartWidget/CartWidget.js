import React from "react";

const CartWidget = () => {
  return(
      <button className="Option" style={{ color: 'black', fontSize: 16}}>
      <img src={'./images/carrito.png'} alt="carrito" style={{width:"30px"}}/>
      0
      </button>
    );
}

export default CartWidget