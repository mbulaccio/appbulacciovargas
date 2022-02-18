import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]) // Iniciamos el estado con un array vacío   
    //const addtoCart = (count) => {
    //console.log(`Se agregan al carrito ${count} productos`);    

    useEffect(() => { 
        getProducts().then(products => { // Llamo a la funcion que creamos de simulación de llamada
            console.log(products)
            setProducts(products) // Guardamos los productos en el estado vacío
        })
    }, [])

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }   

    return (
        <div className='ItemListcontainer'>
            <h1 className='Saludo'>{greeting}</h1>
            <ItemCount stock={10} initial={0} onAdd={handleOnAdd}/>
            <ItemList products={products}/> 
                    
        </div>
    )

}

export default ItemListContainer