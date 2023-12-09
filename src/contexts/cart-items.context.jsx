/**
 * @file Provides the CartItemsContext and CartItemsProvider components for managing cart items.
 * @module cart-items.context
 * @requires react
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */


import { createContext, useState } from 'react';

/**
 * Context object for managing cart items.
 * @type {object}
 * @property {Array} items - The array of cart items.
 * @property {Function} setItems - The function to update the cart items.
 */
export const CartItemsContext = createContext({
    items: [],
    setItems: () => null
});

/**
 * Provider component for the CartItemsContext.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered JSX element.
 */
export const CartItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    return (
        <CartItemsContext.Provider value={{ items, setItems }}>
            {children}
        </CartItemsContext.Provider>
    );
}
