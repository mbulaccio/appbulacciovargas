import React from "react";
import Item from "../Item/Item";
import './ItemList.css';


const ItemList = ({products}) => {
    return(
        <div className="ListGroup">
            {products.map((product) => 
            <Item product={product} key={product.id}/>
        )}                
        </div>
)
}

export default ItemList