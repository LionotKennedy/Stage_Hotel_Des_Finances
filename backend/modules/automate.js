
// const mongoose = require('mongoose');
// const Archive = require("../models/Archive");
// const Nature = require("../models/Nature");
// const Courrier = require("../models/Courrier");
// const dotenv = require("dotenv");
// dotenv.config();

// const CONNECTION = process.env.MONGODB_CONNECTION;

// async function archiveOldData() {
//   try {
//     // Récupérer les données de l'année précédente
//     const courriers = await Courrier.find({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } })
//       .populate("id_nature");
    
//     // Récupérer toutes les données de Nature qui ne sont pas liées à un courrier
//     const natures = await Nature.find({ _id: { $nin: courriers.map(c => c.id_nature._id) } });
    
//     // Transformer les données de Courrier pour les faire correspondre au schéma Archive
//     const formattedCourriers = courriers.map(courrier => ({
//       description: courrier.id_nature.description || 'N/A',
//       nom_depose: courrier.id_nature.nom_depose || 'N/A',
//       prenom_depose: courrier.id_nature.prenom_depose || 'N/A',
//       matricule: courrier.id_nature.matricule || 'N/A',
//       numero_bordereaux: courrier.numero_bordereaux || 'N/A',
//       date_depart: courrier.date_depart,
//       expiditeur: courrier.expiditeur || 'N/A',
//       destination: courrier.destination || 'N/A'
//     }));
  
//     console.log("Coucou" + formattedCourriers);
    
//     // Transformer les données de Nature pour les faire correspondre au schéma Archive
//     const formattedNatures = natures.map(nature => ({
//       description: nature.description || 'N/A',
//       nom_depose: nature.nom_depose || 'N/A',
//       prenom_depose: nature.prenom_depose || 'N/A',
//       matricule: nature.matricule || 'N/A',
//     }));
    
//     // Insérer les données formatées dans la collection Archive
//     await Archive.insertMany(formattedCourriers.concat(formattedNatures));
    
//     // Supprimer les anciennes données
//     await Promise.all([
//       Courrier.deleteMany({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } }),
//       Nature.deleteMany({ _id: { $in: courriers.map(c => c.id_nature._id) } })
//     ]);

//     console.log("Old data archived and collections cleared.");
//   } catch (error) {
//     console.error("Error archiving data:", error);
//   }
// }

// module.exports = { archiveOldData };



























































// const mongoose = require('mongoose');
// const Archive = require("../models/Archive");
// const Nature = require("../models/Nature");
// const Courrier = require("../models/Courrier");
// const dotenv = require("dotenv");
// dotenv.config();

// const CONNECTION = process.env.MONGODB_CONNECTION;

// async function archiveOldData() {
//   try {
//     // Récupérer les données de l'année précédente
//     const courriers = await Courrier.find({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } })
//       .populate("id_nature");
    
//     // Récupérer toutes les données de Nature qui ne sont pas liées à un courrier
//     const natures = await Nature.find({ _id: { $nin: courriers.map(c => c.id_nature._id) } });
    
//     // Transformer les données de Courrier pour les faire correspondre au schéma Archive
//     const formattedCourriers = courriers.map(courrier => ({
//       description: courrier.id_nature.description || 'N/A',
//       nom_depose: courrier.id_nature.nom_depose || 'N/A',
//       prenom_depose: courrier.id_nature.prenom_depose || 'N/A',
//       matricule: courrier.id_nature.matricule || 'N/A',
//       numero_bordereaux: courrier.numero_bordereaux || 'N/A',
//       date_depart: courrier.date_depart,
//       expiditeur: courrier.expiditeur || 'N/A',
//       destination: courrier.destination || 'N/A'
//     }));
  
//     console.log("Coucou", formattedCourriers);
    
//     // Transformer les données de Nature pour les faire correspondre au schéma Archive
//     const formattedNatures = natures.map(nature => ({
//       description: nature.description || 'N/A',
//       nom_depose: nature.nom_depose || 'N/A',
//       prenom_depose: nature.prenom_depose || 'N/A',
//       matricule: nature.matricule || 'N/A',
//     }));
    
//     // Insérer les données formatées dans la collection Archive
//     await Archive.insertMany(formattedCourriers.concat(formattedNatures));
    
//     // Supprimer les anciennes données
//     await Promise.all([
//       Courrier.deleteMany({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } }),
//       Nature.deleteMany({ _id: { $in: courriers.map(c => c.id_nature._id) } })
//     ]);

//     console.log("Old data archived and collections cleared.");
//   } catch (error) {
//     console.error("Error archiving data:", error);
//   }
// }

// // Fonction pour vérifier si l'année a changé et exécuter le processus d'archivage
// async function checkAndArchive() {
//   const currentYear = new Date().getFullYear();

//   // Vérifie si c'est le début de l'année
//   const isNewYear = new Date().getDate() === 1 && new Date().getMonth() === 0;

//   if (isNewYear) {
//     await archiveOldData();
//   }
// }

// // Exécute checkAndArchive chaque minute
// setInterval(checkAndArchive, 60 * 1000); // Exécute chaque minute

// module.exports = { archiveOldData, checkAndArchive };


























// const mongoose = require('mongoose');
// const Archive = require("../models/Archive");
// const Nature = require("../models/Nature");
// const Courrier = require("../models/Courrier");
// const dotenv = require("dotenv");
// dotenv.config();

// const CONNECTION = process.env.MONGODB_CONNECTION;

// async function archiveOldData() {
//   try {
//     // Récupérer les données de l'année précédente
//     const courriers = await Courrier.find({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } })
//       .populate("id_nature");
    
//     // Récupérer toutes les données de Nature qui ne sont pas liées à un courrier
//     const natures = await Nature.find({ _id: { $nin: courriers.map(c => c.id_nature._id) } });
    
//     // Transformer les données de Courrier pour les faire correspondre au schéma Archive
//     const formattedCourriers = courriers.map(courrier => ({
//       description: courrier.id_nature.description || 'N/A',
//       nom_depose: courrier.id_nature.nom_depose || 'N/A',
//       prenom_depose: courrier.id_nature.prenom_depose || 'N/A',
//       matricule: courrier.id_nature.matricule || 'N/A',
//       numero_bordereaux: courrier.numero_bordereaux || 'N/A',
//       date_depart: courrier.date_depart,
//       expiditeur: courrier.expiditeur || 'N/A',
//       destination: courrier.destination || 'N/A'
//     }));
  
//     console.log("Coucou", formattedCourriers);
    
//     // Transformer les données de Nature pour les faire correspondre au schéma Archive
//     const formattedNatures = natures.map(nature => ({
//       description: nature.description || 'N/A',
//       nom_depose: nature.nom_depose || 'N/A',
//       prenom_depose: nature.prenom_depose || 'N/A',
//       matricule: nature.matricule || 'N/A',
//     }));
    
//     // Insérer les données formatées dans la collection Archive
//     await Archive.insertMany(formattedCourriers.concat(formattedNatures));
    
//     // Supprimer les anciennes données
//     await Promise.all([
//       Courrier.deleteMany({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } }),
//       Nature.deleteMany({ _id: { $in: courriers.map(c => c.id_nature._id) } })
//     ]);

//     console.log("Old data archived and collections cleared.");
//   } catch (error) {
//     console.error("Error archiving data:", error);
//   }
// }

// // Fonction pour vérifier si l'année a changé et exécuter le processus d'archivage
// async function checkAndArchive() {
//   console.log("Checking for year change at", new Date().toLocaleString()); // Log de vérification
//   const currentYear = new Date().getFullYear();

//   // Vérifie si c'est le début de l'année
//   const isNewYear = new Date().getDate() === 1 && new Date().getMonth() === 0;

//   if (isNewYear) {
//     await archiveOldData();
//   }
// }

// // Exécute checkAndArchive chaque minute
// setInterval(checkAndArchive, 60 * 1000); // Exécute chaque minute

// module.exports = { archiveOldData, checkAndArchive };
























const mongoose = require('mongoose');
const Archive = require("../models/Archive");
const Nature = require("../models/Nature");
const Courrier = require("../models/Courrier");
const dotenv = require("dotenv");
dotenv.config();

const CONNECTION = process.env.MONGODB_CONNECTION;

async function archiveOldData() {
  try {
    // Récupérer les données de l'année précédente
    const courriers = await Courrier.find({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } })
      .populate("id_nature");
    
    // Récupérer toutes les données de Nature qui ne sont pas liées à un courrier
    const natures = await Nature.find({ _id: { $nin: courriers.map(c => c.id_nature._id) } });
    
    // Transformer les données de Courrier pour les faire correspondre au schéma Archive
    const formattedCourriers = courriers.map(courrier => ({
      description: courrier.id_nature.description || 'N/A',
      nom_depose: courrier.id_nature.nom_depose || 'N/A',
      prenom_depose: courrier.id_nature.prenom_depose || 'N/A',
      matricule: courrier.id_nature.matricule || 'N/A',
      numero_bordereaux: courrier.numero_bordereaux || 'N/A',
      date_depart: courrier.date_depart,
      expiditeur: courrier.expiditeur || 'N/A',
      destination: courrier.destination || 'N/A'
    }));
  
    console.log("Coucou", formattedCourriers);
    
    // Transformer les données de Nature pour les faire correspondre au schéma Archive
    const formattedNatures = natures.map(nature => ({
      description: nature.description || 'N/A',
      nom_depose: nature.nom_depose || 'N/A',
      prenom_depose: nature.prenom_depose || 'N/A',
      matricule: nature.matricule || 'N/A',
    }));
    
    // Insérer les données formatées dans la collection Archive
    await Archive.insertMany(formattedCourriers.concat(formattedNatures));
    
    // Supprimer les anciennes données
    await Promise.all([
      Courrier.deleteMany({ "date_depart": { $lt: new Date(new Date().getFullYear(), 0, 1) } }),
      Nature.deleteMany({ _id: { $in: courriers.map(c => c.id_nature._id) } })
    ]);

    console.log("Old data archived and collections cleared.");
  } catch (error) {
    console.error("Error archiving data:", error);
  }
}

// Fonction pour vérifier si l'année a changé et exécuter le processus d'archivage
async function checkAndArchive() {
  console.log("Checking for year change at", new Date().toLocaleString()); // Log de vérification
  const currentYear = new Date().getFullYear();

  // Vérifie si c'est le début de l'année
  const isNewYear = new Date().getDate() === 1 && new Date().getMonth() === 0;

  if (isNewYear) {
    await archiveOldData();
  }
}

// Exécute checkAndArchive chaque minute
setInterval(checkAndArchive, 60 * 1000); // Exécute chaque minute

module.exports = { archiveOldData, checkAndArchive };
