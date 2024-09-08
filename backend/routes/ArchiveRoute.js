const express = require("express");
const router = express.Router();

const { addFolderValidator, updateFolderValidator } = require("../helpers/ValidatorFolder");
const { addArchiveValidator } = require("../helpers/ValidatorArchive");

const { addArchive, getArchive, editArchiveById, updateArchiveById, deleteArhiveById } = require("../controllers/ArchiveController");

router.post("/add_archive", addFolderValidator, addArchive);
router.get("/get_archive", getArchive);
router.get("/edit_archive/:id", addArchiveValidator, editArchiveById);
router.put("/update_archive/:id", updateFolderValidator, updateArchiveById); // Nouvelle route pour mettre à jour un dossier
router.delete("/delete_archive/:id", updateFolderValidator, deleteArhiveById); // Nouvelle route pour mettre à jour un dossier


module.exports = router;