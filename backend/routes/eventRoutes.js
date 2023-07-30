const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");

router.use(requireAuth);

const {
  getEvents,
  getEventById,
  getEventsByStatus,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/id", getEventById);
router.get("/by_status", getEventsByStatus);

module.exports = router;
