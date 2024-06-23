import React, { Component } from "react";
import { createAddUserAction } from "../../redux/actions/user";
import { connect } from "react-redux";
import { nanoid } from "nanoid";

class User extends Component {
  addPerson = () => {
    let data = {
      id: nanoid(),
      name: this.nameNode.value,
      age: this.ageNode.value,
    };
    this.props.addUser(data);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="姓名"
          ref={(c) => {
            this.nameNode = c;
          }}
        />
        <input
          type="text"
          placeholder="年龄"
          ref={(c) => {
            this.ageNode = c;
          }}
        />
        <ul>
          {this.props.userList.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
        <h3>上面组件的求和结果是：{this.props.sum}</h3>
        <button onClick={this.addPerson}>添加人员</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ userList: state.userReducer, sum: state.countReducer }),
  {
    addUser: createAddUserAction,
  }
)(User);
