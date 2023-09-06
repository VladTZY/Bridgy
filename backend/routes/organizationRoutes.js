const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireOrganization } = require("../middlewares/requireOrganization");

router.use(requireAuth);
router.use(requireOrganization);

const {
  createEvent,
  getRequestedStudents,
  getJoinedStudents,
  confirmStudent,
  rejectStudent,
  checkStudent,
  finishEvent,
} = require("../controllers/organizationController");

router.post("/create_event", createEvent);
router.get("/requested_students", getRequestedStudents);
router.get("/joined_students", getJoinedStudents);
router.post("/confirm_student", confirmStudent);
router.post("/reject_student", rejectStudent);
router.post("/check_student", checkStudent);
router.post("/finish_event", finishEvent);

module.exports = router;
