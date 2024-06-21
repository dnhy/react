import React, { Component } from "react";
import qs from "querystring";

export default class Detail extends Component {
  state = {
    messageDetails: [
      { id: "01", content: "message1detail1" },
      { id: "02", content: "message1detail2" },
      { id: "03", content: "message1detail3" },
    ],
  };
  render() {
    const { messageDetails } = this.state;

    //params取值
    var { id, title } = this.props.match.params || {};
    console.log("this.props :", this.props);
    //search取值
    // var { search } = this.props.location;
    // var { id, title } = qs.parse(search.slice(1));

    // state取值
    // BrowserRouter维护了history对象，BrowserRouter的historty对象底层是浏览器H5的history，state对象记录于H5的history对象中，H5的history对象存于浏览器缓存中。刷新参数也不会丢失，除非清空浏览器缓存
    // var { id, title } = this.props.location.state;

    var obj = messageDetails.find((item) => {
      return item.id === id;
    });

    return (
      <div>
        <div>id:{id}</div>
        <div>title:{title}</div>
        <div>content:{obj?.content}</div>
      </div>
    );
  }
}
