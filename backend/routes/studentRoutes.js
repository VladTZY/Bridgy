const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireStudent } = require("../middlewares/requireStudent");

router.use(requireAuth);
router.use(requireStudent);

const {
  joinEvent,
  getOngoingEvents,
  getRequestedEvents,
  postFeedback,
} = require("../controllers/studentController");

router.get("/ongoing_events", getOngoingEvents);
router.get("/requested_events", getRequestedEvents);
router.post("/join_event/:id", joinEvent);
router.post("/post_feedback/:id", postFeedback);

module.exports = router;
