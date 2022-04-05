const mongoose = require("mongoose");
const config = require("./index");
mongoose
  .connect(config.URL)
  .then(() => console.log("数据库连接成功"))
  .catch((err) => console.log(err));
