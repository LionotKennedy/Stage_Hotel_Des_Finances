const User = require('../models/User');
const Token = require('../models/Token');
const crypto = require('crypto');
const sendMail = require('../utils/sendMail');
const bcrypt = require("bcrypt");

const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User with this email does not exist",
      });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');

    const token = new Token({
      userId: user._id,
      token: resetToken,
      createdAt: Date.now(),
    });

    await token.save();

    const content = `
      <p>Hi ${user.name},</p>
      <p>You requested to reset your password. Use the following code to reset your password:</p>
      <h3>${resetToken}</h3>
      <p>If you did not request this, please ignore this email.</p>
    `;

    await sendMail(user.email, "Password Reset", content);

    return res.status(200).json({
      success: true,
      message: "Verification code sent to your email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const passwordResetToken = await Token.findOne({ token });

    if (!passwordResetToken) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    const isExpired = (Date.now() - passwordResetToken.createdAt) > 3600000;
    if (isExpired) {
      return res.status(400).json({
        success: false,
        message: "Token has expired",
      });
    }

    const user = await User.findById(passwordResetToken.userId);
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    await Token.findByIdAndDelete(passwordResetToken._id);

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { requestPasswordReset, resetPassword };
