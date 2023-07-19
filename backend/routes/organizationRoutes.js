const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireOrganization } = require("../middlewares/requireOrganization");

router.use(requireAuth);
router.use(requireOrganization);

const {
  createEvent,
  confirmStudent,
  rejectStudent,
} = require("../controllers/organizationController");

router.post("/create_event", createEvent);
router.post("/confirm_student", confirmStudent);
router.post("/reject_student", rejectStudent);

module.exports = router;
