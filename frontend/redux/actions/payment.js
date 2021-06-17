import * as api from "../api";
import { PAYMENT , PAYMENT_BOOKING} from "../constants/index";
import swal from "sweetalert";
import { loadStripe } from '@stripe/stripe-js';
import jwt from "jwt-decode";
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export const AddPayment = (id,location) => async (dispatch) => {
    try {
        const user = jwt(localStorage.getItem("token"));
        // Get Stripe.js instance
        const stripe = await stripePromise;
        
        // Call your backend to create the Checkout Session
        const formData = {
          slot:id,
          client: user.id,
          location: location
        }
        const response = await api.payment(formData);

        const session = response.data;
        localStorage.setItem("session",session.id);

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

export const AddPaymentBooking = () => async (dispatch) => {
  try {
      const user = jwt(localStorage.getItem("token"));
      const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
      console.log(bookingDetails);
      // Get Stripe.js instance
      const stripe = await stripePromise;
      
      // Call your backend to create the Checkout Session
      const formData = {
        ...bookingDetails,
        client: user.id
      }
      const response = await api.paymentBooking(formData);

      const session = response.data;
      console.log(session);
      localStorage.setItem("session",session.id);

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

    dispatch({ type: PAYMENT_BOOKING, response });

  } catch (e) {
    console.log(e);
    swal({
      text: "Something went wrong",
      icon: "error",
    });
  }
};