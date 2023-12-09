/**
 * @file Provides the CartItemsContext and CartItemsProvider components for managing cart items.
 * @module cart.context
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
 * Context object for managing the cart.
 * @type {object}
 * @property {Array} items - The array of cart items.
 * @property {Function} setItems - The function to update the cart items.
 */
export const CartContext = createContext({
    isVisable: false,
    setVisable: () => {}
});

/**
 * Provider component for the CartContext.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered JSX element.
 */
export const CartProvider = ({ children }) => {
    const [isVisable, setVisable] = useState(false);

    return (
        <CartContext.Provider value={{ isVisable, setVisable }}>
            {children}
        </CartContext.Provider>
    );
}
