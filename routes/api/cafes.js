// This is API route for our inputted data
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const Cafe = require("../../models/Cafe");


router.get("/test", (req, res) => {
    res.json({ msg: "What's up this is our cafe route"})
});


router.get("/", (req,res) => {

    Cafe
        .find()
        .sort({ zipCode: -1}) //finds newest inputted cafe
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({ nocafesfound: 'No Cafes found' }));
});



module.exports = router;
