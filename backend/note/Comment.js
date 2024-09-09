const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
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
  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comments", CommentSchema);
module.exports = Comment;
