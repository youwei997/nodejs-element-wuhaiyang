//引入依赖及使用依赖
const express = require("express");
const app = express();

const passport = require("passport");
// passport 初始化
app.use(passport.initialize());
require("./config/passport")(passport);

app.use(express.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(express.json()); //使用ui框架，发送纯json时有用，或者postman body raw。使用postman x-www-form-urlencoded无效

// bodyParser 和上面的 express.urlencoded({ extended: false }) express.json() 功能基本一致，暂时没需要使用到
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//定义port
const port = process.env.PORT || 3000;

//使用数据库
require("./config/db");

//引入user路由
const users = require("./routes/api/users");
//收支路由
const profiles = require("./routes/api/profiles");

//使用user路由
app.use("/api/users", users);
app.use("/api/profiles", profiles);

app.get("/", (req, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log("服务器启动成功：" + port);
});
