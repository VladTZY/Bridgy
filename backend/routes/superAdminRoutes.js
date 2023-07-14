const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireSuperAdmin } = require("../middlewares/requireSuperAdmin");
const { createAdmin } = require("../controllers/superAdminController");

router.use(requireAuth);
router.use(requireSuperAdmin);

router.post("/create_admin", createAdmin);

module.exports = router;
