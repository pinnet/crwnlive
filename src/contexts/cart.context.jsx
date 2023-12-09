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
import { createContext, useState,useEffect } from 'react';

const addItemToCartItems = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(item => {
            return (item.id === itemToAdd.id) ? 
            { ...item, quantity: item.quantity + 1, itemTotal: item.price * (item.quantity + 1) } : 
            item
        });
    }
    else {
        return [...cartItems, { ...itemToAdd, quantity: 1, itemTotal: itemToAdd.price }];
    }
};
const removeItemFromCartItems = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }
    else {
        return cartItems.map(item => {
            return (item.id === itemToRemove.id) ? 
            { ...item, quantity: item.quantity - 1, itemTotal: item.price * (item.quantity - 1) } : 
            item
        });
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
    addItemToCart: ()=>{},
    quanty: 0,
    setQuantity: ()=>{},
    cartTotal: 0,
    setCartTotal: ()=>{}
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
    const [quantity, setQuantity] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        let quantity = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
            quantity += item.quantity;
        });
        setCartTotal(total);
        setQuantity(quantity);
    }, [cartItems]);

    console.log('cartItems', cartItems);
    const addToCart = (item) => {
        setCartItems(addItemToCartItems(cartItems, item));
    }
    const removeFromCart = (item) => {
        setCartItems(removeItemFromCartItems(cartItems, item));
    }
    const removeAllFromCart = (item) => {
        if (cartItems.length === 0) return;
        if (!item){ 
            setCartItems([])
            return;
        } else {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        }        
    }
    console.log('cartItems', cartItems);

    return (
        <CartContext.Provider value={{ 
            isCartVisable,
            setCartVisable,
            cartItems,
            addToCart,
            removeFromCart,
            removeAllFromCart,
            quantity,
            cartTotal
        }}>{children}</CartContext.Provider>
    );
}
