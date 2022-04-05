// login & register
const express = require("express");
const router = express.Router();
const User = require("../../model/User");

router.get("/test", (req, res) => {
  res.json({
    msg: "login",
  });
});

router.post("/register", async (req, res) => {
  const { username, avatar, password, email } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    return res.status(400).json({ msg: "邮箱已存在" });
  } else {
    try {
      const newUser = await User.create({ username, avatar, password, email });
      console.log(newUser);
      res.json({
        newUser,
        code: 0,
        msg: "register",
      });
    } catch (error) {
      res.json({
        code: 1,
        msg: "服务器异常",
      });
    }
  }
});

module.exports = router;
