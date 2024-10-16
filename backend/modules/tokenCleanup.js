// const Token = require('../models/Token');

// async function cleanupExpiredTokens() {
//   const expiredTokens = await Token.find({ expires: { $lt: new Date() } });
//   for (const token of expiredTokens) {
//     await token.remove();
//     console.log(`Supprimé token expiré pour ${token.userId}`);
// }

// module.exports = {
//   cleanupExpiredTokens
// };
//   }

// const Token = require('../models/Token');

// // Fonction pour nettoyer les tokens expirés
// async function cleanupExpiredTokens() {
//   await Token.deleteMany({
//     expires: { $lt: new Date() }
//   });
//   console.log('Nettoyage des tokens expirés terminé');
// }

// // Définition du job de nettoyage
// function setupTokenCleanup() {
// //   setInterval(cleanupExpiredTokens, 60000); // Exécute le nettoyage toutes les minutes
// setInterval(cleanupExpiredTokens, 1800000);
// }

// module.exports = {
//   setupTokenCleanup
// };











// const Token = require("../models/Token");

// // Fonction pour nettoyer les tokens expirés
// async function cleanupExpiredTokens() {
//   try {
//     const oneDayAgo = new Date();
//     oneDayAgo.setDate(oneDayAgo.getDate() - 3); // Date actuelle - 1 jour

//     // Suppression des tokens dont la date de création est plus ancienne que 24h
//     const result = await Token.deleteMany({
//       createdAt: { $lt: oneDayAgo },
//     });

//     if (result.deletedCount > 0) {
//       console.log(`${result.deletedCount} token(s) expiré(s) supprimé(s).`);
//     } else {
//       console.log("Aucun token expiré trouvé.");
//     }
//   } catch (error) {
//     console.error("Erreur lors du nettoyage des tokens expirés :", error);
//   }
// }

// // Définition du job de nettoyage
// function setupTokenCleanup() {
//   setInterval(cleanupExpiredTokens, 60000); // Exécute le nettoyage toutes les minutes
// }

// module.exports = {
//   setupTokenCleanup,
// };











const Token = require("../models/Token");

async function cleanupExpiredTokens() {
  try {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3); // Date actuelle - 3 jours

    // Suppression des tokens dont la date d'expiration est plus ancienne que 3 jours
    const result = await Token.deleteMany({
      // expiresAt: { $lt: threeDaysAgo },
      // expiresIn: { $lt: threeDaysAgo },
      createdAt: { $lt: threeDaysAgo },
    });

    if (result.deletedCount > 0) {
      console.log(`${result.deletedCount} token(s) expiré(s) supprimé(s).`);
    } else {
      console.log("Aucun token expiré trouvé.");
    }
  } catch (error) {
    console.error("Erreur lors du nettoyage des tokens expirés :", error);
  }
}

function setupTokenCleanup() {
  setInterval(cleanupExpiredTokens, 60000); // Exécute le nettoyage toutes les minutes
}

module.exports = {
  setupTokenCleanup,
};
















// const Token = require("../models/Token");

// async function cleanupExpiredTokens() {
//   try {
//     const sevenDaysAgo = new Date();
//     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Date actuelle - 7 jours

//     // Suppression des tokens dont la date d'expiration est plus ancienne que 7 jours
//     const result = await Token.deleteMany({
//       expiresAt: { $lt: sevenDaysAgo },
//     });

//     if (result.deletedCount > 0) {
//       console.log(`${result.deletedCount} token(s) expiré(s) supprimé(s).`);
//     } else {
//       console.log("Aucun token expiré trouvé.");
//     }
//   } catch (error) {
//     console.error("Erreur lors du nettoyage des tokens expirés :", error);
//   }
// }

// function setupTokenCleanup() {
//   setInterval(cleanupExpiredTokens, 60000); // Exécute le nettoyage toutes les minutes
// }

// module.exports = {
//   setupTokenCleanup,
// };







// const Token = require("../models/Token");

// async function cleanupExpiredTokens() {
//   try {
//     const oneDayAgo = new Date();
//     oneDayAgo.setDate(oneDayAgo.getDate() - 30); // Date actuelle - 30 jours

//     // Suppression des tokens dont la date d'expiration est plus ancienne que 30 jours
//     const result = await Token.deleteMany({
//       expiresAt: { $lt: oneDayAgo },
//     });

//     if (result.deletedCount > 0) {
//       console.log(`${result.deletedCount} token(s) expiré(s) supprimé(s).`);
//     } else {
//       console.log("Aucun token expiré trouvé.");
//     }
//   } catch (error) {
//     console.error("Erreur lors du nettoyage des tokens expirés :", error);
//   }
// }

// function setupTokenCleanup() {
//   setInterval(cleanupExpiredTokens, 60000); // Exécute le nettoyage toutes les minutes
// }

// module.exports = {
//   setupTokenCleanup,
// };
