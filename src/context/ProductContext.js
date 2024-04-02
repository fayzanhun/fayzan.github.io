import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";


 const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    console.log("🚀 ~ getProducts ~ res:", res.data)
  } 
  
  useEffect(() => {
getProducts(API);
    
}, []); 
console.log("🚀 ~ useEffect ~ getProducts:", getProducts(API))

  
  return (
    <AppContext.Provider value={{ myName: "Faizan"}}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume the context
const  useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext};
