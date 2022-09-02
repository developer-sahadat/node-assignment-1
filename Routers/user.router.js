const express = require("express");
const router = express.Router();

router.get("/random", (req, res) => {
  res.send("okay");
});

module.exports = router;
