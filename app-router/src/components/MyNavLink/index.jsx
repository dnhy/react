import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        activeClassName="tab-color"
        className="list-group-item"
        to={this.props.to}
        children={this.props.children}
      />
    );
  }
}
