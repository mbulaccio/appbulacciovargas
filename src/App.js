import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart/Cart';
import { CartContextProvider } from './CartContext/CartContext';


function App() {  

  return (    
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <header>
      <NavBar />
      {/* <Cart />       */}
      </header>      
      <Routes>        
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
    
  );
  
}


export default App;

