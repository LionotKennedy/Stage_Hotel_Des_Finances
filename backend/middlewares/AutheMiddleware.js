

// const jwt = require("jsonwebtoken");
// const Token = require("../models/Token");

// const verifyToken = async (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers["authorization"];

//   if (!token) {
//     return res.status(403).json({
//       success: false,
//       message: "A token is required for authentication",
//     });
//   }

//   try {
//     const bearer = token.split(" ");
//     const bearerToken = bearer[1];
//     const decodedData = jwt.verify(
//       bearerToken,
//       process.env.ACCESS_SECRET_TOKEN
//     );

//     // Check if the token exists in the database
//     const tokenData = await Token.findOne({ token: bearerToken });
//     if (!tokenData) {
//       return res.status(401).json({
//         success: false,
//         message: "Token not found",
//       });
//     }

//     req.user = decodedData; // Modifié pour utiliser `decodedData` directement
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid token",
//     });
//   }

//   return next();
// };

// module.exports = verifyToken;












// middlewares/verifyToken.js

const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

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

    // Vérifier si le token existe dans la base de données
    const tokenData = await Token.findOne({ token });
    if (!tokenData) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }

    // Ajouter les données décodées à la requête
    req.user = decodedData;

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
