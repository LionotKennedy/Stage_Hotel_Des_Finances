

const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "A token is required for authentication",
    });
  }

  try {
    const bearer = token.split(" ");
    const bearerToken = bearer[1];
    const decodedData = jwt.verify(
      bearerToken,
      process.env.ACCESS_SECRET_TOKEN
    );

    // Check if the token exists in the database
    const tokenData = await Token.findOne({ token: bearerToken });
    if (!tokenData) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }

    req.user = decodedData; // Modifié pour utiliser `decodedData` directement
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid token",
    });
  }

  return next();
};

module.exports = verifyToken;
