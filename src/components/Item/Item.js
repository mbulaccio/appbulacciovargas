import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({ product }) => {

    return (
        <div className="card-container">

            <div className="ItemCard">
                <h1 className="NameCard">{product.name}</h1>
                <img className="ImgCard" src={product.img} />                
                <h2 className='product-price'>${product.price}</h2>
                <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button>
                {/* <ItemCount /> */}

            </div>
        </div>
    )
}


/*return (
    <div className="card-container">
        
        <div className="ItemCard">
            <img className='ImgCard' src={'./images/Colombia.PNG'} width='300' />
            <h2 className='NameCard'></h2>
            <p>Descripcion</p>
            <button className='item-button btn btn-primary agregarCarrito"'>Agregar</button>
        </div>
    </div>
)
}*/


export default Item