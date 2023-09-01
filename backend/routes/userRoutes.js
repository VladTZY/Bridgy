const express = require("express");
const router = express.Router();

const {
  loginUser,
  signupUser,
  getProfileInfo,
  updateProfileInfo,
} = require("../controllers/userController");

const { requireAuth } = require("../middlewares/requireAuth");

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/profile/:id", getProfileInfo);

router.use(requireAuth);

router.put("/update_profile", updateProfileInfo);

module.exports = router;
