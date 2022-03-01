import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);
   

    const decrement = () => {
        count > 0 && setCount(count - 1) //Si el contador es mayor al stock será menos 1
    }

    const increment = () => {
        count < stock && setCount(count + 1) //Cada vez que el contador sea menor al stock  sumo 1, si es igual no se cumple
    }

    return (
        <div className="container-button">
            <div className='Counter'>
                <button className='CountButton' onClick={decrement}>-</button>
                <p>{count}</p>
                <button className='CountButton' onClick={increment}>+</button>
            </div>        
        <div className='ButtonAdd'>
            <button                
                disabled={count === 0}
                className={count === 0 ? 'disabled' : 'add'}
                onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount 