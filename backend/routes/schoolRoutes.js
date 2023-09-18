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
} = require("../controllers/schoolController");

router.post("/create_one_student", createOneStudent);
router.post(
  "/create_multiple_students",
  tableUpload.single("file"),
  createMultipleStudents
);
router.get("/students", getStudents);

module.exports = router;
