import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class AppTodoß extends Component {
  state = {
    todos: [
      { id: "001", name: "event1", done: true },
      { id: "002", name: "event2", done: true },
      { id: "003", name: "event3", done: false },
      { id: "004", name: "event4", done: false },
    ],
  };

  //用于接收从子组件传递的todo
  addTodo = (data) => {
    console.log(data);
    const { todos } = this.state;
    const newTodos = [data, ...todos];
    this.setState({ todos: newTodos });
  };

  updataTodo = (id, done) => {
    const { todos } = this.state;
    var target = todos.find((todoOj) => {
      return todoOj.id === id;
    });

    if (target != undefined) {
      target.done = done;
    }

    console.log("[ this.state1 ] >", this.state);
    //将新值传入todos属性，react会把新值与他自己保存的旧址进行比较合并(assign)
    this.setState({ todos: todos });
    console.log("[ this.state2 ] >", this.state);
  };

  //删除
  deleteTodo = (id) => {
    if (!window.confirm("确定删除吗")) {
      return;
    }

    const { todos } = this.state;
    // var targetIndex = todos.findIndex((todoOj) => {
    //   return todoOj.id === id;
    // });
    // console.log('targetIndex :', targetIndex);

    // todos.splice(targetIndex, 1);
    // this.setState({ todos });

    const newTodos = todos.filter((todoOj) => {
      return todoOj.id != id;
    });

    this.setState({ todos: newTodos });
  };

  //全选
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      return {
        ...item,
        done,
      };
    });

    this.setState({ todos: newTodos });
  };

  //删除所有已完成的
  deleteAlldone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return !item.done;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updataTodo={this.updataTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            deleteAlldone={this.deleteAlldone}
          />
        </div>
      </div>
    );
  }
}
