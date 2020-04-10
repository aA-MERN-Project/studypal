//  Axios Request
const axios = require("axios");
const apiKey = require("../config/keys").yelpAPI;
const getYelpCafeById = (id) => {
  return axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
};


  

module.exports.getYelpCafeById = getYelpCafeById;