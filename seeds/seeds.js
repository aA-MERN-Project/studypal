const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
mongoose.Promise = require("bluebird");
mongoose.connect(db);

const Cafe = require('../models/Cafe');
const yelpData = require('../data/yelp_test_data.json')


Cafe.collection.drop();


Cafe.create(yelpData)
  .then(cafe => {
    console.log(`${cafe.length} cafes created`);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
    });