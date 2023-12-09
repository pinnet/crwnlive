/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './cart-item.styles.scss';

/**
 * Renders a cart item component.
 *
 * @component
 * @param {Object} item - The item object containing imageUrl, price, name, and quantity.
 * @param {string} item.imageUrl - The URL of the item's image.
 * @param {number} item.price - The price of the item.
 * @param {string} item.name - The name of the item.
 * @param {number} item.quantity - The quantity of the item.
 * @returns {JSX.Element} The rendered cart item component.
 */
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className='cart-item-container'>
            <img alt={name} className='img' src={imageUrl} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
}

export default CartItem;