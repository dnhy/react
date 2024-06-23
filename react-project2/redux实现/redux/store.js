import { createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
import { thunk } from "redux-thunk";
console.log('countReducer :', countReducer);

export default createStore(countReducer, applyMiddleware(thunk));
