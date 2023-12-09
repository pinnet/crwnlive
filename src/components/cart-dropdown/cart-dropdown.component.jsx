
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
import CustomButton from '../custom-button/custom-button.component';

/**
 * Renders a dropdown component for the cart.
 *
 * @returns {JSX.Element} The rendered CartDropdown component.
 */
const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropdown;