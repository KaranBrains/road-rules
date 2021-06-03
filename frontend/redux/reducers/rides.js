import { ALL_RIDES } from "../constants/index"

export default (state = { AllRides: null}, action) => {
    switch (action.type) {
      case ALL_RIDES:
          console.log(action?.data)
        return { ...state, AllRides : action?.data};
      default:
        return state;
    }
  };
  