




// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cron = require("node-cron");

// // models
// const Journal = require("./models/Journal"); // Assure-toi d'avoir le bon chemin pour le modèle Journal

// // routes
// const authRoute = require("./routes/AutheRoute");
// const adminRoute = require("./routes/AdminRoute");
// const commonRoute = require("./routes/commonRoute");
// const folderRoute = require("./routes/FolderRoute");

// const app = express();

// // middleware
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// dotenv.config();
// const PORT = process.env.PORT;

// const CONNECTION = process.env.MONGODB_CONNECTION;

// mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connexion is stable"))
//   .catch((err) => console.log("Connexion failed, try again", err));

// // routes
// app.use("/api", authRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api", commonRoute);
// app.use("/api", folderRoute);

// // Fonction pour supprimer les journaux obsolètes
// const deleteOldJournals = async () => {
//   const now = new Date();
  
//   // Supprimer les journaux plus vieux que 3 mois
//   const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
  
//   try {
//     const result = await Journal.deleteMany({ createdAt: { $lt: threeMonthsAgo } });
//     console.log(`${result.deletedCount} old journal(s) deleted.`);
//   } catch (error) {
//     console.error("Error deleting old journals:", error);
//   }
// };

// // Planification de la tâche : exécution tous les jours à minuit
// cron.schedule("0 0 * * *", () => {
//   console.log("Running the scheduled task to delete old journals...");
//   deleteOldJournals();
// });

// // Lancer le serveur
// app.listen(PORT, () => {
//   console.log(`listening on port http://127.0.0.1:${PORT}`);
// });




// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cron = require("node-cron");

// // models
// const Journal = require("./models/Journal"); // Assure-toi d'avoir le bon chemin pour le modèle Journal

// // routes
// const authRoute = require("./routes/AutheRoute");
// const adminRoute = require("./routes/AdminRoute");
// const commonRoute = require("./routes/commonRoute");
// const folderRoute = require("./routes/FolderRoute");

// const app = express();

// // middleware
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// dotenv.config();
// const PORT = process.env.PORT;


// const CONNECTION = process.env.MONGODB_CONNECTION;

// const xy = mongoose.connect(CONNECTION);

// if (xy == null) {
//   console.log("Connexion failed, try again");
// } else {
//   console.log("Connexion is stable");
// }
// // routes
// app.use("/api", authRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api", commonRoute);
// app.use("/api", folderRoute);

// // Function to delete old journals (modified for 1 minute test)
// const deleteOldJournals = async () => {
//   const now = new Date();

//   // Delete journals older than 1 minute
//   const oneMinuteAgo = new Date(now.setMinutes(now.getMinutes() - 1));

//   try {
//     const result = await Journal.deleteMany({ createdAt: { $lt: oneMinuteAgo } });
//     console.log(`${result.deletedCount} old journal(s) deleted.`);
//   } catch (error) {
//     console.error("Error deleting old journals:", error);
//   }
// };

// // Schedule the task to run every minute (adjusted for testing)
// cron.schedule("0 * * * *", () => {
//   console.log("Running the scheduled task to delete old journals...");
//   deleteOldJournals();
// });

// // Lancer le serveur
// app.listen(PORT, () => {
//   console.log(`listening on port http://127.0.0.1:${PORT}`);
// });
















const mongoose = require('mongoose');
const Journal = require('../models/Journal');

async function setupJournalCleanup() {
  const db = mongoose.connection;
  
  db.on('open', async () => {
    console.log('MongoDB connection established');
    
    // Initialiser la variable lastUpdateTime
    let lastUpdateTime = new Date();

    // Fonction pour traiter les changements
    const handleChanges = async () => {
      try {
        const twoMonthsAgo = new Date(Date.now() - 2 * 30 * 24 * 60 * 1000); // Calcul de la date 2 mois avant
        
        const insertedDocs = await Journal.find({ createdAt: { $gt: lastUpdateTime, $lt: twoMonthsAgo } });
        
        if (insertedDocs.length > 0) {
          await Journal.deleteMany({ _id: { $in: insertedDocs.map(doc => doc._id) } });
          console.log(`Deleted ${insertedDocs.length} inserted documents older than 2 months`);
          
          // Mettre à jour lastUpdateTime
          lastUpdateTime = twoMonthsAgo;
        }
      } catch (err) {
        console.error('Error handling changes:', err);
      }
    };

    // Exécuter la fonction tous les jours
    setInterval(handleChanges, 24 * 60 * 60 * 1000); // Exécute tous les jours
  });

  db.on('close', () => {
    console.log('Connection closed');
  });
}

module.exports = { setupJournalCleanup };
