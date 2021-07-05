import * as api from "../api";
import { PAYMENT , PAYMENT_BOOKING} from "../constants/index";
import swal from "sweetalert";
import { loadStripe } from '@stripe/stripe-js';
import jwt from "jwt-decode";
const stripePromise = loadStripe('pk_live_51J5WRIIMPQ84wc9dV6ZL8vzPAxPpaA4H6JHgTWsOgaFqYbykMSWtRopXc5xJi0XqRwpLDq2ffqw83cok7WfEvIrI00AU6ZTxkL');

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
        console.log(session);
        localStorage.setItem("session",session.id);
        let result;

        // When the customer clicks on the button, redirect them to Checkout.
        setTimeout(async()=>{
          result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        },2000)

        if (result?.error) {
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

      let result;

      // When the customer clicks on the button, redirect them to Checkout.
      setTimeout(async()=>{
        result = await stripe.redirectToCheckout({
          sessionId: session.id,
      });
      },2000)

      if (result?.error) {
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