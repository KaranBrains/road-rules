import {ADMIN_SLOT_ADD} from "../constants/index"

export default (state = { slotData: null, showdata: false}, action) => {
    switch (action.type) {
      case ADMIN_SLOT_ADD:
        return { ...state, showdata : false};
      default:
        return state;
    }
  };
  