/**
 * @file checkout.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { useSelector } from 'react-redux';

import PaymentForm from '../../components/payment-form/payment-form.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total, EmptyMessage } from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

/**
 * Renders the Checkout component.
 * @returns {JSX.Element} The rendered Checkout component.
 */
const Checkout = (): JSX.Element => {

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
            (cartItems.length === 0) ? <EmptyMessage className='empty-cart-message'>Your cart is empty</EmptyMessage> :
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
            }            
            <Total>Total ${cartTotal}</Total>
            <PaymentForm/>
        </CheckoutContainer>
        );
}

export default Checkout;