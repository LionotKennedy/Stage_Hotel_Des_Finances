// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");

// // routes
// const authRoute = require("./routes/AutheRoute");
// const adminRoute = require("./routes/AdminRoute");
// const commonRoute = require("./routes/commonRoute");
// const folderRoute = require("./routes/FolderRoute");
// const archiveRoute = require("./routes/ArchiveRoute");
// const journalRoute = require("./routes/JournalRoute");
// const visaRoute = require("./routes/VisaRoute");

// const app = express();

// // middleware
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// // Servir des fichiers statiques (images) depuis le dossier "uploads"
// app.use('/uploads', express.static('uploads'));

// dotenv.config();
// const PORT = process.env.PORT;

// const CONNECTION = process.env.MONGODB_CONNECTION;

// const xy = mongoose.connect(CONNECTION);

// if (xy == null) {
//   console.log("Connexion failed, try again");
// } else {
//   console.log("Connexion is stable");
// }

// const journalCleanup = require("./modules/journalCleanup");
// const { archiveOldData } = require("./modules/automate");

// app.use("/api", authRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api", commonRoute);
// app.use("/api", folderRoute);
// app.use("/api", archiveRoute);
// app.use("/api", journalRoute);
// app.use("/api", visaRoute); 

// // Démarre le job de nettoyage des journaux
// journalCleanup.setupJournalCleanup();
// // archiveOldDatas.archiveOldData();
// archiveOldData();

// app.listen(PORT, () => {
//   console.log(`listening on port http://127.0.0.1:${PORT}`);
// });



















// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const mongoose = require("mongoose");

// // routes
// const authRoute = require("./routes/AutheRoute");
// const adminRoute = require("./routes/AdminRoute");
// const commonRoute = require("./routes/commonRoute");
// const folderRoute = require("./routes/FolderRoute");
// const archiveRoute = require("./routes/ArchiveRoute");
// const journalRoute = require("./routes/JournalRoute");
// const visaRoute = require("./routes/VisaRoute");

// const app = express();

// // middleware
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// // Servir des fichiers statiques (images) depuis le dossier "uploads"
// app.use('/uploads', express.static('uploads'));

// dotenv.config();
// const PORT = process.env.PORT;
// const CONNECTION = process.env.MONGODB_CONNECTION;

// let dbConnection;

// mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB connection established");
//     dbConnection = mongoose.connection;
    
//     journalCleanup.setupJournalCleanup(dbConnection);
//   })
//   .catch(err => {
//     console.error("Error connecting to MongoDB", err);
//   });

// const xy = dbConnection;

// if (xy == null) {
//   console.log("Connexion failed, try again");
// } else {
//   console.log("Connexion is stable");
// }

// const journalCleanup = require("./modules/journalCleanup");
// const { archiveOldData } = require("./modules/automate");

// app.use("/api", authRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api", commonRoute);
// app.use("/api", folderRoute);
// app.use("/api", archiveRoute);
// app.use("/api", journalRoute);
// app.use("/api", visaRoute);

// // Démarre le job de nettoyage des journaux
// journalCleanup.setupJournalCleanup(dbConnection);

// // archiveOldData();

// archiveOldData();

// app.listen(PORT, () => {
//   console.log(`listening on port http://127.0.0.1:${PORT}`);
// });












// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");

// // Routes
// const authRoute = require("./routes/AutheRoute");
// const adminRoute = require("./routes/AdminRoute");
// const commonRoute = require("./routes/commonRoute");
// const folderRoute = require("./routes/FolderRoute");
// const archiveRoute = require("./routes/ArchiveRoute");
// const journalRoute = require("./routes/JournalRoute");
// const visaRoute = require("./routes/VisaRoute");

// const app = express();

// // Middleware
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// // Servir des fichiers statiques (images) depuis le dossier "uploads"
// app.use('/uploads', express.static('uploads'));

// dotenv.config();
// const PORT = process.env.PORT;
// const CONNECTION = process.env.MONGODB_CONNECTION;

// mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connexion is stable");

//     // Démarrer les jobs une fois que la connexion est stable
//     const journalCleanup = require("./modules/journalCleanup");
//     const { archiveOldData } = require("./modules/automate");
    
//     journalCleanup.setupJournalCleanup();
//     archiveOldData();  // Pas de déconnexion ici !

//     app.listen(PORT, () => {
//       console.log(`Listening on port http://127.0.0.1:${PORT}`);
//     });
//   })
//   .catch((err) => console.log("Connexion failed, try again", err));

// // Routes
// app.use("/api", authRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api", commonRoute);
// app.use("/api", folderRoute);
// app.use("/api", archiveRoute);
// app.use("/api", journalRoute);
// app.use("/api", visaRoute);










const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Routes
const authRoute = require("./routes/AutheRoute");
const adminRoute = require("./routes/AdminRoute");
const commonRoute = require("./routes/commonRoute");
const folderRoute = require("./routes/FolderRoute");
const archiveRoute = require("./routes/ArchiveRoute");
const journalRoute = require("./routes/JournalRoute");
const visaRoute = require("./routes/VisaRoute");

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Servir des fichiers statiques (images) depuis le dossier "uploads"
app.use('/uploads', express.static('uploads'));

dotenv.config();
const PORT = process.env.PORT;
const CONNECTION = process.env.MONGODB_CONNECTION;

mongoose.connect(CONNECTION)
  .then(() => {
    console.log("Connexion is stable");

    // Démarrer les jobs une fois que la connexion est stable
    const journalCleanup = require("./modules/journalCleanup");
    const { archiveOldData } = require("./modules/automate");
    
    journalCleanup.setupJournalCleanup();
    archiveOldData();  // Pas de déconnexion ici !

    app.listen(PORT, () => {
      console.log(`Listening on port http://127.0.0.1:${PORT}`);
    });
  })
  .catch((err) => console.log("Connexion failed, try again", err));

// Routes
app.use("/api", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api", commonRoute);
app.use("/api", folderRoute);
app.use("/api", archiveRoute);
app.use("/api", journalRoute);
app.use("/api", visaRoute);
