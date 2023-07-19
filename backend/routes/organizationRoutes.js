const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireOrganization } = require("../middlewares/requireOrganization");

router.use(requireAuth);
router.use(requireOrganization);

const {
  createEvent,
  confirmStudent,
} = require("../controllers/organizationController");

router.post("/create_event", createEvent);
router.post("/confirm_student", confirmStudent);

module.exports = router;
