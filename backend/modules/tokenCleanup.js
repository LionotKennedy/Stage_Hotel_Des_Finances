
const Token = require('../models/Token');

// Fonction pour nettoyer les tokens expirés
async function cleanupExpiredTokens() {
  await Token.deleteMany({
    expires: { $lt: new Date() }
  });
  console.log('Nettoyage des tokens expirés terminé');
}

// Définition du job de nettoyage
function setupTokenCleanup() {
//   setInterval(cleanupExpiredTokens, 60000); // Exécute le nettoyage toutes les minutes
setInterval(cleanupExpiredTokens, 1800000);
}

module.exports = {
  setupTokenCleanup
};






// const Token = require('../models/Token');

// async function cleanupExpiredTokens() {
//   const expiredTokens = await Token.find({ expires: { $lt: new Date() } });
//   for (const token of expiredTokens) {
//     await token.remove();
//     console.log(`Supprimé token expiré pour ${token.userId}`);
//   }
// }

// module.exports = {
//   cleanupExpiredTokens
// };
