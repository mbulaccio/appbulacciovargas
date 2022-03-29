import { createContext, useState } from "react";


export const CartContext = createContext(); 

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState ([]);  

    
    const addItem = (item, quantity) => { 
        isInCart(item.id)  
            ? addQuantity (item, quantity)   
            : setCart([...cart, { ...item, quantity}]); 
    };

    const isInCart = (id) => { 
        return cart.some((product) => product.id === id);         
    }; 
    
        
    const addQuantity = (item, quantity) => { 
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

    const removeItem = (id) => { 
        const filtItems = cart.filter ((product) => product.id !== id)
        setCart(filtItems)  
    }

    const clearCart = () => {
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