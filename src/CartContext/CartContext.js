import { createContext, useState } from "react";


export const CartContext = createContext(); // Envolvemos la aplicacion

export const CartContextProvider = ({children}) => { // Recibimos como parámetro un children

    const [cart, setCart] = useState ([]); // Inicializamos con un array vacío    

    
    const addItem = (item, quantity) => { // Función que le voy a pasar mi ItemDetail para que me traiga el producto y cantidad
        isInCart(item.id)  // Si el producto ya se encuentra en el carrito
            ? addQuantity (item, quantity)   
            : setCart([...cart, { ...item, quantity}]); // Aplicamos el operador spread para acumular productos y cantidades en el carrito
    };

    const isInCart = (id) => { 
        return cart.some((product) => product.id === id); // Revisamos si el producto está en el carrito        
    };   
    
    const addQuantity = (item, quantity) => { // Sumamos cantidades de productos
        const newProducts = cart.map((product) => {
            if (product.id === item.id) {
                const newProduct = {
                    ...product,
                    quantity: product.quantity + quantity,
                };
                return newProduct;
            } else {
                return product;
            }
        });
        setCart(newProducts);
    };

    const removeItem = (id) => { // Removemos los items
        const filtItems = cart.filter ((product) => product.id !== id)
        setCart(filtItems)  
    }

    const clearCart = () => {// Limpiamos los items
        setCart ([])
    }
    
    const getQuantity = () => {
        return cart.reduce((acc, purchase) => {
          return acc + purchase.quantity;
        }, 0);
      };
    
    const getTotalPrice = () => {
        return cart.reduce((acc, purchase) => {
          return acc + purchase.price * purchase.quantity;
        }, 0);
      };

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, addQuantity, removeItem, getQuantity, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );       
};

export default CartContext