import React, { useState, useContext } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext); 

const onAdd = (quantity) => {
      setQuantity (quantity);      
      addItem(product, quantity);
    };    
    /*----------------ESTA ES LA PARTE DE ADENTRO DE MI PRODUCTO (EL DETALLE)-----------  */ 
    return (
        <div className="cart-container-detail"> 
            <div className="ItemDetailCart">
                <h1 className="NameCart">{product.name}</h1>
                <img className="ImgCart" src={product.img}/> 
                <p className="Info">Categoría: {product.category}</p>
                <p className="Info">Descripción: {product.description}</p>
                <h2 className='product-price'>${product.price}</h2>              
                <br />
                <footer className="ItemFooter">
                {quantity === 0 ? (
                  <ItemCount initial={1} stock={20} onAdd={onAdd} />
                  ) : (
                <Link to="/cart">
                <button className='item-button'>Ver carrito</button>
              </Link>)}
              <br /> <br />
              <Link to="/">
                <button className='item-button'>Volver al inicio</button>
              </Link>
              </footer> 
            </div>
        </div>
    )
}

export default ItemDetail;