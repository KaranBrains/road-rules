import {
    CONFIRM_RIDE_CASH,
  } from "../constants";
  
  export default (state = { rideData: null }, action) => {
    switch (action.type) {
      case CONFIRM_RIDE_CASH:
        console.log(action?.data);
        return { ...state, rideData: action?.data };
      default:
        return state;
    }
  };
  