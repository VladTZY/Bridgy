const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");

router.use(requireAuth);

module.exports = router;
