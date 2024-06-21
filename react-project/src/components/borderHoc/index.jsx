import React, { Component } from "react";

const BordeHoc = (WrappedComponent) =>
  class extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
        </div>
      );
    }
  };

export default BordeHoc;
