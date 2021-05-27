import {ADMIN_SLOT_ADD, ADMIN_ALL_SLOT, ADMIN_REMOVE_SLOT} from "../constants/index"

export default (state = { slotData: null}, action) => {
    switch (action.type) {
      case ADMIN_SLOT_ADD:
        return { ...state};
      case ADMIN_ALL_SLOT:
          return { slotData: action?.data};
      case ADMIN_REMOVE_SLOT:
          return { ...state};
      default:
        return state;
    }
  };
  