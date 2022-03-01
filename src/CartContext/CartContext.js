import { createContext, useState, useEffect } from "react";


export const CartContext = createContext(); // Envolvemos la aplicacion

export const CartContextProvider = ({children}) => { // Recibimos como parámetro un children

    const [cart, setCart] = useState ([]); // Inicializamos con un array vacío

    useEffect(() => {
        console.log(cart);
    }, [cart]);

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

    const clear = () => // Limpiamos los items
        setCart ([])

    return (
        <CartContext.Provider value={{ cart, addItem }}>
            {children}
        </CartContext.Provider>
    );       
};

