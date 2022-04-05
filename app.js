//引入依赖及使用依赖
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(express.json()); //使用ui框架，发送纯json时有用，或者postman body raw。使用postman x-www-form-urlencoded无效
const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//定义port
const port = process.env.PORT || 3000;

//使用数据库
require("./config/db");

//引入user路由
const users = require("./routes/api/user");

//使用user路由
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log("服务器启动成功：" + port);
});
