const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// routes
const authRoute = require("./routes/AutheRoute");
const adminRoute = require("./routes/AdminRoute");
const commonRoute = require("./routes/commonRoute");
const folderRoute = require("./routes/FolderRoute");
const archiveRoute = require("./routes/ArchiveRoute");

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();
const PORT = process.env.PORT;

const CONNECTION = process.env.MONGODB_CONNECTION;

const xy = mongoose.connect(CONNECTION);

if (xy == null) {
  console.log("Connexion failed, try again");
} else {
  console.log("Connexion is stable");
}

const journalCleanup = require('./modules/journalCleanup');

app.use("/api", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api", commonRoute);
app.use("/api", folderRoute);
app.use("/api", archiveRoute);


// Démarre le job de nettoyage des journaux
journalCleanup.setupJournalCleanup();

app.listen(PORT, () => {
  console.log(`listening on port http://127.0.0.1:${PORT}`);
});

