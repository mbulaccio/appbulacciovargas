import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState() //Hacer el estado con la funcion que retorne todo el producto
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    
    
    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)        
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