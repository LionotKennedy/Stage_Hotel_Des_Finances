const express = require("express");
const router = express.Router();
const auth = require("../middlewares/AutheMiddleware");
const { registerUser, loginUser, getProfile } = require("../controllers/AutheController");
const { registerValidator, loginValidator } = require("../helpers/Validator");

// router.route('/register').post(registerUser);
// router.route('/login').post(loginUser);
// router.route('/profile').get(getProfile);

router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, loginUser);
router.get('/profile', auth, getProfile);

module.exports = router;