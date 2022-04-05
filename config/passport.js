// var JwtStrategy = require("passport-jwt").Strategy, ExtractJwt = require("passport-jwt").ExtractJwt;
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
// const mongoose = require("mongoose");
const User = require("../model/User");
const { secretKey } = require("../config/index");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
};
