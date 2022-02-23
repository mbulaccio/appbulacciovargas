import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    return (
        <div className="cart-container">

            <div className="ItemCart">
                <h1 className="NameCart">{product.name}</h1>
                <img className="ImgCart" src={product.img} /> 
                               
                <h2 className='product-price'>${product.price}</h2>
                <Link to={`/detail/${product.id}`}>Ver detalle</Link>
                {/* <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button> */}
                {/* <ItemCount /> */}

            </div>
        </div>
    )
}


export default Item