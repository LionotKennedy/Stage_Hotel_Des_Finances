const Post = require("../models/Post");

const { validationResult } = require("express-validator");

// ############### ADD POST #################//
const addPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { title, description } = req.body;

    var obj = {
      title,
      description,
    };

    if (req.body.categories) {
      obj.categories = req.body.categories;
    }

    const post = new Post(obj);

    const postData = await post.save();

    const postFullDate = await Post.findOne({ _id: postData._id }).populate(
      "categories"
    );

    return res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: postFullDate,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### GET POST #################//
const getPost = async (req, res) => {
  try {
    const post = await Post.find({}).populate("categories");

    return res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      data: post,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### DELETE POST #################//
const deletePost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }
    const { id } = req.body;
    const isExists = await Post.findOne({ _id: id });
    if (!isExists) {
      return res.status(400).json({
        success: false,
        message: "Post ID doesn't exists",
      });
    }
    const postData = await Post.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: postData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### UPDATE CATEGORY #################//
const updatePost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { id, title, description } = req.body;

    const updatedFind = await Post.findOne({ _id: id });

    if (!updatedFind) {
      return res.status(400).json({
        success: false,
        message: "Post ID doesn't exists",
      });
    }

    var updateObj = {
      title,
      description,
    };

    if (req.body.categories) {
      updateObj.categories = req.body.categories;
    }
    const postData = await Post.findByIdAndUpdate(
      { _id: id },
      {
        $set: updateObj,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: postData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

module.exports = { addPost, getPost, deletePost, updatePost };
