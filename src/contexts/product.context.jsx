/**
 * @fileoverview This file contains the definition of the ProductContext and ProductProvider components.
 * @module product.context
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { createContext, useState,useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';  

//import SHOP_DATA from '../data/shop-data.js';
/**
 * Context object for managing product data.
 * @type {Object}
 * @property {Array} products - The array of products.
 * @property {Function} setProducts - The function to update the products.
 */
export const ProductContext = createContext({
  products: [],
  setProducts: () => null
});

/**
 * Provider component for the ProductContext.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  let fetched = false;
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }
    if(!fetched) {
      getCategoryMap();
      //eslint-disable-next-line
      fetched = true;
    } 
  }, [fetched]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}