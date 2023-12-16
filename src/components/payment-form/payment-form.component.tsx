/**
 * @file payment-form.component.jsx
 * @created Wed Dec 13 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { clearCart } from '../../store/cart/cart.actions';

const PaymentForm = () => {
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const currentUser = useSelector(selectCurrentUser);
    const amount = useSelector(selectCartTotal);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    
    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        if (!stripe || !elements) return;
        setIsProcessingPayment(true);
        const reponse = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } }  = reponse;
    
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });

        if (paymentResult.error) {
            alert(paymentResult.error.message);
            setIsProcessingPayment(false);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Success');
                setIsProcessingPayment(false);
                dispatch(clearCart());                
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer name={'paymentForm'} onSubmit={handleSubmit}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <PaymentButton isLoading={ isProcessingPayment } buttonType={BUTTON_TYPE_CLASSES.inverted} >Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;