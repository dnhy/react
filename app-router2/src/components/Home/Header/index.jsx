import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// withRouter使得一般组件可以使用路由组件的API
export default withRouter(
  class Header extends Component {
    back = () => {
      this.props.history.goBack();
    };
    go = () => {
      this.props.history.goForward();
    };
    render() {
      return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.back}>back</button>&nbsp;
          <button onClick={this.go}>go</button>
        </div>
      );
    }
  }
);
