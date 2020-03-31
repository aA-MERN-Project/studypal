const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const CafeSchema = new Schema({
  id: {
    type: String,
   
  },
  alias: {
    type: String,
   
  },
  name: {
    type: String,
   
  },
  image_url: {
    type: String,
   
  },
  is_closed: {
    type: String,
   
  },
  url: {
    type: String,
   
  },
  review_count: {
    type: String,
   
  },
  categories_0_alias: {
    type: String,
   
  },
  categories_0_title: {
    type: String,
   
  },
  rating: {
    type: Number,
   
  },
  coordinates_latitude: {
    type: Number,
   
  },
  coordinates_longitude: {
    type: Number,
   
  },
  transactions_0: {
    type: String,
   
  },
  price: {
    type: String,
   
  },
  location_address1: {
    type: String,
   
  },
  location_address2: {
    type: String,
   
  },
  location_address3: {
    type: String,
   
  },
  location_city: {
    type: String,
   
  },
  location_zip_code: {
    type: Number,
   
  },
  location_country: {
    type: String,
   
  },
  location_state: {
    type: String,
   
  },
  location_display_address_0: {
    type: String,
   
  },
  location_display_address_1: {
    type: String,
   
  },
  location_display_address_2: {
    type: String,
   
  },
  phone: {
    type: String,
   
  },
  display_phone: {
    type: String,
   
  },
  distance: {
    type: String,
   
  },
  categories_1_alias: {
    type: String,
   
  },
  categories_1_title: {
    type: String,
   
  },
  categories_2_alias: {
    type: String,
   
  },
  categories_2_title: {
    type: String,
   
  },
  transactions_1: {
    type: String,
   
  },
  wifi: {
    type: String,
   
  },
  credit_card: {
    type: String,
   
  },
  noise_level: {
    type: String,
   
  },
  good_for_working: {
    type: String,
   
  },
  
});




const Cafe = mongoose.model('cafe', CafeSchema);

module.exports = Cafe;