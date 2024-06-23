import T from "../constant";

let userList = [
  {
    id: "01",
    name: "test",
    age: 12,
  },
];

// reducer是一个函数，接收被分配的参数，操作后返回新的state
const userReducer = (preState = userList, action) => {
  const { type, data } = action;
  // 定制操作表
  switch (type) {
    case T.ADD_PERSON:
      // 底层是浅对比，只有返回一个新的数据才能更新，检测不到引用数据内部的变化，需要对引用对象重新赋值
      userList = [data, ...userList];
      // userList.push(data);
      return userList;
    default:
      return preState;
  }
};

export default userReducer;
