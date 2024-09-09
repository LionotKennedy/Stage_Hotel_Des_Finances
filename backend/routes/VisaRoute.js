const express = require("express");
const router = express.Router();
const auth = require("../middlewares/AutheMiddleware");
const { addVisaValidator, editVisaValidator } = require("../helpers/ValidatorVisa");
const { addArchive, getVisa, editVisaById, updateVisa, deleteVisa } = require("../controllers/VisaController");

router.post('/add_visa', addVisaValidator, addArchive);
router.get('/get_visa',  getVisa);
router.get('/edit_visa/:id', editVisaValidator, editVisaById);
router.put('/update_visa/:id', addVisaValidator, updateVisa);
router.delete('/delete_visa/:id', editVisaValidator, deleteVisa);

module.exports = router;