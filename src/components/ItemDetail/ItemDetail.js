import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product, quantity }) => {
    const [count, setCount] = useState(quantity);

    const addtoCart = (quantity) => {
      console.log(`Se agregaron ${quantity} "${product.name}" al carrito!`);
      setCount(quantity);
    };

    // console.log(product.name);

    return (
        <div className="cart-container-detail">
            <div className="ItemDetailCart">
                <h1 className="NameCart">{product.name}</h1>
                <img className="ImgCart" src={product.img}/> 
                <p className="Info">Categoría: {product.category}</p>
                <p className="Info">Descripción: {product.description}</p>
                <h2 className='product-price'>${product.price}</h2>
                {/* <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button> */}
                
                {count ? (
        <Link to="/cart">
          <button className="item-button">Ver carrito</button>
        </Link>
      ) : (
        <ItemCount stock={product.stock} initial={1} addtoCart={addtoCart} />
      )}                
            </div>
        </div>
    )
}

export default ItemDetail;