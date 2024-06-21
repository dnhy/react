import React, { Component } from "react";
import { Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArray: [
      {
        id: "01",
        title: "message1",
      },
      {
        id: "02",
        title: "message2",
      },
      {
        id: "03",
        title: "message3",
      },
    ],
  };

  pushRouter = (item) => {
    this.props.history.push(`/home/message/detail/${item.id}/${item.title}`);
  };

  replaceRouter = (item) => {
    return (event) => {
      this.props.history.replace(
        `/home/message/detail/${item.id}/${item.title}`
      );
    };
  };

  render() {
    const { messageArray } = this.state;
    return (
      <div>
        <ul>
          {messageArray.map((item) => {
            return (
              <li key={item.id}>
                {/* params传参 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>

                {/* search传参 */}
                {/* <Link
                  to={`/home/message/detail?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link> */}
                {/* state传参 */}
                {/* <Link
                  to={{
                    pathname: "/home/message/detail/",
                    state: { id: item.id, title: item.title },
                  }}
                >
                  {item.title}
                </Link> */}
                <button onClick={() => this.pushRouter(item)}>push</button>
                <button onClick={this.replaceRouter(item)}>replace</button>
              </li>
            );
          })}
        </ul>

        {/* params接收参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* search无需声明接收参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* state无需声明接收参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    );
  }
}
