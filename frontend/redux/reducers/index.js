import { combineReducers } from "redux";
import main from "./auth";
import slot from "./slot";
import contact from "./contact";
import instructor from "./instructor";
import user from "./user";
import rides from "./rides";
import ride from "./ride";
import aboutCards from "./aboutCards";
import choose from "./choose";
import testimonial from "./testimonial";

const rootReducer = combineReducers({
  main,
  slot,
  instructor,
  user,
  contact,
  rides,
  ride,
  aboutCards,
  choose,
  testimonial
});

export default rootReducer;
