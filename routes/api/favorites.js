const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Favorite = require("../../models/Favorite");


router.get("/test", (req, res) => {
  res.json({ msg: "What's up this is our favorite route" });
});

router.get('/:id', (req,res) => {
  Favorite.findById(req.params.id)
    .then(favorite => res.json(favorite))
    .catch(err =>
        res.status(404).json({noFavoirteFound: "no favorite found with ID"})
        );

});


module.exports = router;
