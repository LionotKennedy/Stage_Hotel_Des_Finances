const Visa = require("../models/Visa");
const Journal = require("../models/Journal");

const { validationResult } = require("express-validator");

// ############### ADD VISA #################//
const addArchive = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation errors",
        errors: errors.array(),
      });
    }
    const { numero_visa, nom_depose_visa, prenom_depose_visa, reference } =
      req.body;

      
    // Vérification de l'existence du numéro de visa
    const existingVisa = await Visa.findOne({ numero_visa });

    if (existingVisa) {
      return res.status(409).json({
        success: false,
        message: "Le numéro de visa existe déjà",
      });
    }

    const newVisa = new Visa({
      numero_visa,
      nom_depose_visa,
      prenom_depose_visa,
      reference,
    });
    const savedVisa = await newVisa.save();

    // Enregistrer l'action dans Journales
    const newJournal = new Journal({
      action: "Ajout d'un dossier visa",
      details: `Nouveau dossier visa ajouté avec le numéro bordereaux: ${numero_visa}`,
      user: req.user._id,
      userName: req.user.name,
      adressEmail: req.user.email,
      imageJournale: req.user.image,
    });
    await newJournal.save();

    return res.status(200).json({
      success: true,
      message: "Courrier and Nature saved successfully",
      data: savedVisa,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

// ############### GET VISA #################//
const getVisa = async (req, res) => {
  try {
    const VisaData = await Visa.find();
    return res.status(200).json({
      success: true,
      message: "Visa retrieved successfully",
      data: VisaData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

// ############### EDIT VISA BY ID #################//
const editVisaById = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête

    // Rechercher un seul courrier par son ID et inclure les informations de la nature associée
    const visa = await Visa.findOne({ _id: id });

    if (!visa) {
      return res.status(404).json({
        success: false,
        message: "Folder not found",
      });
    }

    const visaData = {
      numero_visa: visa.numero_visa,
      nom_depose_visa: visa.nom_depose_visa,
      prenom_depose_visa: visa.prenom_depose_visa,
      reference: visa.reference,
      createdAt: visa.createdAt,
      updatedAt: visa.updatedAt,
      id: visa._id,
    };

    return res.status(200).json({
      success: true,
      message: "Archive retrieved successfully",
      data: visaData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

// ############### UPDATE VISA BY ID #################//
const updateVisa = async (req, res) => {
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
    const { numero_visa, nom_depose_visa, prenom_depose_visa, reference } =
      req.body;

      
    // Vérification de l'existence du numéro de visa
    const existingVisa = await Visa.findOne({ numero_visa });

    if (existingVisa && existingVisa._id.toString() !== id) {
      return res.status(409).json({
        success: false,
        message: "Le numéro de visa existe déjà",
      });
    }

    const updatedFind = await Visa.findOne({ _id: id });

    if (!updatedFind) {
      return res.status(400).json({
        success: false,
        message: "Visa ID doesn't exists",
      });
    }

    var updateObj = {
      numero_visa,
      nom_depose_visa,
      prenom_depose_visa,
      reference,
    };

    const visaData = await Visa.findByIdAndUpdate(
      { _id: id },
      {
        $set: updateObj,
      },
      { new: true }
    );
    const newJournal = new Journal({
      action: "Mise à jour de dossier visa",
      details: `Dossier visa mis à jour avec le numéro bordereaux: ${numero_visa}`,
      user: req.user._id,
      userName: req.user.name,
      adressEmail: req.user.email,
      imageJournale: req.user.image,
    });
    await newJournal.save();

    return res.status(200).json({
      success: true,
      message: "Visa updated successfully",
      data: visaData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### DELETE POST #################//
const deleteVisa = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }
    //   const { id } = req.body;
    const { id } = req.params;
    const isExists = await Visa.findOne({ _id: id });
    if (!isExists) {
      return res.status(400).json({
        success: false,
        message: "Visa ID doesn't exists",
      });
    }
    const VisaData = await Visa.findByIdAndDelete({ _id: id });
    const newJournal = new Journal({
      action: "Suppression de dossier visa",
      details: `Dossier visa supprimé avec le numéro bordereaux: ${VisaData.numero_visa}`,
      user: req.user._id,
      userName: req.user.name,
      adressEmail: req.user.email,
      imageJournale: req.user.image,
    });
    await newJournal.save();

    return res.status(200).json({
      success: true,
      message: "Visa deleted successfully",
      data: VisaData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

module.exports = { addArchive, getVisa, editVisaById, updateVisa, deleteVisa };
