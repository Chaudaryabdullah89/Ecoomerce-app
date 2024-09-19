import { createContext } from "react";
export const shopcontext = createContext();

const ShopContextProvider = (props) => {

const currency = "$";
const delivery = 10;


   const  value ={
    products,currency,delivery
   }
    
  
    return (
        <shopcontext.Provider value={value} >
            {props.children}
        </shopcontext.Provider>
    );
 
}
export default ShopContextProvider;
