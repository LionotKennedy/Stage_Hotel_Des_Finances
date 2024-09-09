// const mongoose = require('mongoose');
// const Journal = require('../models/Journal');

// let lastInsertTime = null;

// function setupJournalCleanup() {
//   const db = mongoose.connection;
  
//   db.on('open', () => {
//     console.log('MongoDB connection established');
    
//     // Initialisation de la variable lastInsertTime
//     lastInsertTime = new Date();
    
//     // Définir une fonction de callback pour la prochaine itération
//     const nextIteration = async () => {
//       const currentTime = new Date();
      
//       // Si plus d'une minute s'est écoulée depuis la dernière insertion
//       if ((currentTime - lastInsertTime) > 60000) {
//         // Nettoyer les documents anciens
//         try {
//           const deletedCount = await Journal.deleteMany({});
//           console.log(`Deleted ${deletedCount.deletedCount} old documents`);
//         } catch (err) {
//           console.error('Error deleting old documents:', err);
//         }
        
//         // Réinitialiser lastInsertTime
//         lastInsertTime = currentTime;
//       } else {
//         // Sinon, attendre pendant 5 secondes avant la prochaine vérification
//         setTimeout(nextIteration, 5000);
//       }
//     };
    
//     // Commencer la première itération
//     nextIteration();
//   });

//   db.on('close', () => {
//     console.log('MongoDB connection closed');
//   });
// }

// module.exports = { setupJournalCleanup };






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