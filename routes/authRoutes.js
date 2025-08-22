const express = require("express");
const router = express.Router();
const { registerUser, loginUser, testAuth } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/test", testAuth);

module.exports = router;
