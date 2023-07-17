const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");
const { requireOrganization } = require("../middlewares/requireOrganization");

router.use(requireAuth);
router.use(requireOrganization);

const { createEvent } = require("../controllers/organizationController");

router.post("/create_event", createEvent);

module.exports = router;
