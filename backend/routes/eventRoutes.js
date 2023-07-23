const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");

router.use(requireAuth);

const { getEvents } = require("../controllers/eventController");

router.get("/", getEvents);

module.exports = router;
