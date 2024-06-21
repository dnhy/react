import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudentData() {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("[ 成功 ] >", response.data);
      },
      (error) => {
        console.log("[ 失败 ] >", error);
      }
    );
  }
  getStudentData2() {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("[ 成功 ] >", response.data);
      },
      (error) => {
        console.log("[ 失败 ] >", error);
      }
    );
  }
  render() {
    var a = 11111;
    //后面跟表达式
    var b = true ? ((a = "qqq"), "nb") : "121212";
    console.log("[ b ] >", b);

    var c = (12112212,122);
    console.log('[ c ] >', c)
    return (a += 121211122);
    return (
      <div>
        <button onClick={this.getStudentData}>点击</button>
        <button onClick={this.getStudentData2}>点击2</button>
      </div>
    );
  }
}
