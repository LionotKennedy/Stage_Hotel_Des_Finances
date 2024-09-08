const express = require("express");
const router = express.Router();
const auth = require("../middlewares/AutheMiddleware");
const { upload } = require("../configs/multer");

const {
  addCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} = require("../note/categoryController");

const {
  addPost,
  getPost,
  deletePost,
  updatePost,
} = require("../note/PostController");

const { getUsers, editUsers,  updateUsers, deleteUsers, createUser } = require("../controllers/UserController");

const {
  categoryAddValidator,
  categoryDeleteValidator,
  categoryUpdateValidator,
  postAddValidator,
  postDeleteValidator,
  postUpdateValidator,
} = require("../helpers/AdminValidator");

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

// User
router.get("/get_user", getUsers);
router.get("/edit_user/:id", editUsers);
router.delete("/delete_user/:id", deleteUsers);
router.route("/update_user/:id").put(upload.single("image"), updateUsers);
router.route("/add_user").post(upload.single("image"), createUser);

module.exports = router;
