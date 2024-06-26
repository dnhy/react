import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Footer extends Component {
  static propTypes = {
    checkAllTodo: PropTypes.func.isRequired,
    deleteAlldone: PropTypes.func.isRequired,
  };

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  deleteAllHandle = () => {
    this.props.deleteAlldone();
  };

  render() {
    const { todos } = this.props;
    //已完成数量
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);

    const total = todos.length || 0;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total != 0}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.deleteAllHandle}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
