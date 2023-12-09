/**
 * @fileoverview Checkout item component for the shopping cart.
 * The CheckoutItem component is a child of the Checkout component.
 * 
 * @module components/checkout-item/checkout-item.component
 * @requires react
 * @requires contexts/cart.context
 * 
 * @exports CheckoutItem
 * 
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

/**
 * Renders a checkout item component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.cartItem - The cart item object.
 * @param {string} props.cartItem.name - The name of the item.
 * @param {string} props.cartItem.imageUrl - The URL of the item's image.
 * @param {number} props.cartItem.price - The price of the item.
 * @param {number} props.cartItem.quantity - The quantity of the item.
 * @param {number} props.cartItem.itemTotal - The total price of the item.
 * @returns {JSX.Element} The rendered checkout item component.
 */
const CheckoutItem = ({cartItem}) => {
    
    const {addToCart,removeFromCart,removeAllFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity,itemTotal } = cartItem;
    const removeItem = () => { removeFromCart(cartItem); }
    const addItem = () => { addToCart(cartItem); }
    const removeAll = () => { removeAllFromCart(cartItem); }
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img alt={name} src={imageUrl} />
            </div>
            <span className='name'>{name} X ${price}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
            </span>
            <span className='price'>${itemTotal}</span>
            <div className='remove-button' onClick={removeAll}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;