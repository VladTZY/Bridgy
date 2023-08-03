const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireSchool } = require("../middlewares/requireSchool");

router.use(requireAuth);
router.use(requireSchool);

const {
  createOneStudent,
  getStudents,
} = require("../controllers/schoolController");

router.post("/create_one_student", createOneStudent);
router.get("/students", getStudents);

module.exports = router;
