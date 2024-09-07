const express = require("express");
const router = express.Router();
const auth = require("../middlewares/AutheMiddleware");
const {
  addCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const {
  addPost,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/PostController");

const { categoryAddValidator, categoryDeleteValidator, categoryUpdateValidator, postAddValidator, postDeleteValidator, postUpdateValidator } = require("../helpers/AdminValidator");

// Category
router.post("/add_category", auth, addCategory);
router.get("/get_category", auth, getCategory);
router.delete("/delete_category", auth, deleteCategory);
router.put("/update_category", auth, updateCategory);

// Post
router.post("/add_post", auth, addPost);
router.get("/get_post", auth, getPost);
router.delete("/delete_post", auth, deletePost);
router.put("/update_post", auth, updatePost);

module.exports = router;
