import { combineReducers } from "redux";
import main from "./auth";
import slot from "./slot";
import instructor from "./instructor";

const rootReducer = combineReducers({
  main,
  slot,
  instructor
});

export default rootReducer;
