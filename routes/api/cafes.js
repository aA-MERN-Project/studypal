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
        .find({noise_level: "loud"})
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({ nocafesfound: 'No cafes found with that zipcode' }));
});


router.post("/filters", (req,res) => {
    const filters = req.body;

    Cafe.find({location_zip_code: req.body.location_zip_code, wifi: filters.wifi})
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({ nocafesfound: 'No cafes found with that zipcode' }));

})


router.get("/yelp_id/:yelp_id", (req,res) => {  
    Cafe.find({id: req.params.yelp_id})
        .then(cafe => res.json(cafe))
        .catch(err => res.status(404).json({ nocafefound: 'No cafe found with that yelp id'}));

})

router.get("/noise_level/:noise_level", (req,res) => {
    Cafe.find({noise_level: req.params.noise_level})
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({ nocafesfound: 'No cafe found with that noise level'}));

})


router.get("/zip_code/:zip_code", (req,res) => {
    Cafe.find({location_zip_code: req.params.zip_code})
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({nocafesfound : 'No cafes found with that zipcode'}))
})

router.get("/credit_card/:credit_card", (req, res) => {
    Cafe.find({ credit_card: req.params.credit_card })
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({ nocafesfound: 'No cafes found with that credit card status' }))

})


router.get("/good_working/:good_for_working", (req, res) => {
    Cafe.find({ good_for_working: req.params.good_for_working })
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({ nocafesfound: 'No cafes are good for working' }))

})


router.get("/wifi/:wifi", (req, res) => {
    Cafe.find({ wifi: req.params.wifi })
        .then(cafes => res.json(cafes))
        .catch(err => res.status(404).json({ nocafesfound: 'No cafes with wifi' }))

})




module.exports = router;
