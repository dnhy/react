import "./App.scss";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";
import { Component } from "react";

export default class App extends Component {
  addTodo = (todo) => {
    const { todoList } = this.state;
    // const newTodos = [todo, ...todoList];
    todoList.unshift(todo);

    this.setState({ todoList });
  };

  updateCheck = (id, check) => {
    const { todoList } = this.state;
    const obj = todoList.find((item) => {
      return item.id === id;
    });

    obj.complete = check;
    this.setState({ todoList });
  };
  updateAllCheck = (check) => {
    const { todoList } = this.state;

    const newTodoList = todoList.map((item) => {
      item.complete = check;
      return item;
    });
    this.setState({ todoList: newTodoList });
  };
  delTodo = (id) => {
    if (!window.confirm("确认删除吗？")) {
      return;
    }

    const { todoList } = this.state;
    let newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todoList: newTodoList });
  };
  delFinishedTodos = () => {
    if (!window.confirm("确认删除吗？")) {
      return;
    }
    const { todoList } = this.state;
    let newTodoList = todoList.filter((item) => {
      return !item.complete;
    });
    this.setState({ todoList: newTodoList });
  };
  state = {
    todoList: [
      { id: 1, name: "代办1", complete: false },
      { id: 2, name: "代办2", complete: false },
      { id: 3, name: "代办3", complete: false },
      { id: 4, name: "代办4", complete: false },
    ],
  };
  render() {
    const { todoList } = this.state;

    return (
      <div className="container">
        <Header addTodo={this.addTodo} />
        <Main
          todoList={todoList}
          delTodo={this.delTodo}
          updateCheck={this.updateCheck}
        />
        <Footer
          todoList={todoList}
          updateAllCheck={this.updateAllCheck}
          delFinishedTodos={this.delFinishedTodos}
        />
      </div>
    );
  }
}
