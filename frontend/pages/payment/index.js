import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function Payments() {
    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        const response = await fetch('http://localhost:8080/api/create-checkout-session', { method: 'POST' });
    
        const session = await response.json();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      };

    return(
        <button role="link" class="btn btn-primary" onClick={handleClick}>Checkout</button>
    )
}