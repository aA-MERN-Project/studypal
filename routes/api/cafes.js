// This is API route for our inputted data
const {
    applyAllFilters
} = require("../../util/filters_util")

const {
    calculateDistance
} =  require("../../util/distance_util")

const {
  getYelpCafeById
} = require("../../util/yelp_api");

const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Cafe = require("../../models/Cafe");



router.get("/test", (req, res) => {
    res.json({ msg: "What's up this is our cafe route"})
});


router.get("/", (req,res) => {
    // testing distance
    let my_lat = 37.79001;
    let my_lng = -122.41177;
    Cafe
        .find({})
        .then(cafes => {
            let cafesArr = JSON.parse(JSON.stringify(cafes))
            let addDist = calculateDistance(cafesArr, my_lat, my_lng)
            res.json(addDist);

        })
        .catch(err => res.status(404).json({ nocafesfound: 'No cafes found with that zipcode' }));
});


//Making request to YELP API
router.get("/yelp_id/:id", (req,res) =>  {

    const yelpId = req.params.id;
    getYelpCafeById(yelpId)
        .then((cafe) => {

            res.json(cafe.data);
        })
        .catch(err => console.log('Error searching for Cafe in Yelp Database'));

})

router.get("/:yelp_id", (req, res) => {
    Cafe.find({ id: req.params.yelp_id })
        .then(cafe => res.json(cafe))
        .catch(err => res.status(404).json({ nocafefound: 'No cafe found with that yelp id' }));

})


router.post("/filters", (req,res) => {
    const filters = req.body;
    const my_lat = req.body.my_lat;
    const my_lng = req.body.my_lng;

    Cafe.find({})
        .then(cafes => {
            let cafesArr = JSON.parse(JSON.stringify(cafes))
            let addDist = calculateDistance(cafesArr, my_lat, my_lng)
            let filteredCafes = applyAllFilters(addDist,filters)

            res.json(filteredCafes);

        })
        .catch(err => res.status(404).json({ nocafesfound: 'No cafes found with that zipcode' }));
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
