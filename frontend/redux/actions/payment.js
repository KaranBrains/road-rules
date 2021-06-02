import * as api from "../api";
import { PAYMENT } from "../constants/index";
import swal from "sweetalert";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export const AddPayment = () => async (dispatch) => {
    try {

        // Get Stripe.js instance
        const stripe = await stripePromise;
        
        // Call your backend to create the Checkout Session
        const response = await api.payment();

        const session = response.data;

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            swal({
                text: result.error.message,
                icon: "error",
              });
          }

      dispatch({ type: PAYMENT, response });

    } catch (e) {
      console.log(e);
      swal({
        text: "Something went wrong",
        icon: "error",
      });
    }
};