const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
mongoose.Promise = require("bluebird");
mongoose.connect(db);

const Cafe = require('../models/Cafe');
const yelpData = require('../data/yelp_test_data.json')
const moreYelpData = require('../data/yelp_more_data.json')


Cafe.collection.drop();


Cafe.create(moreYelpData)
  .then(cafe => {
    console.log(`${cafe.length} cafes created`);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
    });