const Courrier = require("../models/Courrier");
const Nature = require("../models/Nature");
const Archive = require("../models/Archive");
const Journal = require("../models/Journal");

const { validationResult } = require("express-validator");

// ############### ADD POST #################//
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

    const { description, nom_depose, prenom_depose, matricule } = req.body;
    const { numero_bordereaux, date_depart, expiditeur, destination } =
      req.body;

    // Vérification de l'année de date_depart
    const currentYear = new Date().getFullYear();
    const yearOfDateDepart = new Date(date_depart).getFullYear();

    if (yearOfDateDepart < currentYear) {
      // Si la date est dans une année passée, stocker les données dans la collection Archives
      const newArchive = new Archive({
        numero_bordereaux,
        date_depart,
        expiditeur,
        destination,
        description,
        nom_depose,
        prenom_depose,
        matricule,
      });

      await newArchive.save();

      // Vérification de l'utilisateur
      if (!req.user || !req.user.name) {
        return res.status(500).json({
          success: false,
          message: "User information is missing",
        });
      }

      // Enregistrer l'action dans Journales
      const newJournal = new Journal({
        action: "Ajout d'un dossier archivé",
        details: `Dossier archivé avec le numéro bordereaux: ${numero_bordereaux}`,
        user: req.user._id,
        userName: req.user.name,
        adressEmail: req.user.email,
        imageJournale: req.user.image,
      });
      await newJournal.save();

      return res.status(200).json({
        success: true,
        message: "Data archived successfully",
        data: newArchive,
      });
    } else {
      // Sinon, continuer à sauvegarder dans Nature et Courrier
      const newNature = new Nature({
        description,
        nom_depose,
        prenom_depose,
        matricule,
      });

      const savedNature = await newNature.save();

      const newCourrier = new Courrier({
        numero_bordereaux,
        date_depart,
        expiditeur,
        destination,
        id_nature: savedNature._id,
      });

      const savedCourrier = await newCourrier.save();

      // Enregistrer l'action dans Journales
      const newJournal = new Journal({
        action: "Ajout d'un dossier",
        details: `Nouveau dossier ajouté avec le numéro bordereaux: ${numero_bordereaux}`,
        user: req.user._id,
        userName: req.user.name,
        adressEmail: req.user.email,
        imageJournale: req.user.image,
      });
      await newJournal.save();

      return res.status(200).json({
        success: true,
        message: "Courrier and Nature saved successfully",
        data: {
          nature: savedNature,
          courrier: savedCourrier,
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

// ############### GET FOLDER #################//
const getArchive = async (req, res) => {
  try {
    const ArchiveData = await Archive.find();
    return res.status(200).json({
      success: true,
      message: "Archive retrieved successfully",
      data: ArchiveData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

// ############### EDIT ARCHIVE BY ID #################//
const editArchiveById = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête

    // Rechercher un seul courrier par son ID et inclure les informations de la nature associée
    const archive = await Archive.findOne({ _id: id });

    if (!archive) {
      return res.status(404).json({
        success: false,
        message: "Folder not found",
      });
    }

    const ArchiveData = {
      description: archive.description,
      nom_depose: archive.nom_depose,
      prenom_depose: archive.prenom_depose,
      matricule: archive.matricule,
      numero_bordereaux: archive.numero_bordereaux,
      date_depart: archive.date_depart,
      expiditeur: archive.expiditeur,
      destination: archive.destination,
      id: archive._id,
    };

    return res.status(200).json({
      success: true,
      message: "Archive retrieved successfully",
      data: ArchiveData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
// ############### ENDING #################//

// ############### UPDATE ARCHIVE BY ID #################//





// const updateArchiveById = async (req, res) => {
//   try {
//     const { id } = req.params; // Récupérer l'ID du courrier depuis les paramètres de la requête
//     const {
//       description,
//       nom_depose,
//       prenom_depose,
//       matricule,
//       numero_bordereaux,
//       date_depart,
//       expiditeur,
//       destination,
//     } = req.body;

//     // Étape 1 : Rechercher le courrier par son ID
//     const courrier = await Courrier.findById(id);
//     if (!courrier) {
//       return res.status(404).json({
//         success: false,
//         message: "Folder not found",
//       });
//     }

//     // Étape 2 : Rechercher la nature associée par l'ID du courrier
//     const nature = await Nature.findById(courrier.id_nature);
//     if (!nature) {
//       return res.status(404).json({
//         success: false,
//         message: "Nature not found",
//       });
//     }

//     // Étape 3 : Vérifier l'année de la nouvelle date_depart
//     const yearOfDateDepart = new Date(date_depart).getFullYear();
//     const currentYear = new Date().getFullYear();

//     if (yearOfDateDepart < currentYear) {
//       // Si la date est dans une année passée, archiver les données
//       const newArchive = new Archive({
//         numero_bordereaux: numero_bordereaux || courrier.numero_bordereaux,
//         date_depart: date_depart || courrier.date_depart,
//         expiditeur: expiditeur || courrier.expiditeur,
//         destination: destination || courrier.destination,
//         description: description || nature.description,
//         nom_depose: nom_depose || nature.nom_depose,
//         prenom_depose: prenom_depose || nature.prenom_depose,
//         matricule: matricule || nature.matricule,
//       });

//       await newArchive.save();

//       // Supprimer les documents des collections nature et courrier
//       await Courrier.findByIdAndDelete(courrier._id);
//       await Nature.findByIdAndDelete(nature._id);

//       const newJournal = new Journal({
//         action: "Archivage de dossier",
//         details: `Dossier archivé avec le numéro bordereaux: ${numero_bordereaux}`,
//         user: req.user._id,
//         userName: req.user.name,
//         adressEmail: req.user.email,
//         imageJournale: req.user.image,
//       });
//       await newJournal.save();

//       return res.status(200).json({
//         success: true,
//         message: "Data archived successfully",
//         data: newArchive,
//       });
//     } else {
//       // Sinon, mettre à jour les champs dans la collection Natures
//       nature.description = description || nature.description;
//       nature.nom_depose = nom_depose || nature.nom_depose;
//       nature.prenom_depose = prenom_depose || nature.prenom_depose;
//       nature.matricule = matricule || nature.matricule;
//       await nature.save(); // Sauvegarder les modifications dans la collection Natures

//       // Mettre à jour les champs dans la collection Courriers
//       courrier.numero_bordereaux =
//         numero_bordereaux || courrier.numero_bordereaux;
//       courrier.date_depart = date_depart || courrier.date_depart;
//       courrier.expiditeur = expiditeur || courrier.expiditeur;
//       courrier.destination = destination || courrier.destination;
//       await courrier.save(); // Sauvegarder les modifications dans la collection Courriers

//       const newJournal = new Journal({
//         action: "Mise à jour de dossier",
//         details: `Dossier mis à jour avec le numéro bordereaux: ${numero_bordereaux}`,
//         user: req.user._id,
//         userName: req.user.name,
//         adressEmail: req.user.email,
//         imageJournale: req.user.image,
//       });
//       await newJournal.save();

//       return res.status(200).json({
//         success: true,
//         message: "Folder updated successfully",
//         data: {
//           nature,
//           courrier,
//         },
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Server error: " + error.message,
//     });
//   }
// };















// const updateArchiveById = async (req, res) => {
//   try {
//       const { id } = req.params;
//       const { description, nom_depose, prenom_depose, matricule, numero_bordereaux, date_depart, expiditeur, destination } = req.body;

//       // Étape 1 : Rechercher le courrier par son ID
//       const courrier = await Courrier.findById(id);
//       if (!courrier) {
//           return res.status(404).json({
//               success: false,
//               message: "Folder not found",
//           });
//       }

//       // Étape 2 : Rechercher la nature associée par l'ID du courrier
//       const nature = await Nature.findById(courrier.id_nature);
//       if (!nature) {
//           return res.status(404).json({
//               success: false,
//               message: "Nature not found",
//           });
//       }

//       // Étape 3 : Vérifier l'année de la nouvelle date_depart
//       const yearOfDateDepart = new Date(date_depart).getFullYear();
//       const currentYear = new Date().getFullYear();

//       if (yearOfDateDepart < currentYear) {
//           // Si la date est dans une année passée, archiver les données
//           const newArchive = new Archive({
//               numero_bordereaux,
//               date_depart,
//               expiditeur,
//               destination,
//               description,
//               nom_depose,
//               prenom_depose,
//               matricule,
//           });

//           await newArchive.save();

//           // Supprimer les documents des collections nature et courrier
//           await Courrier.findByIdAndDelete(courrier._id);
//           await Nature.findByIdAndDelete(nature._id);

//           // Enregistrer l'action dans Journales
//           const newJournal = new Journal({
//               action: "Archivage de dossier",
//               details: `Dossier archivé avec le numéro bordereaux: ${numero_bordereaux}`,
//               user: req.user._id,
//               userName: req.user.name,
//               adressEmail: req.user.email,
//               imageJournale: req.user.image,
//           });
//           await newJournal.save();

//           return res.status(200).json({
//               success: true,
//               message: "Data archived successfully",
//               data: newArchive,
//           });
//       } else {
//           // Sinon, mettre à jour les champs dans les collections Nature et Courrier
//           nature.description = description;
//           nature.nom_depose = nom_depose;
//           nature.prenom_depose = prenom_depose;
//           nature.matricule = matricule;
//           await nature.save();

//           courrier.numero_bordereaux = numero_bordereaux;
//           courrier.date_depart = date_depart;
//           courrier.expiditeur = expiditeur;
//           courrier.destination = destination;
//           await courrier.save();

//           // Enregistrer l'action dans Journales
//           const newJournal = new Journal({
//               action: "Mise à jour de dossier",
//               details: `Dossier mis à jour avec le numéro bordereaux: ${numero_bordereaux}`,
//               user: req.user._id,
//               userName: req.user.name,
//               adressEmail: req.user.email,
//               imageJournale: req.user.image,
//           });
//           await newJournal.save();
















// const updateArchiveById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       description,
//       nom_depose,
//       prenom_depose,
//       matricule,
//       numero_bordereaux,
//       date_depart,
//       expiditeur,
//       destination,
//     } = req.body;

//     // Étape 1 : Rechercher le document Archive par son ID
//     const archive = await Archive.findById(id);
//     if (!archive) {
//       return res.status(404).json({
//         success: false,
//         message: "Archive not found",
//       });
//     }

//     // Vérifier l'année de la nouvelle date_depart
//     const yearOfDateDepart = new Date(date_depart).getFullYear();
//     const currentYear = new Date().getFullYear();

//     // Étape 2 : Vérifier si la date est dans une année passée
//     if (yearOfDateDepart < currentYear) {
//       // Créer un nouveau document Archive
//       const newArchive = new Archive({
//         numero_bordereaux: numero_bordereaux || archive.numero_bordereaux,
//         date_depart: date_depart || archive.date_depart,
//         expiditeur: expiditeur || archive.expiditeur,
//         destination: destination || archive.destination,
//         description: description || archive.description,
//         nom_depose: nom_depose || archive.nom_depose,
//         prenom_depose: prenom_depose || archive.prenom_depose,
//         matricule: matricule || archive.matricule,
//       });

//       await newArchive.save();

//       // Mettre à jour le journal avec l'action d'archivage
//       const newJournal = new Journal({
//         action: "Archivage de dossier",
//         details: `Dossier archivé avec le numéro bordereaux: ${numero_bordereaux}`,
//         user: req.user._id,
//         userName: req.user.name,
//         adressEmail: req.user.email,
//         imageJournale: req.user.image,
//       });
//       await newJournal.save();

//       return res.status(200).json({
//         success: true,
//         message: "Data archived successfully",
//         data: newArchive,
//       });
//     } else {
//       // Mettre à jour les champs dans la collection Archive
//       archive.description = description || archive.description;
//       archive.nom_depose = nom_depose || archive.nom_depose;
//       archive.prenom_depose = prenom_depose || archive.prenom_depose;
//       archive.matricule = matricule || archive.matricule;
//       await archive.save(); // Sauvegarder les modifications dans la collection Archive

//       const newJournal = new Journal({
//         action: "Mise à jour de dossier",
//         details: `Dossier mis à jour avec le numéro bordereaux: ${numero_bordereaux}`,
//         user: req.user._id,
//         userName: req.user.name,
//         adressEmail: req.user.email,
//         imageJournale: req.user.image,
//       });
//       await newJournal.save();



//       return res.status(200).json({
//         success: true,
//         message: "Folder updated successfully",
//         data: { nature, courrier },
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Server error: " + error.message,
//     });
//   }
// };















const updateArchiveById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      description,
      nom_depose,
      prenom_depose,
      matricule,
      numero_bordereaux,
      date_depart,
      expiditeur,
      destination,
    } = req.body;
    
    // console.log("Archive trouvée :", archive);
    console.log("Archive trouvée date :", date_depart);
    const currentYear = new Date().getFullYear();
    const yearOfDateDepart = new Date(date_depart).getFullYear();
    console.log(currentYear)
    console.log(yearOfDateDepart)

    
    if (yearOfDateDepart < currentYear) {
    // Étape 1 : Rechercher le document Archive par son ID
    const archive = await Archive.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          numero_bordereaux: numero_bordereaux || (archive && archive.numero_bordereaux),
          date_depart: date_depart || (archive && archive.date_depart),
          expiditeur: expiditeur || (archive && archive.expiditeur),
          destination: destination || (archive && archive.destination),
          description: description || (archive && archive.description),
          nom_depose: nom_depose || (archive && archive.nom_depose),
          prenom_depose: prenom_depose || (archive && archive.prenom_depose),
          matricule: matricule || (archive && archive.matricule),
        },
        new: true,
        upsert: true,
      },
      { new: true }
    );

    if (!archive) {
      return res.status(404).json({
        success: false,
        message: "Archive not found",
      });
    }

    const newJournal = new Journal({
      action: `Mise à jour de dossier archive`,
      details: `Dossier mis à jour avec le numéro bordereaux: ${archive.numero_bordereaux}`,
      user: req.user._id,
      userName: req.user.name,
      adressEmail: req.user.email,
      imageJournale: req.user.image,
    });
    await newJournal.save();

    return res.status(200).json({
      success: true,
      message: "Data archived successfully",
      data: archive,
    });
    } else {
      console.log("journal")

      // const nature = await Archive.findOneAndUpdate(
      //   { _id: id },
      //   {
      //     $set: {
      //       numero_bordereaux: numero_bordereaux || (nature && nature.numero_bordereaux),
      //       date_depart: date_depart || (nature && nature.date_depart),
      //       expiditeur: expiditeur || (nature && nature.expiditeur),
      //       destination: destination || (nature && nature.destination),
      //       description: description || (nature && nature.description),
      //       nom_depose: nom_depose || (nature && nature.nom_depose),
      //       prenom_depose: prenom_depose || (nature && nature.prenom_depose),
      //       matricule: matricule || (nature && nature.matricule),
      //     },
      //     new: true,
      //     upsert: true,
      //   },
      //   { new: true }
      // );
      // const courrier = await Courrier.findOneAndUpdate(
      //   { _id: id },
      //   {
      //     $set: {
      //       numero_bordereaux: numero_bordereaux || (courrier && courrier.numero_bordereaux),
      //       date_depart: date_depart || (courrier && courrier.date_depart),
      //       expiditeur: expiditeur || (courrier && courrier.expiditeur),
      //       destination: destination || (courrier && courrier.destination),
      //       description: description || (courrier && courrier.description),
      //       nom_depose: nom_depose || (courrier && courrier.nom_depose),
      //       prenom_depose: prenom_depose || (courrier && courrier.prenom_depose),
      //       matricule: matricule || (courrier && courrier.matricule),
      //     },
      //     new: true,
      //     upsert: true,
      //   },
      //   { new: true }
      // );
      // return res.status(200).json({
      //   success: true,
      //   message: "Folder updated successfully",
      // });

      // Sinon, mettre à jour les champs dans la collection Natures
      const nature = await Archive.findOneAndUpdate()
      nature.description = description || nature.description;
      nature.nom_depose = nom_depose || nature.nom_depose;
      nature.prenom_depose = prenom_depose || nature.prenom_depose;
      nature.matricule = matricule || nature.matricule;
      await nature.save(); // Sauvegarder les modifications dans la collection Natures
      const courrier = await Courrier.findOneAndUpdate()
      // Mettre à jour les champs dans la collection Courriers
      courrier.numero_bordereaux =
        numero_bordereaux || courrier.numero_bordereaux;
      courrier.date_depart = date_depart || courrier.date_depart;
      courrier.expiditeur = expiditeur || courrier.expiditeur;
      courrier.destination = destination || courrier.destination;
      await courrier.save(); // Sauvegarder les modifications dans la collection Courriers

      const newJournal = new Journal({
        action: "Mise à jour de dossier",
        details: `Dossier mis à jour avec le numéro bordereaux: ${numero_bordereaux}`,
        user: req.user._id,
        userName: req.user.name,
        adressEmail: req.user.email,
        imageJournale: req.user.image,
      });
      await newJournal.save();

      return res.status(200).json({
        success: true,
        message: "Folder updated successfully",
        data: {
          nature,
          courrier,
        },
      });
    }

      // const comparisonDate = new Date(yearOfDateDepart, monthOfDateDepart - 1, dayOfDateDepart);
      // console.log(comparisonDate)
    // Construire une date de comparaison
    
    // Comparer les dates
    // const isFutureOrPresent = currentDate >= comparisonDate;

    // console.log(isFutureOrPresent)

    // Étape 2 : Mettre à jour Courriers et Natures si nécessaire
    // if (isFutureOrPresent) {
    //   // Mettre à jour Courriers
    //   const courrier = await Courrier.findByIdAndUpdate(
    //     archive.id_courrier,
    //     {
    //       $set: {
    //         numero_bordereaux: numero_bordereaux || (courrier && courrier.numero_bordereaux),
    //         date_depart: date_depart || (courrier && courrier.date_depart),
    //         expiditeur: expiditeur || (courrier && courrier.expiditeur),
    //         destination: destination || (courrier && courrier.destination),
    //       },
    //       new: true,
    //     },
    //     { new: true }
    //   );

    //   if (!courrier) {
    //     return res.status(404).json({
    //       success: false,
    //       message: "Corresponding Courier not found",
    //     });
    //   }

    //   // Mettre à jour Natures
    //   const nature = await Nature.findByIdAndUpdate(
    //     courrier.id_nature,
    //     {
    //       $set: {
    //         description: description || (nature && nature.description),
    //         nom_depose: nom_depose || (nature && nature.nom_depose),
    //         prenom_depose: prenom_depose || (nature && nature.prenom_depose),
    //         matricule: matricule || (nature && nature.matricule),
    //       },
    //       new: true,
    //     },
    //     { new: true }
    //   );

    //   if (!nature) {
    //     return res.status(404).json({
    //       success: false,
    //       message: "Corresponding Nature not found",
    //     });
    //   }
    // }

    // Étape 3 : Enregistrer l'action dans Journal


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};

// ############### ENDING #################//

// ############### ARCHIVE DELETING #################//
const deleteArhiveById = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête
    const archive = await Archive.findById(id);
    await archive.deleteOne({ $set: req.body });
    const newJournal = new Journal({
      action: "Suppression de dossier",
      details: `Dossier supprimé avec le numéro bordereaux: ${archive.numero_bordereaux}`,
      user: req.user._id,
      userName: req.user.name,
      adressEmail: req.user.email,
      imageJournale: req.user.image,
    });
    await newJournal.save();
    res.status(200).json({
      status: 200,
      message: "Arhive deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
// ################# ENDING ####################//

module.exports = {
  addArchive,
  getArchive,
  editArchiveById,
  updateArchiveById,
  deleteArhiveById,
};
