import T from "./constant";

export function createIncrementAction(data) {
  return { type: T.INCREMENT, data: data * 1 };
}

export function createDecrementAction(data) {
  return { type: T.DECREMENT, data: data * 1 };
}

export function createAsyncDecrementAction(data) {
  // 对象是同步action，函数是异步anction（需要store中间件和thunk支持）
  // 返回的函数会被store调用,将dispatch中的内容传递给最外层的dispatch
  return function (dispatch) {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, 500);
  };
}
