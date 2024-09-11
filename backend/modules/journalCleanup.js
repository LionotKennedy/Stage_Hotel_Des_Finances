
const mongoose = require('mongoose');
const Journal = require('../models/Journal');

async function setupJournalCleanup() {
  const db = mongoose.connection;
  console.log("Bonjour...");
  db.on('open', async () => {
    console.log('MongoDB connection established');
    
    // Initialiser la variable lastInsertTime
    let lastInsertTime = new Date();
    let tst = new Date(lastInsertTime - 60 * 1000);
    
    // Fonction pour traiter les changements
    const handleChanges = async () => {

      console.log("Salut");

      try {
        const insertedDoc = await Journal.deleteOne({ createdAt: { $gt: tst } });
        // console.log(insertedDoc);
        console.log(`Deleted inserted document: ${insertedDoc.deletedCount}`);
      } catch (err) {
        console.error('Error handling changes:', err);
      }
    };

    // Exécuter la fonction toutes les minutes
    setInterval(handleChanges, 60 * 1000); // Exécute toutes les minutes
  });
  
  db.on('close', () => {
    console.log('Connection closed');
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
