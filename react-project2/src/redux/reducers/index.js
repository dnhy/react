import { combineReducers } from "redux";
import countReducer from "./count";
import userReducer from "./user";

export default combineReducers({
  countReducer,
  userReducer,
});
