import { combineReducers } from "redux";
import main from "./auth";
import slot from "./slot";
import instructor from "./instructor";
import user from "./user";

const rootReducer = combineReducers({
  main,
  slot,
  instructor,
  user,
});

export default rootReducer;
