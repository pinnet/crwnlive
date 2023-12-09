
/**
 * @file Renders a dropdown component for the cart.
 * @module CartDropdown
 * @returns {JSX.Element} The rendered CartDropdown component.
 * @exports CartDropdown
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './cart-dropdown.styles.scss'
import { useContext } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

/**
 * Renders a dropdown component for the cart.
 * @returns {JSX.Element} The rendered CartDropdown component.
 */
const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropdown;