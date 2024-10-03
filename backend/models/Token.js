// const mongoose = require("mongoose");

// const TokenSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Users',
//     required: true
//   },
//   token: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     expires: '2h', // Le token expirera après 2 heures
//   },
//   expiresAt: {
//     type: Date, // Stocke la date d'expiration
//     required: true
//   }
// });

// TokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// const Token = mongoose.model("Token", TokenSchema);
// module.exports = Token;





// const mongoose = require("mongoose");

// const TokenSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Users',
//     required: true
//   },
//   token: {
//     type: String,
//     required: true,
//   },
//   expires: {
//     type: Date,
//     default: Date.now,
//     expires: '3h'
//   }
// });

// const Token = mongoose.model("Token", TokenSchema);
// module.exports = Token;
















const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  token: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    default: Date.now,
    expires: '6h'  // Expire automatiquement après 3 heures
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Token = mongoose.model("Token", TokenSchema);
module.exports = Token;
