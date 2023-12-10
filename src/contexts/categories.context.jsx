
/**
 * @fileoverview This file contains the CategoriesContext and CategoriesProvider components.
 * The CategoriesContext is a context object for managing product data.
 * The CategoriesProvider is a provider component for the CategoriesContext.
 * @module contexts/categories.context

 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';  

//import SHOP_DATA from '../data/shop-data.js';
/**
 * Context object for managing product data.
 * @type {Object}
 * @property {Object} categoriesMap - The array of products.
 * @property {Function} setCategoriesMap - The function to update the products.
 */
export const CategoriesContext = createContext({
  categoriesMap: {}
});

/**
 * Provider component for the ProductContext.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  let fetched = false;
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    if(!fetched) {
      getCategoryMap();
      //eslint-disable-next-line
      fetched = true;
    } 
  }, [fetched]);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}