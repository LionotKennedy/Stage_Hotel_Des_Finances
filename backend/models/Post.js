const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categorys",
      required: false,
    },
  ],
});

const Post = mongoose.model("Posts", PostSchema);
module.exports = Post;
