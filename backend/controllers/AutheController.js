
const User = require("../models/User");
const Token = require("../models/Token");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config();

const { validationResult } = require("express-validator");

// ############### REGISTER #################//
const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { name, email, password } = req.body;

    const isExistUser = await User.findOne({ email });

    if (isExistUser) {
      return res.status(200).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const userData = await user.save();

    return res.status(200).json({
      success: true,
      message: "Successfully added user",
      data: userData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### TOKEN #################//
// const generateAccessToken = async (user) => {
//   const payload = {
//     userId: user._id,
//     email: user.email,
//   };

//   const token = jwt.sign(payload, process.env.ACCESS_SECRET_TOKEN, {
//     expiresIn: "2h",
//   });

//   // Save token to the database
//   const createdToken = await Token.create({
//     userId: user._id,
//     token,
//   });

//   console.log('Token created:', createdToken); // Ajoutez ce log pour le débogage

//   return token;
// };


const generateAccessToken = async (user) => {
  const payload = {
    userId: user._id,
    email: user.email,
    // exp: Math.floor(Date.now() / 1000) + 7200 // 2 heures en secondes
    // exp: Math.floor(Date.now() / 1000) + 60 // 1 minute en secondes
    exp: Math.floor(Date.now() / 1000) + 10800 // 3 heures en secondes
  };

  const token = jwt.sign(payload, process.env.ACCESS_SECRET_TOKEN);

  // Sauvegarde le token avec son expiration dans la base de données
  const createdToken = await Token.create({
    userId: user._id,
    token,
    expiresAt: payload.exp
  });

  console.log('Token créé:', createdToken);

  return token;
};

// ############### ENDING #################//

// ############### LOGIN #################//
const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }
    const { email, password } = req.body;

    const userData = await User.findOne({ email });

    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "Email is incorrect",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, userData.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
      });
    }
    if(userData.status != "active") {
      return res.status(400).json({
        success: false,
        message: "Your account is not active",
      });
    }

    const accessToken = await generateAccessToken(userData);

    return res.status(200).json({
      success: true,
      message: "Login successfully",
      accessToken: accessToken,
      tokenType: "Bearer",
      data: userData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### PROFILE #################//
const getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await User.findOne({ _id: id });
    return res.status(200).json({
      success: true,
      data: userData
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### LOGOUT #################//
const logoutUser = async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "No token provided",
      });
    }

    // Supprimez le token de la base de données
    await Token.deleteOne({ token });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ############### ENDING #################//

module.exports = { registerUser, loginUser, getProfile, logoutUser };
