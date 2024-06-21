import { Component } from "react";
import { nanoid } from "nanoid";
import "./index.scss";

export default class Heder extends Component {
  handleKeyPress = (event) => {
    let { target, keyCode } = event;
    const { addTodo } = this.props;
    let name = target.value.trim();

    if (keyCode === 13) {
      if (name === "") {
        alert("请输入任务名称");
        return;
      }
      addTodo({
        name,
        id: nanoid(),
      });
    }
  };
  render() {
    return (
      <div className="header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyDown={this.handleKeyPress}
        />
      </div>
    );
  }
}
