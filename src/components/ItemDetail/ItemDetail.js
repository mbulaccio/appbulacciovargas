import React from 'react';
import './ItemDetail.css';



const ItemDetail = ({ product }) => {

    // console.log(product.name);

    return (
        <div className="cart-container-detail">
            <div className="ItemDetailCart">
                <h1 className="NameCart">{product.name}</h1>
                <img className="ImgCart" src={product.img}/> 
                <p className="Info">Categoría: {product.category}</p>
                <p className="Info">Descripción: {product.description}</p>
                <h2 className='product-price'>${product.price}</h2>
                <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button>
                {/* <footer className='ItemFooter'>
                <ItemCount stock={product.stock} />
                </footer> */}
            </div>
        </div>
    )
}

export default ItemDetail;