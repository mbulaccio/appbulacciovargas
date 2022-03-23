import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';   
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/firebase';


const ItemListContainer = () => {
    const [products, setProducts] = useState( [] ) 
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();
     
    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => { // Le pedimos a fire que nos traiga la colección de productos
            const products = response.docs.map(doc => {  // La respuesta la formateamos
                
                return { id: doc.id, ...doc.data()}     // y la retorna con la propiedad id y doc.data
             })
               
               setProducts(products)   // Set products de mi estado             
                
        }).finally(() => {
            setLoading(false)
        })

            return (() => {
            setProducts()        
        }
        )
    }, [ categoryId])

    return (     
        <div className = "ItemListContainer" > 
            {
            loading ?
            <h1>Buscando</h1> :
            products.length ?
            <ItemList products = {products}/>: 
            <h1>No hay stock</h1> 
        } 
        </div>
    )
}


export default ItemListContainer