import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncmock';
import { useParams } from 'react-router-dom';   
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [products, setProducts] = useState( [] ) // Igual que el itemdetail pero en plural
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();
     
    useEffect(() => {
        getProducts().then(item => {
            const prods = categoryId? item.filter(prod => prod.category === categoryId) : item;
            setProducts(prods)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

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

/*const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]) // Iniciamos el estado con un array vacío   
    //const addtoCart = (count) => {
    //console.log(`Se agregan al carrito ${count} productos`);    

    useEffect(() => { 
        getProducts().then(products => { // Llamo a la funcion que creamos de simulación de llamada
            // console.log(products)
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
    )*/



export default ItemListContainer