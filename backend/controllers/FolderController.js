const Courrier = require("../models/Courrier");
const Nature = require("../models/Nature");

const { validationResult } = require("express-validator");

// ############### ADD FOLDER #################//
const addFolder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { id, description, nom_depose, prenom_depose, matricule } = req.body;
    const {
      numero_bordereaux,
      date_depart,
      expiditeur,
      destination,
      id_nature,
    } = req.body;


    var obj2 = {
    //   _id,   
      description,
      nom_depose,
      prenom_depose,
      matricule,
    };

    const nature = new Nature(obj2);

    const natureData = await nature.save();


    const fournisseur = await Nature.find();

    if (!fournisseur) {
      return res.status(400).json({
        success: false,
        message: "Nature ID doesn't exists",
      });
    }


    var obj = {
      numero_bordereaux,
      date_depart,
      expiditeur,
      destination,
      id_nature,
    };

    return res.status(200).json({
      success: true,
      message: "Test created successfully",
      data: obj2,
      data2: obj,
      data3: fournisseur._id,
      data4: natureData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

module.exports = { addFolder };
