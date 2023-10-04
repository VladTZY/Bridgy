const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");

router.use(requireAuth);

const { getNotifications } = require("../controllers/notificationController");

router.get("/get_all", getNotifications);

module.exports = router;
