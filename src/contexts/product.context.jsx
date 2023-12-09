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

import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.json';

/**
 * Context object for managing product data.
 * @type {Object}
 * @property {Array} products - The array of products.
 * @property {Function} setProducts - The function to update the products.
 */
export const ProductContext = createContext({
  products: SHOP_DATA,
  setProducts: () => null
});

/**
 * Provider component for the ProductContext.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}