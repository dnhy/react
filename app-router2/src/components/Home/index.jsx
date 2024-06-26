import React, { Component } from "react";
import News from "./News";
import Message from "./Message";
import { Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../MyNavLink";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 模糊匹配时长匹配短，短不能匹配长 */}
          {/* /home/news先模糊匹配/home,再匹配子路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
