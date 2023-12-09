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

const addProductToCartItems = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(product => product.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map(product => {
            return (product.id === productToAdd.id) ? 
            { ...product, quantity: product.quantity + 1 } : 
            product
        });
    }
    else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
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
    const addToCart = (product) => {
        setCartItems(addProductToCartItems(cartItems, product));
    }
    console.log('cartItems', cartItems);

    return (
        <CartContext.Provider value={{ isCartVisable, setCartVisable, cartItems, addToCart, }}>
            {children}
        </CartContext.Provider>
    );
}
