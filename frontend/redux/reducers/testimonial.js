import { GET_TESTIMONIAL,UPDATE_TESTIMONIAL } from "../constants";

export default (state = { testimonialData: null }, action) => {
  switch (action.type) {
    case GET_TESTIMONIAL:
      console.log(action?.data);
      return { ...state, testimonialData: action?.data };
    case UPDATE_TESTIMONIAL:
      console.log(action?.data);
      return { ...state, testimonialData: action?.data };
    default:
      return state;
  }
};
