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

const addItemToCartItems = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(item => {
            return (item.id === itemToAdd.id) ? 
            { ...item, quantity: item.quantity + 1 } : 
            item
        });
    }
    else {
        return [...cartItems, { ...itemToAdd, quantity: 1 }];
    }
};

/**
 * Context object for managing the cart.
 * @type {object}
 * @property {Array} items - The array of cart items.
 * @property {Function} setItems - The function to update the cart items.
 */
export const CartContext = createContext({
    isCartVisable: false,
    setCartVisable: () => {},
    cartItems: [],
    addItemToCart: ()=>{}
});

/**
 * Provider component for the CartContext.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered JSX element.
 */
export const CartProvider = ({ children }) => {
    const [isCartVisable, setCartVisable] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    console.log('cartItems', cartItems);
    const addToCart = (item) => {
        setCartItems(addItemToCartItems(cartItems, item));
    }
    console.log('cartItems', cartItems);

    return (
        <CartContext.Provider value={{ isCartVisable, setCartVisable, cartItems, addToCart, }}>
            {children}
        </CartContext.Provider>
    );
}
