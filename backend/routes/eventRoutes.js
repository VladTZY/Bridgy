const express = require("express");
const router = express.Router();

const { requireAuth } = require("../middlewares/requireAuth");

router.use(requireAuth);

router.get("/test", (req, res) => {
  res.send("ok");
});

module.exports = router;
