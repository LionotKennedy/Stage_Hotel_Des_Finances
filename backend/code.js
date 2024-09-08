Pour s'assurer que seules les requêtes contenant un token valide peuvent accéder à certaines routes, vous devez utiliser un middleware d'authentification dans votre routeur. Vous avez déjà une bonne base avec votre middleware `verifyToken`. Voici comment vous pouvez l'intégrer correctement et le faire fonctionner pour sécuriser vos routes.

### Étapes à Suivre

1. **Assurez-vous que le Middleware `verifyToken` est Correctement Configuré**

Voici la version mise à jour de votre middleware `verifyToken`. Assurez-vous que le token est correctement extrait de l'en-tête `Authorization`, puis vérifié et validé.

```javascript
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
```

2. **Utilisez le Middleware dans vos Routes**

Dans votre fichier de routes, vous pouvez utiliser le middleware `verifyToken` pour protéger les routes qui nécessitent une authentification.

Voici un exemple de votre routeur mis à jour :

```javascript
// routes/archiveRoutes.js
const express = require("express");
const router = express.Router();

const { addFolderValidator, updateFolderValidator } = require("../helpers/ValidatorFolder");
const { addArchiveValidator } = require("../helpers/ValidatorArchive");
const verifyToken = require("../middlewares/verifyToken");

const { addArchive, getArchive, editArchiveById, updateArchiveById, deleteArchiveById } = require("../controllers/ArchiveController");

// Route protégée nécessitant une authentification
router.post("/add_archive", verifyToken, addFolderValidator, addArchive);

// Route non protégée (si nécessaire)
router.get("/get_archive", getArchive);

// Route protégée nécessitant une authentification
router.get("/edit_archive/:id", verifyToken, addArchiveValidator, editArchiveById);

// Route protégée nécessitant une authentification
router.put("/update_archive/:id", verifyToken, updateFolderValidator, updateArchiveById);

// Route protégée nécessitant une authentification
router.delete("/delete_archive/:id", verifyToken, updateFolderValidator, deleteArchiveById);

module.exports = router;
```

### Explication

1. **Middleware `verifyToken`** : Ce middleware extrait le token de l'en-tête `Authorization`, le vérifie, et vérifie également s'il est présent dans la base de données. Si le token est valide, les données décodées sont attachées à `req.user`, et la requête passe au prochain middleware ou route.

2. **Utilisation dans les Routes** : En ajoutant `verifyToken` comme middleware avant les gestionnaires de routes (`addArchive`, `editArchiveById`, etc.), vous assurez que ces routes sont protégées et nécessitent une authentification. Seules les requêtes contenant un token valide peuvent accéder à ces routes.

En suivant ces étapes, vous vous assurez que les actions sensibles de votre application sont sécurisées et que seules les personnes authentifiées peuvent y accéder.