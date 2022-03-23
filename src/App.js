import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './CartContext/CartContext';
import { NotificationServicesProvider } from './components/Services/Notification/Notificationservices';
import Footer from './components/Footer/Footer';


function App() {  

  return (    
    <>
      <NotificationServicesProvider>
      <CartContextProvider>
      <BrowserRouter>
      <header>
      <NavBar /> 
      </header>      
      <Routes>        
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        <Route path='/Cart' element={<Cart />}/>          
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>
      </NotificationServicesProvider>
    </>
    
  );
  
}


export default App;

