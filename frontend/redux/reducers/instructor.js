import {ADMIN_INSTRUCTOR_ADD, ADMIN_ALL_INSTRUCTORS, ADMIN_REMOVE_INSTRUCTOR} from "../constants/index"

export default (state = { AllData: null}, action) => {
    switch (action.type) {
      case ADMIN_INSTRUCTOR_ADD:
        return { ...state};
      case ADMIN_ALL_INSTRUCTORS:
        return { AllData: action?.data};
      case ADMIN_REMOVE_INSTRUCTOR:
        return { ...state};
      default:
        return state;
    }
  };
  