const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
require("./config/db");

const users = require("./routes/api/user");

app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log("服务器启动成功：" + port);
});
