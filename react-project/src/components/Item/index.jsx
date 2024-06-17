import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };
  //鼠标移入移出
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //勾选或取消勾选
  handleCheck = (id) => {
    return (event) => {
      this.props.updataTodo(id, event.target.checked);
    };
  };

  //删除
  handleDelete = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    let { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ background: mouse ? "#ddd" : "#fff" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
