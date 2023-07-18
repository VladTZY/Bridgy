const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireStudent } = require("../middlewares/requireStudent");

router.use(requireAuth);
router.use(requireStudent);

const { joinEvent } = require("../controllers/studentController");

router.post("/join_event/:id", joinEvent);

module.exports = router;
