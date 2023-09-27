const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireStudent } = require("../middlewares/requireStudent");

router.use(requireAuth);
router.use(requireStudent);

const {
  getOngoingEvents,
  getRequestedEvents,
  getFinishedEvents,
  joinEvent,
  getStatusForEvent,
  postFeedback,
} = require("../controllers/studentController");

router.get("/ongoing_events", getOngoingEvents);
router.get("/requested_events", getRequestedEvents);
router.get("/finished_events", getFinishedEvents);
router.post("/join_event/:id", joinEvent);
router.get("/get_status", getStatusForEvent);
router.post("/post_feedback/:id", postFeedback);

module.exports = router;
