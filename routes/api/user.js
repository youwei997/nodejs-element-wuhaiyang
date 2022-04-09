// login & register
const express = require("express");
const router = express.Router();
const { compare } = require("bcrypt");
const gravatar = require("gravatar");
const { sign, verify } = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../model/User");
const { secretKey } = require("../../config/index");

//登录
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "用户不存在", code: 1 });

    const pwdValid = await compare(password, user.password);
    if (!pwdValid) return res.status(400).json({ msg: "密码错误", code: 1 });

    const rule = {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      identity: user.identity,
    };
    const token = await sign(rule, secretKey, { expiresIn: 3600 });
    res.json({ email, msg: "登录成功", code: 0, token: "Bearer " + token });
  } catch (error) {
    res.json({
      msg: "服务器异常",
      code: 1,
    });
  }
});

//注册
router.post("/register", async (req, res) => {
  let { username, avatar, password, email, identity } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "邮箱已存在" });
  } else {
    try {
      avatar = gravatar.url(email, {
        s: "200", //大小
        r: "pg", // 格式
        d: "mm", // mm：默认图
      });
      const newUser = await User.create({ username, avatar, password, email, identity });
      res.json({
        code: 0,
        msg: "注册成功",
      });
    } catch (error) {
      res.json({
        code: 1,
        msg: "服务器异常",
      });
    }
  }
});

//当前用户
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    res.json({
      msg: "ok",
      code: 1,
      data: {
        username: req.user.username,
        id: req.user.id,
        email: req.user.email,
        avatar: req.user.avatar,
        identity: req.user.identity,
      },
    });
  }
);

module.exports = router;
