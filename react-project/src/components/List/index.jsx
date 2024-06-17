import React, { Component } from "react";
import Item from "../Item";
import "./index.css";
import PropTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    updataTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };

  render() {
    const { todos, updataTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          let { id } = item;
          return (
            <Item
              {...item}
              key={id}
              updataTodo={updataTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
