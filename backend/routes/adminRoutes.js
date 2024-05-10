const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");

const {
  getSchools,
  getOrganizations,
  createSchool,
  createOrganization,
} = require("../controllers/adminController");

router.use(requireAuth);
router.use(requireAdmin);

router.get("/schools", getSchools);
router.get("/organizations", getOrganizations);
router.post("/create_school", createSchool);
router.post("/create_organization", createOrganization);

module.exports = router;
