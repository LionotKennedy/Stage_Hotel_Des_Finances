const User = require("../models/User");

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

    // Rechercher un seul courrier par son ID et inclure les informations de la nature associée
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Folder not found",
      });
    }

    const UserData = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      status: user.status,
      image: user.image,
      //   expiditeur: user.expiditeur,
      //   destination: user.destination,
      id: user._id,
    };
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: UserData,
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
    const {  name, email } = req.body;
    let image = req.file ? req.file.filename : null; // Récupérer le nom du fichier photo si présent

    const isExists = await User.findOne({
      _id: id,
    });

    if (!isExists) {
      return res.status(400).json({
        success: false,
        message: "User not exists",
        dateID: isExists,
      });
    }

    var updateObj = {
      name,
      email,
    };

    if (image) {
      updateObj.image = image;
      // Récupérer l'utilisateur existant
      let user = await customer
        .config()
        .collection("users")
        .findOne({ _id: id });
      if (user && user.image) {
        // Supprimer l'ancienne photo
        fs.unlink(path.join(__dirname, "../uploads", user.image), (err) => {
          if (err) console.error("Failed to delete image:", err);
        });
      }
    }

    if (req.body.role != undefined) {
      updateObj.role = req.body.role;
    }

    if (req.body.status != undefined) {
      updateObj.status = req.body.status;
    }

    // const updatedData = await User.findByIdAndUpdate(
    //   { _id: id },
    //   {
    //     $set: updateObj,
    //   },
    //   { new: true }
    // );




    let result = await customer
    .config()
    .collection("users")
    .updateOne({ _id: id }, { $set: updateObj });
  if (result.modifiedCount == 1) {
    res.json({
      status: 200,
      message: "Update have been successfully...",
    });
  } else {
    res.json({
      status: 400,
      message: "Failed update user",
    });
  }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

module.exports = { getUsers, editUsers, updateUsers };
