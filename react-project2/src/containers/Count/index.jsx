import React, { Component } from "react";

import { connect } from "react-redux";

import {
  createIncrementAction,
  createDecrementAction,
  createAsyncDecrementAction,
} from "../../redux/actions/count";

class Count extends Component {
  increment = (data) => {
    this.props.increment(data);
    console.log("this.props :", this.props);
  };

  decrement = (data) => {
    this.props.decrement(data);
  };

  oddIncrement = (data) => {
    if (this.props.sum % 2 !== 1) {
      return;
    }

    this.props.increment(data);
  };

  asyncIncrement = (data) => {
    this.props.asyncIncrement(data);
  };

  render() {
    return (
      <div>
        <h3>求和结果为：{this.props.sum}</h3>
        <h3>下面组件的人数为:{this.props.num}</h3>
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

//state是redux调用combineReducers函数时通过store.getState收集到的state值，
// 这些值放到了一个对象中，对应的key即用户调用combineReducers传入的key
function mapStateToProps(state) {
  console.log("state :", state);
  return { sum: state.countReducer, num: state.userReducer.length };
}

const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  asyncIncrement: createAsyncDecrementAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Count);
