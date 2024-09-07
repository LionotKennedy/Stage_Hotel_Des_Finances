const express = require("express");
const router = express.Router();

const { addFolderValidator } = require("../helpers/ValidatorFolder");
const { addFolder } = require("../controllers/FolderController");

router.post("/add_folder", addFolderValidator, addFolder);

module.exports = router;
