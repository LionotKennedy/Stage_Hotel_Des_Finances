// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: Number,
//     default: 0, // 0 -> Normal user, 1 -> Admin user, 2-> Sub-admin
//   },
//   status: {
//     type: String,
//     default: "active",
//   },
//   image: {
//     type: String, // Chemin de l'image stocké sous forme de lien
//     required: false,
//   },
// });

// const User = mongoose.model("Users", UserSchema);
// module.exports = User;





const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0, // 0 -> Utilisateur normal, 1 -> Admin, 2 -> Sous-admin
  },
  status: {
    type: String,
    default: "active",
  },
  image: {
    type: String, // Chemin de l'image stocké sous forme de lien
    required: false,
  },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;
