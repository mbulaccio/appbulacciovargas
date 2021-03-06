import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => { /*ESTAS SON LAS CARTS DE MI INICIO*/

    return (
        <div className="cart-container">        
            <div className="ItemCart">
                <h1 className="nameProduct">{product.name}</h1>
                <div className='ImgCart'><img src={product.img}/> 
            </div>
            <div className='productFooter'>               
                <h2 className='product-price'>${product.price}</h2>
            </div>                               
            <div>
                <Link to={`/detail/${product.id}`}> 
                <button className="btnDetail">Ver detalle</button>
                </Link>
            </div>  
            </div>
        </div>
    )
}


export default Item