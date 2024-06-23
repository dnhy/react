import React, { Component } from "react";
import Count from "./containers/Count";
import User from "./containers/User";

export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
        <hr/>
        <User />
      </div>
    );
  }
}
