import { ALL_USERS } from "../constants/index"

export default (state = { AllUsers: null}, action) => {
    switch (action.type) {
      case ALL_USERS:
          console.log(action?.data)
        return { ...state, AllUsers : action?.data};
      default:
        return state;
    }
  };
  