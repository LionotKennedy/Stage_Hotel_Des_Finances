// middlewares/verifyToken.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Token = require("../models/Token");
const User = require("../models/User"); // Importer le modèle User
dotenv.config();

const verifyToken = async (req, res, next) => {
  // Extraire le token de l'en-tête Authorization
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({
      success: false,
      message: "A token is required for authentication",
    });
  }

  // Le format attendu de l'en-tête est "Bearer <token>"
  const token = authHeader.split(" ")[1];


  try {
    // Vérifier le token
    const decodedData = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
    // Récupérer les informations de l'utilisateur à partir de la base de données
    // Vérifier le token
    console.log("decodedData:", decodedData); // Pour vérifier le contenu de decodedData

    // Récupérer les informations de l'utilisateur à partir de la base de données
    const user = await User.findById(decodedData.userId);
    console.log("user:", user); // Pour vérifier si l'utilisateur a été trouvé

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Ajouter les informations de l'utilisateur à la requête
    req.user = user;

    // Vérifier si le token existe dans la base de données
    const tokenData = await Token.findOne({ token });
    if (!tokenData) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }

    // Ajouter les données décodées à la requête
    // req.user = decodedData;

    // Passer au prochain middleware ou à la route
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;
