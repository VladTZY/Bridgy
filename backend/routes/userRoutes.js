const express = require("express");
const router = express.Router();

const {
  loginUser,
  signupUser,
  getProfileInfo,
} = require("../controllers/userController");

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/profile/:id", getProfileInfo);

module.exports = router;
