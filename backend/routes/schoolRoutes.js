const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireSchool } = require("../middlewares/requireSchool");

const { tableUpload } = require("../middlewares/multerMiddleware");

router.use(requireAuth);
router.use(requireSchool);

const {
  createOneStudent,
  getStudents,
  createMultipleStudents,
  getStats,
  getSchoolObjective,
  setSchoolObjective,
  getStudentProgress,
} = require("../controllers/schoolController");

router.post("/create_one_student", createOneStudent);
router.post(
  "/create_multiple_students",
  tableUpload.single("file"),
  createMultipleStudents
);
router.get("/students", getStudents);
router.get("/stats", getStats);
router.get("/get_objective", getSchoolObjective);
router.post("/set_objective", setSchoolObjective);
router.get("/student_progress", getStudentProgress);

module.exports = router;
