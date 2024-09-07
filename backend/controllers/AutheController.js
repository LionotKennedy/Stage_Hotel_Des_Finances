const User = require("../models/User");
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

    const users = new User({
      name,
      email,
      password: hashedPassword,
    });

    const userData = await users.save();

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
const generateAccessToken = async (user) => {
  const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {
    expiresIn: "2h",
  });
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
        message: "Email  is incorrect",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, userData.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    const accessToken = await generateAccessToken({ user: userData });

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
    const user_id = req.user._id;
    const userData = await User.findOne({ _id: user_id });
    return res.status(200).json({
      success: true,
      message: req.user,
    //   errors: errors.array(),
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

module.exports = { registerUser, loginUser, getProfile };
