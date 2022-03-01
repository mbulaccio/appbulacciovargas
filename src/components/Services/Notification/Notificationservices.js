import { useContext, createContext, Children } from "react"

const Notification = ({ message = 'prueba'}) => {
    const NotificationStyles = {

    }

if (message === ""){
    return null
} 


return (
    <div style={notificationStyles}>
        {message}
    </div>
)
}

const Context = createContext ()

export const NotificationServicesProvider = () => {
    const [message, setMessage ] = useState ('')
    const [severity, setSeverity ] = useState ('')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout (() =>{
            setMessage ('')
        }, 5000) 
    }


    return (
        <Context.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {Children}
        </Context.Provider>
    )

}

export default NotificationContext