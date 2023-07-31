const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

router.get("/check", (req, res) => {
  const { authorization } = req.headers;

  console.log(authorization);

  try {
    if (!authorization) throw Error("Auth token required");

    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (error) throw Error(error.message);
    });

    res.status(200).json({
      message: "TOKEN OK",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
