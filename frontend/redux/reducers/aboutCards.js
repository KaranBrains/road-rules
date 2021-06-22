import { GET_ABOUT_CARDS ,UPDATE_ABOUT_CARDS } from "../constants";

export default (state = { aboutCardsData: null }, action) => {
  switch (action.type) {
    case GET_ABOUT_CARDS:
      console.log(action?.data);
      return { ...state, aboutCardsData: action?.data };
    case UPDATE_ABOUT_CARDS:
      console.log(action?.data);
      return { ...state, aboutCardsData: action?.data };
    default:
      return state;
  }
};
