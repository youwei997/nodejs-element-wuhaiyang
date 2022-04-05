const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set(val) {
      return bcrypt.hashSync(val, 10);
    },
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = model("users", UserSchema);
