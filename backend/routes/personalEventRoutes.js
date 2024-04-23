const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireStudent } = require("../middlewares/requireStudent");

router.use(requireAuth);
router.use(requireStudent);

const {
  createPersonalEvent,
} = require("../controllers/personalEventController");

router.post("/create_personal_event", createPersonalEvent);

module.exports = router;
