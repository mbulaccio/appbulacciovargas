import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncmock';
import ItemDetail from '../ItemListContainer/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]) //Hacer el estado con la funcion que retorne todo el producto

    useEffect(() => {
        getProduct().then((res) => {
            setProduct(res)
        console.log (res , "Este es"); 
        })
    }, []) 
    
    console.log (product , "Despues del use effect")
    return (
        <div>            
        <ItemDetail product = {product} />
        </div>
    )
}

export default ItemDetailContainer; 