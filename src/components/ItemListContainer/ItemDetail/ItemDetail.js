import React from 'react';


const ItemDetail = ({ product }) => {

    console.log(product.name);

    return (
        <div className="card-container">
            <div className="ItemCard">
                <h1 className="NameCard">{product.name}</h1>
                <img className="ImgCard" src={product.img} />
                <h2 className='product-price'>${product.price}</h2>
                <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button>

            </div>
        </div>
    )
}

export default ItemDetail;