const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();



router.get("/test", (req, res) => {
  res.json({ msg: "What's up this is our favorite route" });
});



module.exports = router;
