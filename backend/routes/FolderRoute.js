const express = require("express");
const router = express.Router();

const { addFolderValidator, editFolderValidator, updateFolderValidator, deleteFolderValidator } = require("../helpers/ValidatorFolder");
const { addFolder, getFolder, editFolderById, updateFolderById, deleteFolderById } = require("../controllers/FolderController");

router.post("/add_folder", addFolderValidator, addFolder);
router.get("/get_folder", getFolder);
router.get("/edit_folder/:id", editFolderValidator, editFolderById); // Nouvelle route pour récupérer un dossier par ID
router.put("/update_folder/:id", updateFolderValidator, updateFolderById); // Nouvelle route pour mettre à jour un dossier
router.delete("/delete_folder/:id", deleteFolderValidator, deleteFolderById); // Nouvelle route pour supprimer un dossier

module.exports = router;
