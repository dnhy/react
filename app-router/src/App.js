import React, { Component } from "react";
import { Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import MyNavLink from "./components/MyNavLink";
import Test from "./components/Test";

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <MyNavLink to="/test/About">
                  <div>About</div>
                </MyNavLink>
                {/* 标签中的内容就是props.children中的内容 */}
                <MyNavLink to="/test/Home" children="Home"></MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    {/* 路由匹配匹配的是斜杠后面的test、Home，只写反斜杠路由是空字符串和下面的都不匹配，直接进redirect */}
                    <Route path="/test/About" component={About} />
                    <Route path="/test/Home" component={Home} />
                    <Route path="/test/Home" component={Test} />
                    <Redirect to="/test/About" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
