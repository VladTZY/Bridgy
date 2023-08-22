const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");

router.use(requireAuth);

const {
  getEvents,
  getEventById,
  getEventsByStatus,
  getEventByOrganization,
  getEventByOrganizationAndStatus,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/id", getEventById);

router.get("/by_status", getEventsByStatus);
router.get("/by_organization", getEventByOrganization);
router.get("/by_organization_and_status", getEventByOrganizationAndStatus);

module.exports = router;
