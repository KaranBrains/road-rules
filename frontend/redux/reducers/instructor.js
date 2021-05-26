import {ADMIN_INSTRUCTOR_ADD} from "../constants/index"

export default (state = { slotData: null, showdata: false}, action) => {
    switch (action.type) {
      case ADMIN_INSTRUCTOR_ADD:
        return { ...state, showdata : false};
      default:
        return state;
    }
  };
  