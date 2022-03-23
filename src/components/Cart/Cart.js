import React, { useContext, useState, useRef } from "react"
import './Cart.css'
import { FaTrashAlt } from 'react-icons/fa';
//import { FaArrowUp } from 'react-icons/fa';
//import { FaArrowDown } from 'react-icons/fa';
//import { FaRegWindowClose } from 'react-icons/fa';
import { Link } from "react-router-dom";
import CartContext from '../../CartContext/CartContext';
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/firebase';
import { useNotificationServices } from "../Services/Notification/Notificationservices"
import ContactForm from "../ContactForm/ContactForm";
import Togglable from "../Togglable/Togglable";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const [orderFinished, setOrderFinished] = useState(false);
    const [processingOrder, setProcessingOrder] = useState(false);
    const [codeNumberOrder, setCodeNumberOrder] = useState("");
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })

    const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);

    const contactFormRef = useRef();

    const setNotification = useNotificationServices ();     

    const confirmOrder = () => {
        if  (
            contact.phone !== '' && 
            contact.address !== '' && 
            contact.comment !== '' && 
            contact.name !== ''
            ) {
            setProcessingOrder(true);
                
    const objOrder = {
        buyer: contact,
        items: cart,
        total: getTotalPrice(),
        date: Timestamp.fromDate(new Date())
    };

    const batch = writeBatch(firestoreDb);
    const outOfStock = [];

    const executeOrder = () => {
        if (outOfStock.length === 0) {
          addDoc(collection(firestoreDb, 'orders'), objOrder).then(({ id }) => {
              batch.commit().then(() => {
                clearCart();
                setNotification("success", `La orden se generó exitosamente con el número: ${id}`);
                setOrderFinished(true);
                setCodeNumberOrder(id);
              });
            }).catch((error) => {
              setNotification('error', error);
            }).finally(() => {
              setProcessingOrder(false);
            });
        } else {
          outOfStock.forEach((prod) => {
            setNotification('error', `El producto ${prod} no tiene stock`);
            removeItem(prod);
          });
        }
      };

      objOrder.items.forEach((prod) => {
        getDoc(doc(firestoreDb, 'cart', prod.id)).then((response) => {
            if (response.data().stock >= prod.quantity) {
              batch.update(doc(firestoreDb, 'cart', response.id), {
                stock: response.data().stock - prod.quantity});
            } else {
              outOfStock.push(response.data().album);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            executeOrder();
          })
          .finally(() => {
            setProcessingOrder(false);
          });
      });
    } else {
      setNotification('error', "Debe completar los datos de contacto para generar su orden");
    }
  };

  if (processingOrder) {
    return <h1>Se esta procesando su orden...</h1>;
  }

  if (cart.length === 0 && orderFinished === false) {
    return (
      <div>
        
        <h2>No hay productos en el carrito</h2>
      </div>
    );
  } else if (orderFinished === true) {
    return (
      <div>        
        <h2>Su orden se ha generado con éxito</h2>
        {codeNumberOrder !== "" && (
          <h3>Su código de orden es: {codeNumberOrder}</h3>
        )}
        <NavLink to="/">
        <button className='item-button'>Volver al inicio</button>
        </NavLink>        
      </div>
    );
  }

  return (
    <div className="cartContainer">
       <div className="carrito">
          <div className="carritoCerrado">
      <h1 className="textCart">Mi Carrito</h1>
      {       
            cart.map (prod => {
                return ( 
                    <div key={prod.id}>                    
                        <h3 className="product-name">{prod.name}</h3>
                        <img className="imgCart" src={prod.img}/>
                        <p className="product-price">${prod.price}</p>          
                        <div>
                        {/* {<button onClick={() => addQuantity (prod.id) }><FaArrowUp/></button>} */}
                        <h3>Cantidad {prod.quantity}</h3>
                        {/* <button className="arrow"><FaArrowDown/></button> */}
                        </div>
                        <div className="removeItem">
                        <button onClick={() => removeItem (prod.id)}><FaTrashAlt className="icon"/></button>                    
                        </div>                    
                    </div>                                   
                )
            })}
                   

    <div className="footerCart">
      <h3 className="totalPrice">Total: ${getTotalPrice()}</h3>
      <button onClick={() => clearCart()} className="btnClear">
        Cancelar compra
      </button>
      <button onClick={() => confirmOrder()} className="btnConfirm">
        Confirmar Compra
      </button>
      </div>
        </div>
      {contact.phone !== "" &&
        contact.address !== "" &&
        contact.comment !== "" &&
        contact.name !== "" && (
          <div>
            <h4>Nombre: {contact.name}</h4>
            <h4>Telefono: {contact.phone}</h4>
            <h4>Direccion: {contact.address}</h4>
            <h4>Comentario: {contact.comment}</h4>
            <button
              onClick={() =>
                setContact({ phone: "", address: "", comment: "" })
              }
              className="btn"
              style={{ backgroundColor: "#db4025" }}
            >
              Borrar datos de contacto
            </button>
          </div>
        )}
      <Togglable
        buttonLabelShow={
          contact.phone !== "" &&
          contact.address !== "" &&
          contact.comment !== "" &&
          contact.name !== ""
            ? "Editar contacto"
            : "Agregar contacto"
        }
        ref={contactFormRef}
      >
        <ContactForm
          toggleVisibility={contactFormRef}
          setContact={setContact}
        />
      </Togglable>
    </div>
    </div>

    
  );
};

export default Cart
