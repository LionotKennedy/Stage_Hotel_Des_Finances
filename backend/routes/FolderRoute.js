const express = require("express");
const router = express.Router();

const { addFolderValidator } = require("../helpers/ValidatorFolder");
const { addFolder, getFolder } = require("../controllers/FolderController");

router.post("/add_folder", addFolderValidator, addFolder);
router.get("/get_folder", getFolder);

module.exports = router;
