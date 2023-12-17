import { loadStripe } from '@stripe/stripe-js';
const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
if (!stripeKey) {
    throw new Error('Stripe publishable key not found');
}
export const stripePromise = loadStripe(stripeKey);
