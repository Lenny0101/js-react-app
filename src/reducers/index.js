import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./user";
import { postReducer } from "./post";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  postReducer
});

export default rootReducer;
