const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
mongoose.Promise = require("bluebird");
mongoose.connect(db);

// GRAPHQL
const apiKey = require("../config/keys").yelpAPI;
const yelpApiUrl = "https://api.yelp.com/v3/graphql";
const { GraphQLClient } = require('graphql-request');
const client = new GraphQLClient(yelpApiUrl, {
    headers: { Authorization: `Bearer ${apiKey}` },
});
const Cafe = require('../models/Cafe');
const yelpData = require('../data/cafe_data_complete.json')


// Script to seed database

for (let i = 0; i <= yelpData.length; i++) {

    (function (ind) {
        setTimeout(function () {
            let cafe = yelpData[ind]
            Cafe.findOne({ id: cafe.id }).then(async cafe => {
                let query = `{
                ${"b0"} : business(id: "${cafe.alias}") {
                    id
                    hours {
                        open {
                            start
                            end
                        }
                    }
                }
            }`;

                const cafeHours = await client.request(query)
                cafe.hours = cafeHours.b0.hours
                cafe.save()
                    .then(cafe => {
                        console.log(ind)
                        console.log(`${cafe.alias} updated`)

                    })
                    .catch(err => console.log("Save did not work"))

            })

        }, 900 * ind);
    })(i);

}



