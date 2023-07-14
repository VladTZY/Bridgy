const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");

const { createSchool } = require("../controllers/adminController");

router.use(requireAuth);
router.use(requireAdmin);

router.post("/create_school", createSchool);

module.exports = router;
