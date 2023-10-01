const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireOrganization } = require("../middlewares/requireOrganization");
const { imageUpload } = require("../middlewares/multerMiddleware");

router.use(requireAuth);
router.use(requireOrganization);

const {
  createEvent,
  getRequestedStudents,
  getJoinedStudents,
  getFinishedStudents,
  acceptStudent,
  rejectStudent,
  checkStudent,
  finishEvent,
  checkAdmin,
} = require("../controllers/organizationController");

router.post("/create_event", imageUpload.single("photoUrl"), createEvent);
router.get("/requested_students", getRequestedStudents);
router.get("/joined_students", getJoinedStudents);
router.get("/finished_students", getFinishedStudents);
router.post("/confirm_student", acceptStudent);
router.post("/reject_student", rejectStudent);
router.post("/check_student", checkStudent);
router.post("/finish_event", finishEvent);
router.get("/check_admin", checkAdmin);

module.exports = router;
