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
import { createContext, useReducer, useEffect } from 'react';

export const CART_ACTION_TYPES = {
    SET_CART_VISABLE: 'SET_CART_VISABLE',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_ALL_FROM_CART: 'REMOVE_ALL_FROM_CART',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
    SET_QUANTITY: 'SET_QUANTITY'
  }
  
  const cartReducer = (state,action) => {
  
    const { type, payload } = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_VISABLE:
            return {
                ...state,
                isCartVisable: payload
            }
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCartItems(state.cartItems, payload)
            }
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCartItems(state.cartItems, payload)
            }
        case CART_ACTION_TYPES.REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)
            }
        case CART_ACTION_TYPES.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: payload
            }
        case CART_ACTION_TYPES.SET_QUANTITY:
            return {
                ...state,
                quantity: payload
            }
      default:
        throw new Error(`Unhandled action type: ${type}`);
    }
  
  }
const INITIAL_STATE = {
    isCartVisable: false,
    cartItems: [],
    quantity: 0,
    cartTotal: 0
};
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
  
    const[ { isCartVisable, cartItems, quantity, cartTotal } , dispatch ] = useReducer(cartReducer, INITIAL_STATE);

    const setCartVisable = (visable) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_VISABLE,
            payload: visable
        });
    }
    const setQuantity = (quantity) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_QUANTITY,
            payload: quantity
        });
    }
    const setCartTotal = (total) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_TOTAL,
            payload: total
        });
    }
    const addItemToCart = (item) => {
        dispatch({
            type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
            payload: item
        });
    }
    const removeItemFromCart = (item) => {
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
            payload: item
        });
    }
    const removeAllFromCart = (item) => {
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_ALL_FROM_CART,
            payload: item
        });
    }
    const clearCart = () => {
        dispatch({
            type: CART_ACTION_TYPES.CLEAR_CART
        });
    }
        
    useEffect(() => {
        let quantity = 0;
        cartItems.forEach(item => {
            quantity += item.quantity;
        });
        setQuantity(quantity);
    }, [cartItems]);

    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        setCartTotal(total);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ 
            isCartVisable,
            quantity,
            cartTotal,
            cartItems,
            setCartVisable,
            addItemToCart,
            removeItemFromCart,
            removeAllFromCart,
            clearCart,
        }}>{children}</CartContext.Provider>
    );
}
