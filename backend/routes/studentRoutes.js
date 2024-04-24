const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireStudent } = require("../middlewares/requireStudent");
const { resumeUpload } = require("../middlewares/multerMiddleware");

router.use(requireAuth);
router.use(requireStudent);

const {
  createPersonalEvent,
  getCardStats,
  uploadResume,
  getOngoingEvents,
  getRequestedEvents,
  getAcceptedEvents,
  getFinishedEvents,
  joinEvent,
  getStatusForEvent,
  postFeedback,
} = require("../controllers/studentController");

router.post("/create_personal_event", createPersonalEvent);
router.post("/upload_resume", resumeUpload.single("resumeUrl"), uploadResume);
router.get("/card_stats", getCardStats);
router.get("/ongoing_events", getOngoingEvents);
router.get("/requested_events", getRequestedEvents);
router.get("/accepted_events", getAcceptedEvents);
router.get("/finished_events", getFinishedEvents);
router.post("/join_event/:id", joinEvent);
router.get("/get_status", getStatusForEvent);
router.post("/post_feedback/:id", postFeedback);

module.exports = router;
