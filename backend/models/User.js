const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
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
  },
  role: {
    type: Number,
    default: 0, // 0 -> Normal user, 1 -> Admin user, 2-> Sub-admin
  },
  status: {
    type: String,
    default: "active", // 0 -> Normal user, 1 -> Admin user, 2-> Sub-admin
  },
  image: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;
