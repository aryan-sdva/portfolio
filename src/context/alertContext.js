import {createContext, useContext, useState} from "react"; 

const AlertContext = createContext(undefined); 

export const AlertProvider = ({ children }) => { 
  const [state, setState] = useState({ 
    isopen: false, 
    type: 'success', 
    message: '', 
  }); 

  return ( 
    <AlertContext.Provider 
      value={{ 
        ...state, 
        onOpen: (type, message) => setState({ isopen: true, type, message }), 
        onClose: () => setState({ isopen: false, type: '', message: '' }), 
      }} 
    > 
      {children} 
    </AlertContext.Provider> 
  ); 
}; 

export const useAlertContext = () => useContext(AlertContext);