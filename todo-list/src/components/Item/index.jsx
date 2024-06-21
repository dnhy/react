import { Component } from "react";
import "./index.scss";

export default class Item extends Component {
  state = {
    showDel: false,
  };
  changeState = () => {
    var { showDel } = this.state;

    this.setState({ showDel: !showDel });
  };

  handleCheckChange = (id) => {
    return (event) => {
      var { updateCheck } = this.props;
      updateCheck(id, event.target.checked);
    };
  };
  render() {
    var { showDel } = this.state;
    var { id, name, complete, delTodo } = this.props;
    return (
      <li onMouseEnter={this.changeState} onMouseLeave={this.changeState}>
        <div>
          <input
            type="checkbox"
            onChange={this.handleCheckChange(id)}
            checked={complete}
          />
          {name}
        </div>
        {showDel ? (
          <button
            className="btn-danger"
            onClick={() => {
              delTodo(id);
            }}
          >
            删除
          </button>
        ) : (
          ""
        )}
      </li>
    );
  }
}
