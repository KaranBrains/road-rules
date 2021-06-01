import { combineReducers } from "redux";
import main from "./auth";
import slot from "./slot";
import contact from "./contact";
import instructor from "./instructor";

const rootReducer = combineReducers({
  main,
  slot,
  instructor,
  contact,
});

export default rootReducer;
