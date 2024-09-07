const Courrier = require("../models/Courrier");
const Nature = require("../models/Nature");

const { validationResult } = require("express-validator");

// ############### ADD FOLDER #################//
const addFolder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation errors",
        errors: errors.array(),
      });
    }

    const { description, nom_depose, prenom_depose, matricule } = req.body;
    const { numero_bordereaux, date_depart, expiditeur, destination } = req.body;

    // Étape 1 : Créer et sauvegarder la Nature
    const newNature = new Nature({
      description,
      nom_depose,
      prenom_depose,
      matricule,
    });

    const savedNature = await newNature.save();

    // Étape 2 : Utiliser l'ID de Nature pour créer le Courrier
    const newCourrier = new Courrier({
      numero_bordereaux,
      date_depart,
      expiditeur,
      destination,
      id_nature: savedNature._id,  // Lien avec la Nature créée
    });

    const savedCourrier = await newCourrier.save();

    return res.status(200).json({
      success: true,
      message: "Courrier and Nature saved successfully",
      data: {
        nature: savedNature,
        courrier: savedCourrier,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

// ############### GET FOLDER #################//
const getFolder = async (req, res) => {
  try {
    // Récupérer tous les courriers et utiliser populate pour inclure les informations de la nature
    const courriers = await Courrier.find().populate('id_nature');

    if (!courriers || courriers.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No folders found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Folders retrieved successfully",
      data: courriers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

module.exports = { addFolder, getFolder };
