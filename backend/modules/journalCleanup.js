
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
















const mongoose = require('mongoose');
const Journal = require('../models/Journal');

async function setupJournalCleanup() {
  const db = mongoose.connection;
  console.log("Début de la connexion MongoDB...");
  db.on('open', async () => {
    console.log('Connexion MongoDB établie');
    
    // Exécuter la fonction toutes les minutes
    const handleChanges = async () => {
      console.log("Commencement de la vérification des journaux...");
      
      try {
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // Date actuelle moins 1 jour
        const twoMonthsAgo = new Date(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000); // Date actuelle moins 2 mois
        const threeMonthsAgo = new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000); // Date actuelle moins 3 mois
        console.log(oneDayAgo);
        console.log(twoMonthsAgo);
        console.log(threeMonthsAgo);
        
        const deletedCount = await Journal.deleteMany({ createdAt: { $lt: oneDayAgo } });
        console.log(`Vérification terminée. Supprimés ${deletedCount.deletedCount} journaux plus anciens que 1 jour.`);
        
        if (deletedCount.deletedCount > 0) {
          console.log('Journaux supprimés avec succès.');
        } else {
          console.log('Aucun journal n\'a été supprimé.');
        }
      } catch (err) {
        console.error('Erreur lors de la vérification des changements:', err);
      }
    };

    // Initialiser le premier cycle
    handleChanges();
    
    // Exécuter la fonction toutes les minutes
    setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
  });
  
  db.on('close', () => {
    console.log('Connexion MongoDB fermée');
  });
}

module.exports = { setupJournalCleanup };




























// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// async function setupJournalCleanup() {
//   const db = mongoose.connection;
  
//   db.on('open', async () => {
//     console.log('MongoDB connection established');
    
//     // Initialiser la variable lastInsertTime
//     let lastInsertTime = new Date();
//     let tst = new Date(Date.now() - 60 * 1000);
    
//     // Fonction pour traiter les changements
//     const handleChanges = async () => {
//       try {
//         const insertedDoc = await Journal.findOne({ createdAt: { $gt: tst } });
//         if (insertedDoc) {
//           await Journal.deleteOne({ _id: insertedDoc._id });
//           console.log(`Deleted inserted document: ${insertedDoc._id}`);
          
//           // Mettre à jour lastInsertTime
//           tst = new Date(insertedDoc.createdAt);
//         }
//       } catch (err) {
//         console.error('Error handling changes:', err);
//       }
//     };

//     // Exécuter la fonction toutes les 5 secondes
//     // setInterval(handleChanges, 5000);
//     setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
//   });

//   db.on('close', () => {
//     console.log('Connection closed');
//   });
// }

// module.exports = { setupJournalCleanup };
