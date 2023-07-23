const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");

router.use(requireAuth);

const { getEvents, getEventById } = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/:id", getEventById);

module.exports = router;
