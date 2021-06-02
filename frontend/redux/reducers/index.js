import { combineReducers } from "redux";
import main from "./auth";
import slot from "./slot";
import contact from "./contact";
import instructor from "./instructor";
import user from "./user";

const rootReducer = combineReducers({
  main,
  slot,
  instructor,
  user,
  contact,
});

export default rootReducer;
