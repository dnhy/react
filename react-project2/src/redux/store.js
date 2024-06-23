import { createStore, applyMiddleware } from "redux";
import allReducer from "./reducers/index";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
