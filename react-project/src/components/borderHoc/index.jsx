import React, { Component } from "react";

const BordeHoc = (WrappedComponent) =>
  class extends Component {
    render() {
      return (
        <div style={{ border: "solid 1px red" }}>
          <WrappedComponent />
        </div>
      );
    }
  };

export default BordeHoc;
