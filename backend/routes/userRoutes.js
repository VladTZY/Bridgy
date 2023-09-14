const express = require("express");
const router = express.Router();

const {
  loginUser,
  signupUser,
  getProfileInfo,
  updateProfileInfo,
  passwordReset,
} = require("../controllers/userController");

const { requireAuth } = require("../middlewares/requireAuth");

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/profile/:id", getProfileInfo);

router.use(requireAuth);

router.put("/update_profile", updateProfileInfo);
router.put("/password_reset", passwordReset);

module.exports = router;
