import { PAYMENT,PAYMENT_BOOKING } from "../constants/index";

export default (state = { Data: null,}, action) => {
    switch (action.type) {
      case PAYMENT:
        return { ...state, Data: action?.response};
      case PAYMENT_BOOKING:
          return { ...state, Data: action?.response};
      default:
        return state;
    }
  };