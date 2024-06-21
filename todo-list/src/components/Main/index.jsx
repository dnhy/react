import { Component } from "react";
import "./index.scss";
import Item from "../Item/index";

export default class Main extends Component {
  render() {
    const { todoList, delTodo, updateCheck } = this.props;
    return (
      <div className="main">
        <ul>
          {todoList.map((item) => {
            let { id } = item;
            return (
              <Item
                key={id}
                {...item}
                delTodo={delTodo}
                updateCheck={updateCheck}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
