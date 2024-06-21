import { Component } from "react";
import "./index.scss";

export default class Footer extends Component {
  handleCheckChange = (event) => {
    const { updateAllCheck } = this.props;

    updateAllCheck(event.target.checked);
  };
  render() {
    const { todoList, delFinishedTodos } = this.props;
    console.log(delFinishedTodos);
    let finished = todoList.reduce((pre, curr) => {
      return curr.complete ? pre + 1 : pre;
    }, 0);

    let allChcked = finished === todoList.length;

    return (
      <div className="footer">
        <div className="operate">
          <input
            type="checkbox"
            checked={allChcked}
            onChange={this.handleCheckChange}
          />
          <div className="statistic">
            已完成{finished}/全部{todoList.length}
          </div>
        </div>
        <button className="btn-danger" onClick={delFinishedTodos}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
