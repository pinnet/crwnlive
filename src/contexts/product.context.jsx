/*
 * product.context.jsx
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { createContext,useState} from 'react';
//import { } from '../utils/firebase.utils';
import SHOP_DATA from '../shop-data.json';

export const ProductContext = createContext({
  products: SHOP_DATA,
  setProducts: () => null
});


export const ProductProvider = ({ children }) => {
   const [products, setProducts] = useState(SHOP_DATA);
  return (
    <ProductContext.Provider value={{products,setProducts}}>
      {children}
    </ProductContext.Provider>
  );
}