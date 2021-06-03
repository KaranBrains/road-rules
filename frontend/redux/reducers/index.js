import { combineReducers } from "redux";
import main from "./auth";
import slot from "./slot";
import contact from "./contact";
import instructor from "./instructor";
import ride from "./ride";

const rootReducer = combineReducers({
  main,
  slot,
  instructor,
  contact,
  ride
});

export default rootReducer;
