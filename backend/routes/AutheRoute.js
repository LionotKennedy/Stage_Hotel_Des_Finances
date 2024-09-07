const express = require("express");
const router = express.Router();
const auth = require("../middlewares/AutheMiddleware");
const { registerUser, loginUser, getProfile } = require("../controllers/AutheController");
// const { registerValidator, loginValidator } = require("../helpers/Validator");

// router.post('/register', registerValidator, registerUser.registerUser)
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
// router.route('/profile').get(getProfile);
router.get('/profile', auth, getProfile);

module.exports = router;