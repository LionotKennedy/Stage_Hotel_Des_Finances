const User = require("../models/User");
const path = require("path");
const fs = require("fs");

const { validationResult } = require("express-validator");

const bcrypt = require("bcrypt");

// ############### GET USERS #################//
const getUsers = async (req, res) => {
  try {
    const userData = await User.find();
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: userData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### EDIT USERS #################//
const editUsers = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête

    // Rechercher un seul utilisateur par son ID
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Construction de l'URL complète de l'image
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const imageUrl = user.image ? `${baseUrl}/uploads/${user.image}` : null;

    const userData = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      status: user.status,
      image: imageUrl,
      id: user._id,
    };

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: userData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//



// ############### UPDATE USERS #################//
const updateUsers = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { id } = req.params;
    const { name, email } = req.body;
    let imagePath = req.file ? `/uploads/${req.file.filename}` : null; // Chemin de l'image

    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(400).json({
        success: false,
        message: "User not exists",
      });
    }

    const updateObj = { name, email };

    // Si une nouvelle image est fournie
    if (imagePath) {
      updateObj.image = imagePath;

      // Supprimer l'ancienne image si elle existe
      if (userExists.image) {
        const oldImagePath = path.join(__dirname, "../uploads", userExists.image);
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error("Failed to delete old image:", err);
          }
        });
      }
    }

    if (req.body.role !== undefined) {
      updateObj.role = req.body.role;
    }

    if (req.body.status !== undefined) {
      updateObj.status = req.body.status;
    }

    const updatedUser = await User.updateOne({ _id: id }, { $set: updateObj });

    if (updatedUser.modifiedCount === 1) {
      return res.status(200).json({
        success: true,
        message: "User updated successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to update user",
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// ############### ENDING #################//

module.exports = { getUsers, editUsers, updateUsers };
