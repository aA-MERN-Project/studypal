const {
    applyAllFilters
} = require("../../util/filters_util")

const {
    applyTimeFilter
} = require("../../util/filters_util")

const {
    calculateDistance
} =  require("../../util/distance_util")

const {
  getYelpCafeById
} = require("../../util/yelp_api");
const apiKey = require("../../config/keys").yelpAPI;

const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Cafe = require("../../models/Cafe");

const yelpApiUrl = "https://api.yelp.com/v3/graphql";
const { GraphQLClient } = require('graphql-request');
const client = new GraphQLClient(yelpApiUrl, {
  headers: { Authorization: `Bearer ${apiKey}` },
});



router.get("/test", (req, res) => {
    res.json({ msg: "What's up this is our cafe route"})
});


router.get("/", (req,res) => {
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


router.get("/yelp_id/:id", (req,res) =>  {

    const yelpId = req.params.id;
    getYelpCafeById(yelpId)
        .then((cafe) => {
            res.json(cafe.data);
        })
        .catch(err => {
            res
              .status(404)
              .json({ error: "Error searching for Cafe in Yelp Database"});

            console.log('Error searching for Cafe in Yelp Database')});
})

router.get("/:yelp_id", (req, res) => {
    Cafe.find({ id: req.params.yelp_id })
        .then(cafe => res.json(cafe))
        .catch(err => res.status(404).json({ nocafefound: 'No cafe found with that yelp id' }));

})


router.post("/filters", (req,res) => {
    const filters = req.body;
    let my_lat = req.body.my_lat;
    let my_lng = req.body.my_lng;

    debugger
    // If no geolocation, and zipcode
    if (filters.location_zip_code) {

        // Find random cafe with that zipcode, then use distance filter
        Cafe.find({})
          .then((cafes) => {
   
            let cafesArr = JSON.parse(JSON.stringify(cafes));

            let midCafe = cafes.filter(
              (cafe) => cafe.location_zip_code === filters.location_zip_code
            )[0];


            my_lat = midCafe.coordinates_latitude;
            my_lng = midCafe.coordinates_longitude;


            let addDist = calculateDistance(cafesArr, my_lat, my_lng);
            let filteredCafes = applyAllFilters(addDist, filters);
            let timeFilteredCafes = applyTimeFilter(filteredCafes, filters);
            debugger
            res.json(timeFilteredCafes);
          })
          .catch((err) =>
            res
              .status(404)
              .json({ nocafesfound: "No cafes found with that zipcode" })
          );

        
        
    } else {

           Cafe.find({})
             .then((cafes) => {
               let cafesArr = JSON.parse(JSON.stringify(cafes));
               let addDist = calculateDistance(cafesArr, my_lat, my_lng);
               let filteredCafes = applyAllFilters(addDist, filters);
               let timeFilteredCafes = applyTimeFilter(filteredCafes, filters);
               // let timeFilteredCafes = applyTimeFilter(filteredCafes, filters)
               debugger
               res.json(timeFilteredCafes);
             })
             .catch((err) =>
               res
                 .status(404)
                 .json({ nocafesfound: "No cafes found with that zipcode" })
             );

    }



 
})


router.patch("/update/:id", (req, res) => {
    const id = req.params.id;
    Cafe.findOne({id:id})
        .then(
            cafe => {
                let updateType = req.body.updateType;

                if (updateType === "randomlyRolled"){
                    if (!cafe.rolled_amount) {
                        cafe.rolled_amount = 1;
                    } else {
                        cafe.rolled_amount += 1;
                    }
                }

                if (updateType === "selected") {
                    if (!cafe.selected_amount) {
                        cafe.selected_amount = 1;
                    } else {
                        cafe.selected_amount += 1;
                    }
                }

                if (updateType === "favorite"){

                    cafe.favorite_amount += 1;
                }

                if (updateType === "unfavorite") {

                    if (cafe.favorite_amount > 0) cafe.favorite_amount -= 1;

                }

                cafe.save()
                    .then(cafe => {
                        res.json(cafe)
                        console.log("Cafe Updated")
                    
                    })
                    .catch(err => console.log("Save did not work :("))

            })
        .catch( err => res.status(404).json({nothingAdded: "No update to StudyPal database"})

            )

})








module.exports = router;
