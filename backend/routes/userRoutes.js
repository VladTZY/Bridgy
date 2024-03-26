const express = require("express");
const router = express.Router();

const {
  loginUser,
  signupUser,
  logoutUser,
  getProfileInfo,
  updateProfileInfo,
  changePassword,
  refreshToken,
} = require("../controllers/userController");

const { requireAuth } = require("../middlewares/requireAuth");

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/logout", logoutUser);
router.post("/refresh", refreshToken);
router.get("/profile/:id", getProfileInfo);

router.use(requireAuth);

router.put("/update_profile", updateProfileInfo);
router.put("/change_password", changePassword);

module.exports = router;
