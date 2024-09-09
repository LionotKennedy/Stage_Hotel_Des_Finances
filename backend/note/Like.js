const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Posts",
  },
});

const Like = mongoose.model("Likes", LikeSchema);
module.exports = Like;
