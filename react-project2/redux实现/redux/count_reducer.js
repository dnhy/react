import { combineReducers } from "redux";
import T from "./constant";

const initState = 0;

// reducer是一个函数，接收被分配的参数，操作后返回新的state
const countReducer = (preState = initState, action) => {
  const { type, data } = action;
  // 定制操作表
  switch (type) {
    case T.INCREMENT:
      return preState + data;
    case T.DECREMENT:
      return preState - data;
    default:
      return preState;
  }
};

export default combineReducers({
  countReducer,
});
