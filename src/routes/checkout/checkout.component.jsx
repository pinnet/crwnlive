/**
 * @fileoverview Checkout component for the shopping cart.
 * @module Checkout
 * @requires react
 * @requires react/context
 * @requires ../../contexts/cart.context
 * @requires ../../components/checkout-item/checkout-item.component
 * @exports Checkout
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

/**
 * Renders the Checkout component.
 * @returns {JSX.Element} The rendered Checkout component.
 */
const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
   
    return (
        <CheckoutContainer>
            <h1>Checkout</h1>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
            (cartItems.length === 0) ? <div className='empty-cart-message'>Your cart is empty</div> :
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
            }            
            <Total>Total ${cartTotal}</Total>
        </CheckoutContainer>
        
        );
}

export default Checkout;