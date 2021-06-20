import { PAYMENT,PAYMENT_BOOKING } from "../constants/index";

export default (state = { Data: null,}, action) => {
    switch (action.type) {
      case PAYMENT:
        console.log(action);
        localStorage.setItem("session",action.id);
        return { ...state, Data: action?.response};
      case PAYMENT_BOOKING:
        console.log(action);
        localStorage.setItem("session",action.id);
          return { ...state, Data: action?.response};
      default:
        return state;
    }
  };