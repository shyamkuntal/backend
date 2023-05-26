const express = require("express");
const { registerUser } = require("../controllers/register");
const router = express.Router();

router.route('/user/upload').post(registerUser)

module.exports = router;