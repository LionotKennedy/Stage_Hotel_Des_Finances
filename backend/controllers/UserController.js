const User = require("../models/User");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const randomstring = require("randomstring");
const sendMail = require("../utils/sendMail"); // Assure-toi que ce fichier est bien en place
const dns = require("dns"); // Importer le module dns pour vérifier la connexion

const { validationResult } = require("express-validator");

// ############### TESTE CONNEXION #################//
// Fonction pour vérifier la connexion Internet
const checkInternetConnection = () => {
  return new Promise((resolve, reject) => {
    dns.lookup('google.com', (err) => {
      if (err && err.code === "ENOTFOUND") {
        reject(new Error("No internet connection"));
      } else {
        resolve(true);
      }
    });
  });
};
// ############### ENDING #################//


// ############### CREATE USER #################//
const createUsers = async (req, res) => {
  console.log("coucou li user");
  try {
    // Vérifier la connexion Internet
    await checkInternetConnection();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { name, email } = req.body;

    const isExists = await User.findOne({ email });
    if (isExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const password = randomstring.generate(6); 
    const hashPassword = await bcrypt.hash(password, 10);

    let imagePath = "uploads_default/user.png"; 

    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const obj = {
      name,
      email,
      password: hashPassword,
      image: imagePath, 
    };

    if (req.body.role && req.body.role == 1) {
      return res.status(400).json({
        success: false,
        message: "You can't create an admin",
      });
    } else if (req.body.role) {
      obj.role = req.body.role;
    }

    const user = new User(obj);
    const userData = await user.save();

    const content = `
      <p>Hi <b>${userData.name}</b>, Your account has been created. Below are your details.</p>
      <table style="border-style:none;">
        <tr>
          <th>Name: -</th>
          <td>${userData.name}</td>
        </tr>
        <tr>
          <th>Email: -</th>
          <td>${userData.email}</td>
        </tr>
        <tr>
          <th>Password: -</th>
          <td>${password}</td>
        </tr>
      </table>
      <p>You can now log in to your account. Thanks...</p>
    `;
    sendMail(userData.email, "Account Created", content);

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: userData,
    });
  } catch (error) {
    // Vérifie si l'erreur est liée à l'absence de connexion
    if (error.message === "No internet connection") {
      return res.status(400).json({
        success: false,
        message: "No internet connection. Please try again later.",
      });
    }
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

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

// // ############### EDIT USERS #################//
// const editUsers = async (req, res) => {
//   try {
//     const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête

//     // Rechercher un seul utilisateur par son ID
//     const user = await User.findOne({ _id: id });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found...",
//       });
//     }

//     // Construction de l'URL complète de l'image
//     const baseUrl = `${req.protocol}://${req.get("host")}`;
//     const imageUrl = user.image
//       ? `${baseUrl}/uploads/${user.image}`
//       // ? `${baseUrl}${user.image}`
//       : `${baseUrl}/uploads/uploads_default/user.png`;

//     const userData = {
//       name: user.name,
//       email: user.email,
//       password: user.password,
//       role: user.role,
//       status: user.status,
//       image: imageUrl,
//       id: user._id,
//     };

//     return res.status(200).json({
//       success: true,
//       message: "User fetched successfully",
//       data: userData,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// // ############### ENDING #################//


// ############### EDIT USERS #################//
const editUsers = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête

    // Rechercher un seul utilisateur par son ID
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found...",
      });
    }

    // Construction de l'URL complète de l'image
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    let imageUrl;
    if (user.image && user.image.startsWith('uploads/')) {
      // Si l'image commence par "uploads/", on construit l'URL normalement
      imageUrl = `${baseUrl}/uploads/${user.image}`;
    } else if (user.image && !user.image.startsWith('uploads/')) {
      // Si l'image ne commence pas par "uploads/", on suppose qu'elle est dans le dossier par défaut
      imageUrl = `${baseUrl}/uploads/uploads_default/${user.image}`;
    } else {
      // Si aucune image n'est trouvée, utiliser l'image par défaut
      imageUrl = `${baseUrl}/uploads/uploads_default/user.png`;
    }

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
        message: "User does not exist",
      });
    }

    const updateObj = { name, email };

    // Si une nouvelle image est fournie
    if (imagePath) {
      updateObj.image = imagePath;

      // Supprimer l'ancienne image si elle existe
      if (userExists.image && userExists.image !== "uploads/uploads_default/user.png") {
        const oldImagePath = path.join(
          __dirname,
          "../uploads",
          path.basename(userExists.image)
        );
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

    if (req.body.image !== undefined) {
      updateObj.image = req.body.image;
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

// ############### DELETE USERS #################//
const deleteUsers = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { id } = req.params;

    const userToDelete = await User.findById(id);

    if (!userToDelete) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if user has an image
    if (
      userToDelete.image &&
      userToDelete.image !== "uploads_default/user.png"
    ) {
      const imagePath = path.join(
        __dirname,
        "../uploads",
        path.basename(userToDelete.image)
      );
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Failed to delete image:", err);
        }
      });
    }

    const deletedUser = await User.findByIdAndDelete({ _id: id });

    if (deletedUser) {
      return res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to delete user",
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

module.exports = { getUsers, editUsers, updateUsers, deleteUsers, createUsers };
