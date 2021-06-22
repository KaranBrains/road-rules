import { GET_CHOOSE } from "../constants";

export default (state = { chooseData: null }, action) => {
  switch (action.type) {
    case GET_CHOOSE:
      console.log(action?.data);
      return { ...state, chooseData: action?.data };
    default:
      return state;
  }
};
