/**
 * @file cart-icon.component.jsx
 * @module CartIcon
 * @desc Represents a cart icon component.
 * @requires React
 * @requires cart-icon.styles.scss
 * @requires shopping-bag.svg
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
/**
 * Represents a cart icon component.
 * @component
 * @returns {JSX.Element} The JSX element representing the cart icon.
 */
const CartIcon = () => {
    let quantity = 0;
    let isCartOpen = false;

    const toggleCart = () => {
        console.log('toggleCart');
        isCartOpen  = !isCartOpen;
    }
    
    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;