const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
      const token = req.header("Authorization").replace("Bearer ", "");
      console.log("Token reçu :", token);
      
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
      console.log("Données décodées du token :", decoded);
      
    //   const user = await User.findById(decoded._id);
      const user = await User.findById(decoded.userId);
      if (!user) {
          console.log("Utilisateur non trouvé avec cet ID :", decoded.userId);
          return res.status(401).json({ message: "User not found" });
        }
        
        req.user = user;
      next();
    } catch (error) {
        console.error("Erreur dans le middleware d'authentification :", error);
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authMiddleware;