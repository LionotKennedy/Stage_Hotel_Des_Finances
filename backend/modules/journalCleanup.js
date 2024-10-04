
// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Bonjour...");
//   db.on('open', async () => {
//     console.log('MongoDB connection established');
    
//     // Initialiser la variable lastInsertTime
//     let lastInsertTime = new Date();
//     let tst = new Date(lastInsertTime - 60 * 1000);
    
//     // Fonction pour traiter les changements
//     const handleChanges = async () => {

//       console.log("Salut");

//       try {
//         const insertedDoc = await Journal.deleteOne({ createdAt: { $gt: tst } });
//         // console.log(insertedDoc);
//         console.log(`Deleted inserted document: ${insertedDoc.deletedCount}`);
//       } catch (err) {
//         console.error('Error handling changes:', err);
//       }
//     };

//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//     // setInterval(handleChanges, 60 * 80000); // Exécute toutes les minutes
//   });
  
//   db.on('close', () => {
//     console.log('Connection closed');
//   });
// }

// module.exports = { setupJournalCleanup };



















// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Bonjour...");
//   db.on('open', async () => {
//     console.log('MongoDB connection established');
    
//     // Initialiser la variable lastInsertTime
//     let lastUpdateTime = new Date();
    
//     // Fonction pour traiter les changements
//     const handleChanges = async () => {
//       console.log("Salut");

//       try {
//         const oneDayAgo = new Date(lastUpdateTime.setDate(lastUpdateTime.getDate() - 1));
//         const deletedCount = await Journal.deleteMany({ createdAt: { $lt: oneDayAgo } });
//         console.log(`Deleted ${deletedCount.deletedCount} documents older than one day`);
//       } catch (err) {
//         console.error('Error handling changes:', err);
//       }
//     };

//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });
  
//   db.on('close', () => {
//     console.log('Connection closed');
//   });
// }

// module.exports = { setupJournalCleanup };















// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Bonjour...");
  
//   db.on('open', async () => {
//     console.log('MongoDB connection established');
    
//     // Fonction pour traiter les changements
//     const handleChanges = async () => {
//       console.log("Vérification des journaux..."); // Message de vérification

//       try {
//         const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 heures en millisecondes

//         // Récupérer les journaux dont la date est plus ancienne que 24 heures
//         const deletedDocs = await Journal.deleteMany({ date: { $lt: oneDayAgo } });

//         // Message affichant le nombre de documents supprimés
//         if (deletedDocs.deletedCount > 0) {
//           console.log(`Suppression effectuée : ${deletedDocs.deletedCount} journaux supprimés.`);
//         } else {
//           console.log("Aucun journal à supprimer.");
//         }
//       } catch (err) {
//         console.error('Erreur lors du traitement des changements :', err);
//       }
//     };

//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });
  
//   db.on('close', () => {
//     console.log('Connection closed');
//   });
// }

// module.exports = { setupJournalCleanup };








// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");
//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     // Initialiser la variable lastInsertTime
//     let lastUpdateTime = new Date();
    
//     // Fonction pour traiter les changements
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         const oneDayAgo = new Date(lastUpdateTime.setDate(lastUpdateTime.getDate() - 1));
//         console.log(oneDayAgo);
        
//         const deletedCount = await Journal.deleteMany({ createdAt: { $lt: oneDayAgo } });
//         console.log(deletedCount);
        
//         console.log(`Vérification terminée. Supprimés ${deletedCount.deletedCount} journaux plus anciens que 1 jour.`);
        
//         if (deletedCount.deletedCount > 0) {
//           console.log('Journaux supprimés avec succès.');
//         } else {
//           console.log('Aucun journal n\'a été supprimé.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la vérification des changements:', err);
//       }
//     };

//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
    
//     // Initialiser le premier cycle
//     handleChanges();
//   });
  
//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };
















// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");
//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     // Exécuter la fonction toutes les minutes
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // Date actuelle moins 1 jour
//         const twoMonthsAgo = new Date(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000); // Date actuelle moins 2 mois
//         const threeMonthsAgo = new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000); // Date actuelle moins 3 mois
//         // console.log(oneDayAgo);
//         // console.log(twoMonthsAgo);
//         // console.log(threeMonthsAgo);

//                 // Affichage des dates formatées (facultatif)
//                 console.log("Un jour avant :", oneDayAgo.toISOString());
//                 console.log("Deux mois avant :", twoMonthsAgo.toISOString());
//                 console.log("Trois mois avant :", threeMonthsAgo.toISOString());
        
//         const deletedCount = await Journal.deleteMany({ createdAt: { $lt: oneDayAgo } });
//         console.log(`Vérification terminée. Supprimés ${deletedCount.deletedCount} journaux plus anciens que 1 jour.`);
        
//         if (deletedCount.deletedCount > 0) {
//           console.log('Journaux supprimés avec succès.');
//         } else {
//           console.log('Aucun journal n\'a été supprimé.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la vérification des changements:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });
  
//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };
















// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // Date actuelle moins 1 jour
//         const twoMonthsAgo = new Date(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000); // Date actuelle moins 2 mois
//         const threeMonthsAgo = new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000); // Date actuelle moins 3 mois

//         // Affichage des dates au format "dd/MM/yyyy"
//         console.log("Un jour avant :", formatDate(oneDayAgo));
//         console.log("Deux mois avant :", formatDate(twoMonthsAgo));
//         console.log("Trois mois avant :", formatDate(threeMonthsAgo));
        
//         // Suppression des journaux plus anciens que 1 jour
//         const deletedCount = await Journal.deleteMany({ createdAt: { $lt: oneDayAgo } });
//         console.log(`Vérification terminée. Supprimés ${deletedCount.deletedCount} journaux plus anciens que 1 jour.`);
        
//         if (deletedCount.deletedCount > 0) {
//           console.log('Journaux supprimés avec succès.');
//         } else {
//           console.log('Aucun journal n\'a été supprimé.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la vérification des changements:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };























// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // Date actuelle moins 1 jour
        
//         // Récupérer tous les journaux créés avant oneDayAgo
//         const journalsToDelete = await Journal.find({ createdAt: { $lt: oneDayAgo } });

//         if (journalsToDelete.length > 0) {
//           console.log(`Journaux à supprimer (${journalsToDelete.length}) :`);
          
//           // Afficher toutes les dates de ces journaux
//           journalsToDelete.forEach(journal => {
//             console.log(`Journal ID: ${journal._id}, Date: ${formatDate(journal.createdAt)}`);
//           });

//           // Suppression des journaux plus anciens que 1 jour
//           const deletedCount = await Journal.deleteMany({ createdAt: { $lt: oneDayAgo } });
//           console.log(`Vérification terminée. Supprimés ${deletedCount.deletedCount} journaux plus anciens que 1 jour.`);
          
//           if (deletedCount.deletedCount > 0) {
//             console.log('Journaux supprimés avec succès.');
//           }
//         } else {
//           console.log('Aucun journal à supprimer.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la vérification des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };











// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);
          
//           // Afficher toutes les dates de création des journaux
//           allJournals.forEach(journal => {
//             console.log(`Journal ID: ${journal._id}, Date de création: ${formatDate(journal.createdAt)}`);
//           });
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la récupération des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };











// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);
          
//           // Créer un tableau pour stocker les dates des journaux
//           const journalDates = allJournals.map(journal => {
//             return {
//               id: journal._id,
//               date: formatDate(journal.createdAt)
//             };
//           });
          
//           // Afficher toutes les dates stockées
//           journalDates.forEach(journal => {
//             console.log(`Journal ID: ${journal.id}, Date de création: ${journal.date}`);
//           });
          
//           // Tu peux maintenant utiliser `journalDates` pour d'autres opérations si nécessaire
//           console.log("Dates des journaux récupérées :", journalDates);
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la récupération des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };




























// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer la date actuelle et la stocker dans une variable
//         const now = new Date();
//         const formattedNow = formatDate(now); // Formater la date actuelle
//         console.log(`Date actuelle: ${formattedNow}`); // Afficher la date actuelle
        
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);
          
//           // Créer un tableau pour stocker les dates des journaux
//           const journalDates = allJournals.map(journal => {
//             return {
//               id: journal._id,
//               date: formatDate(journal.createdAt)
//             };
//           });
          
//           // Afficher toutes les dates stockées
//           journalDates.forEach(journal => {
//             console.log(`Journal ID: ${journal.id}, Date de création: ${journal.date}`);
//           });
          
//           // Tu peux maintenant utiliser `journalDates` pour d'autres opérations si nécessaire
//           console.log("Dates des journaux récupérées :", journalDates);
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la récupération des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };














// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer la date actuelle et la stocker dans une variable
//         const now = new Date();
//         const formattedNow = formatDate(now);
//         console.log(`Date actuelle: ${formattedNow}`);
        
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);
          
//           // Créer un tableau pour stocker les dates des journaux
//           const journalDates = allJournals.map(journal => {
//             return {
//               id: journal._id,
//               date: formatDate(journal.createdAt),
//               differenceDays: calculateDifferenceDays(journal.createdAt, now)
//             };
//           });
          
//           // Afficher toutes les dates avec le décalage en jours
//           journalDates.forEach(journal => {
//             console.log(`Journal ID: ${journal.id}, Date de création: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//           });
          
//           // Filtrer les journaux dont le décalage est d'au moins 1 jour
//           const outdatedJournals = journalDates.filter(journal => journal.differenceDays >= 1);
          
//           if (outdatedJournals.length > 0) {
//             console.log('\nJournaux obsolètes (décalage d\'au moins 1 jour):');
//             outdatedJournals.forEach(journal => {
//               console.log(`ID: ${journal.id}, Date: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//             });
//           } else {
//             console.log('Aucun journal obsolète trouvé.');
//           }
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la récupération des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// // Fonction pour calculer la différence en jours entre deux dates
// function calculateDifferenceDays(date1, date2) {
//   const diffTime = Math.abs(date2.getTime() - date1.getTime());
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// }

// module.exports = { setupJournalCleanup };














// // const mongoose = require('mongoose');
// // const Journal = require('../models/Journal');

// // async function setupJournalCleanup() {
// //   const db = mongoose.connection;
  
// //   db.on('open', async () => {
// //     console.log('MongoDB connection established');
    
// //     // Initialiser la variable lastInsertTime
// //     let lastInsertTime = new Date();
// //     let tst = new Date(Date.now() - 60 * 1000);
    
// //     // Fonction pour traiter les changements
// //     const handleChanges = async () => {
// //       try {
// //         const insertedDoc = await Journal.findOne({ createdAt: { $gt: tst } });
// //         if (insertedDoc) {
// //           await Journal.deleteOne({ _id: insertedDoc._id });
// //           console.log(`Deleted inserted document: ${insertedDoc._id}`);
          
// //           // Mettre à jour lastInsertTime
// //           tst = new Date(insertedDoc.createdAt);
// //         }
// //       } catch (err) {
// //         console.error('Error handling changes:', err);
// //       }
// //     };

// //     // Exécuter la fonction toutes les 5 secondes
// //     // setInterval(handleChanges, 5000);
// //     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
// //   });

// //   db.on('close', () => {
// //     console.log('Connection closed');
// //   });
// // }

// // module.exports = { setupJournalCleanup };


















// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// // Fonction pour calculer la différence en jours entre deux dates
// function calculateDifferenceDays(date1, date2) {
//   const diffTime = Math.abs(date2.getTime() - date1.getTime());
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// }

// // Fonction pour supprimer les journaux obsolètes
// async function deleteOutdatedJournals(outdatedJournals) {
//   try {
//     // Récupérer les IDs des journaux obsolètes
//     const outdatedIds = outdatedJournals.map(journal => journal.id);
    
//     // Supprimer les journaux de la base de données
//     const result = await Journal.deleteMany({ _id: { $in: outdatedIds } });
//     console.log(`Supprimé ${result.deletedCount} journaux obsolètes.`);
//   } catch (err) {
//     console.error('Erreur lors de la suppression des journaux obsolètes:', err);
//   }
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer la date actuelle et la stocker dans une variable
//         const now = new Date();
//         const formattedNow = formatDate(now);
//         console.log(`Date actuelle: ${formattedNow}`);
        
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);
          
//           // Créer un tableau pour stocker les dates des journaux
//           const journalDates = allJournals.map(journal => {
//             return {
//               id: journal._id,
//               date: formatDate(journal.createdAt),
//               differenceDays: calculateDifferenceDays(journal.createdAt, now)
//             };
//           });
          
//           // Afficher toutes les dates avec le décalage en jours
//           journalDates.forEach(journal => {
//             console.log(`Journal ID: ${journal.id}, Date de création: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//           });
          
//           // Filtrer les journaux dont le décalage est d'au moins 1 jour
//           const outdatedJournals = journalDates.filter(journal => journal.differenceDays >= 1);
          
//           if (outdatedJournals.length > 0) {
//             console.log('\nJournaux obsolètes (décalage d\'au moins 1 jour):');
//             outdatedJournals.forEach(journal => {
//               console.log(`ID: ${journal.id}, Date: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//             });
            
//             // Supprimer les journaux obsolètes
//             await deleteOutdatedJournals(outdatedJournals);
//           } else {
//             console.log('Aucun journal obsolète trouvé.');
//           }
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la récupération des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };




















































// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// // Fonction pour calculer la différence en jours entre deux dates
// function calculateDifferenceDays(date1, date2) {
//   const diffTime = Math.abs(date2.getTime() - date1.getTime());
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// }

// // Fonction pour supprimer les journaux obsolètes
// async function deleteOutdatedJournals(outdatedJournals) {
//   try {
//     // Récupérer les IDs des journaux obsolètes
//     const outdatedIds = outdatedJournals.map(journal => journal.id);
    
//     // Supprimer les journaux de la base de données
//     const result = await Journal.deleteMany({ _id: { $in: outdatedIds } });
//     console.log(`Supprimé ${result.deletedCount} journaux obsolètes.`);
//   } catch (err) {
//     console.error('Erreur lors de la suppression des journaux obsolètes:', err);
//   }
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer la date actuelle
//         const now = new Date();

//         console.log(`Date actuelle: ${formatDate(now)}`);
        
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);

//           // Filtrer les journaux qui ont une date strictement inférieure à la date actuelle
//           const outdatedJournals = allJournals.filter(journal => {
//             const journalDate = journal.createdAt;
//             return calculateDifferenceDays(journalDate, now) >= 1; // Au moins 1 jour passé
//           });
          
//           if (outdatedJournals.length > 0) {
//             console.log('\nJournaux obsolètes (décalage d\'au moins 1 jour):');
//             outdatedJournals.forEach(journal => {
//               console.log(`ID: ${journal._id}, Date de création: ${formatDate(journal.createdAt)}`);
//             });
            
//             // Supprimer les journaux obsolètes
//             await deleteOutdatedJournals(outdatedJournals);
//           } else {
//             console.log('Aucun journal obsolète trouvé.');
//           }
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la récupération des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };









































// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// // Fonction pour calculer la différence en jours entre deux dates
// function calculateDifferenceDays(date1, date2) {
//   const diffTime = Math.abs(date2.getTime() - date1.getTime());
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer la date actuelle et la stocker dans une variable
//         const now = new Date();
//         const formattedNow = formatDate(now);
//         console.log(`Date actuelle: ${formattedNow}`);
        
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);
          
//           // Créer un tableau pour stocker les dates des journaux
//           const journalDates = allJournals.map(journal => {
//             return {
//               id: journal._id,
//               date: formatDate(journal.createdAt),
//               differenceDays: calculateDifferenceDays(journal.createdAt, now)
//             };
//           });
          
//           // Afficher toutes les dates avec le décalage en jours
//           journalDates.forEach(journal => {
//             console.log(`Journal ID: ${journal.id}, Date de création: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//           });
          
//           // Supprimer uniquement les journaux dont la différence est supérieure à zéro
//           const outdatedJournals = journalDates.filter(journal => journal.differenceDays > 0);
          
//           if (outdatedJournals.length > 0) {
//             console.log('\nJournaux obsolètes (différence supérieure à 0):');
//             outdatedJournals.forEach(journal => {
//               console.log(`ID: ${journal.id}, Date: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//             });
            
//             // Supprimer les journaux obsolètes
//             await Journal.deleteMany({ _id: { $in: outdatedJournals.map(j => j.id) } });
//             console.log(`Supprimés ${outdatedJournals.length} journaux obsolètes.`);
//           } else {
//             console.log('Aucun journal obsolète trouvé.');
//           }
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la vérification des journaux:', err);
//       }
//     };

//     // Initialiser le premier cycle
//     handleChanges();
    
//     // Exécuter la fonction toutes les minutes
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };




















































const mongoose = require('mongoose');
const Journal = require('../models/Journal');

// Fonction pour formater la date au format "dd/MM/yyyy"
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}

// Fonction pour réinitialiser les heures à minuit
function resetTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Fonction pour calculer la différence en jours entre deux dates
function calculateDifferenceDays(date1, date2) {
  const date1Midnight = resetTime(date1);
  const date2Midnight = resetTime(date2);
  
  const diffTime = date2Midnight - date1Midnight;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

async function setupJournalCleanup() {
  const db = mongoose.connection;
  console.log("Début de la connexion MongoDB...");

  db.on('open', async () => {
    console.log('Connexion MongoDB établie');
    
    const handleChanges = async () => {
      console.log("Commencement de la vérification des journaux...");
      
      try {
        // Récupérer la date actuelle
        const now = new Date();
        const formattedNow = formatDate(now);
        console.log(`Date actuelle: ${formattedNow}`);
        
        // Récupérer tous les journaux dans la collection Journal
        const allJournals = await Journal.find();
        
        if (allJournals.length > 0) {
          console.log(`Journaux trouvés (${allJournals.length}) :`);
          
          const journalDates = allJournals.map(journal => {
            return {
              id: journal._id,
              date: formatDate(journal.createdAt),
              differenceDays: calculateDifferenceDays(journal.createdAt, now)
            };
          });
          
          journalDates.forEach(journal => {
            console.log(`Journal ID: ${journal.id}, Date de création: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
          });
          
          // Supprimer uniquement les journaux dont la différence est d'au moins 1 jour
          const outdatedJournals = journalDates.filter(journal => journal.differenceDays >= 1);
          
          if (outdatedJournals.length > 0) {
            console.log('\nJournaux obsolètes (décalage d\'au moins 1 jour):');
            outdatedJournals.forEach(journal => {
              console.log(`ID: ${journal.id}, Date: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
            });
            
            await Journal.deleteMany({ _id: { $in: outdatedJournals.map(j => j.id) } });
            console.log(`Supprimé ${outdatedJournals.length} journaux obsolètes.`);
          } else {
            console.log('Aucun journal obsolète trouvé.');
          }
        } else {
          console.log('Aucun journal trouvé dans la base de données.');
        }
      } catch (err) {
        console.error('Erreur lors de la vérification des journaux:', err);
      }
    };

    handleChanges();
    setInterval(handleChanges, 60 * 1000); 
  });

  db.on('close', () => {
    console.log('Connexion MongoDB fermée');
  });
}

module.exports = { setupJournalCleanup };







































// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// // Fonction pour formater la date au format "dd/MM/yyyy"
// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
  
//   return `${day}/${month}/${year}`;
// }

// // Fonction pour réinitialiser les heures à minuit
// function resetTime(date) {
//   return new Date(date.getFullYear(), date.getMonth(), date.getDate());
// }

// // Fonction pour calculer la différence en jours entre deux dates
// function calculateDifferenceDays(date1, date2) {
//   const date1Midnight = resetTime(date1);
//   const date2Midnight = resetTime(date2);
  
//   const diffTime = date2Midnight - date1Midnight;
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// }

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
//   console.log("Début de la connexion MongoDB...");

//   db.on('open', async () => {
//     console.log('Connexion MongoDB établie');
    
//     const handleChanges = async () => {
//       console.log("Commencement de la vérification des journaux...");
      
//       try {
//         // Récupérer la date actuelle
//         const now = new Date();
//         const formattedNow = formatDate(now);
//         console.log(`Date actuelle: ${formattedNow}`);
        
//         // Récupérer tous les journaux dans la collection Journal
//         const allJournals = await Journal.find();
        
//         if (allJournals.length > 0) {
//           console.log(`Journaux trouvés (${allJournals.length}) :`);
          
//           const journalDates = allJournals.map(journal => {
//             return {
//               id: journal._id,
//               date: formatDate(journal.createdAt),
//               differenceDays: calculateDifferenceDays(journal.createdAt, now)
//             };
//           });
          
//           journalDates.forEach(journal => {
//             console.log(`Journal ID: ${journal.id}, Date de création: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//           });
          
//           // Supprimer uniquement les journaux dont la différence est d'au moins 90 jours (3 mois)
//           const outdatedJournals = journalDates.filter(journal => journal.differenceDays >= 90);
//           // const outdatedJournals = journalDates.filter(journal => journal.differenceDays >= 60);
          
//           if (outdatedJournals.length > 0) {
//             console.log('\nJournaux obsolètes (décalage d\'au moins 90 jours):');
//             outdatedJournals.forEach(journal => {
//               console.log(`ID: ${journal.id}, Date: ${journal.date}, Décalage: ${journal.differenceDays} jours`);
//             });
            
//             await Journal.deleteMany({ _id: { $in: outdatedJournals.map(j => j.id) } });
//             console.log(`Supprimé ${outdatedJournals.length} journaux obsolètes.`);
//           } else {
//             console.log('Aucun journal obsolète trouvé.');
//           }
//         } else {
//           console.log('Aucun journal trouvé dans la base de données.');
//         }
//       } catch (err) {
//         console.error('Erreur lors de la vérification des journaux:', err);
//       }
//     };

//     handleChanges();
//     setInterval(handleChanges, 60 * 1000); 
//   });

//   db.on('close', () => {
//     console.log('Connexion MongoDB fermée');
//   });
// }

// module.exports = { setupJournalCleanup };
