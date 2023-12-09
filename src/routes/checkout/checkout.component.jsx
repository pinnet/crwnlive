/**
 * @fileoverview Checkout component for the shopping cart.
 * @module Checkout
 * @requires react
 * @requires react/context
 * @requires ../../contexts/cart.context
 * @requires ../../components/checkout-item/checkout-item.component
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */


import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

/**
 * Renders the Checkout component.
 * @returns {JSX.Element} The rendered Checkout component.
 */
const Checkout = () => {
    const { cartItems,cartTotal,clearCart} = useContext(CartContext);
    const clearCartHandler = () => {
        clearCart();
    };
   
    return (
        <div className='checkout-container'>
            <h1>Checkout</h1>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block' onClick={clearCartHandler}>
                    <span>Remove</span>
                </div>
            </div>
            {
            (cartItems.length === 0) ? <div className='empty-cart-message'>Your cart is empty</div> :
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
            }            
            <span className='total'>Total ${cartTotal}</span>
        </div>
        
        );
}

export default Checkout;