const express = require("express");
const app = express();
var cors = express("cors");

// app.use(cors);
app.use((request, response, next) => {
  console.log("有人请求服务器1了");
  console.log("请求来自于", request.get("Host"));
  console.log("请求的地址", request.url);
  next();
});

app.get("/students", (request, response) => {
  const students = [
    { id: "001", name: "tom", age: 18 },
    { id: "002", name: "jerry", age: 19 },
    { id: "003", name: "tony", age: 120 },
  ];
  var allowDomins = ["http://127.0.0.1:3000", "http://127.0.0.1:8080"];
  var orign = request.headers.origin;
  if (allowDomins.includes(orign)) {
    response.setHeader("Access-Control-Allow-Origin", orign);
  }

  response.send(students);
});

app.listen(5500, (err) => {
  if (!err)
    console.log(
      "服务器1启动成功了,请求学生信息地址为：http://localhost:5500/students"
    );
});
