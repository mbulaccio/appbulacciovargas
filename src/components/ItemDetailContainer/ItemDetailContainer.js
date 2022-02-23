import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState() //Hacer el estado con la funcion que retorne todo el producto
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    
    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])

    return ( 
    
        <div className = "ItemDetailContainer" > 
            {
            loading ?
            <h1>Buscando</h1> :
            product ?
            <ItemDetail product = {product}/>: 
            <h1>No hay stock</h1> 
        } 
        </div>
    )
}

export default ItemDetailContainer;