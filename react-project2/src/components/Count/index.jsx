import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createAsyncDecrementAction,
} from "../../redux/count_action";

export default class Count extends Component {
  // componentDidMount() {
  //   // 监听库里状态的变化
  //   store.subscribe(() => {
  //     /*setState做两件事：1.修改state值2.让react调用render函数重新渲染页面 (params) {
  //     注意不能传空，必须传个对象 */
  //     this.setState({});
  //   });
  // }

  increment = (data) => {
    //Store向reducer派发操作状态任务（action），传递了previousState和action。
    // 由reducer根据收到的指令进行状态的修改操作
    store.dispatch(createIncrementAction(data));
  };

  decrement = (data) => {
    store.dispatch(createDecrementAction(data));
  };

  oddIncrement = (data) => {
    if (store.getState().countReducer % 2 !== 1) {
      return;
    }
    store.dispatch(createIncrementAction(data));
  };

  asyncIncrement = (data) => {
    store.dispatch(createAsyncDecrementAction(data));
  };

  render() {
    return (
      <div>
        <h3>求和结果为：{store.getState().countReducer}</h3>
        <select ref={(c) => (this.selectRef = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={() => this.increment(this.selectRef.value)}>+</button>
        &nbsp;
        <button onClick={() => this.decrement(this.selectRef.value)}>-</button>
        &nbsp;
        <button onClick={() => this.oddIncrement(this.selectRef.value)}>
          当前求和为奇数再加
        </button>
        &nbsp;
        <button onClick={() => this.asyncIncrement(this.selectRef.value)}>
          异步加
        </button>
      </div>
    );
  }
}
