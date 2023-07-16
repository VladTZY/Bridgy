const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");

const {
  createSchool,
  createOrganization,
} = require("../controllers/adminController");

router.use(requireAuth);
router.use(requireAdmin);

router.post("/create_school", createSchool);
router.post("/create_organization", createOrganization);

module.exports = router;
