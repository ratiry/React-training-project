import { React } from 'react';
import Store from './redux/redux-strore';
import { createContext } from "react";
let Store_context = createContext(Store);
export const Provider =(props)=>{
  return(
   <Store_context.Provider value={props.Store}>
      {props.children}
  </Store_context.Provider>
  );
}
export default Store_context;