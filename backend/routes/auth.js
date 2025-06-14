const express = require("express");
const registerController = require("../http/controllers/auth.controller");
const router = express.Router();

router.post("/login", registerController.login);

module.exports = router;
