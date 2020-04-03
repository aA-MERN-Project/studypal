const axios = require("axios");
const apiKey = require("../config/keys").YELP_API_KEY;

const getYelpCafeById = (id) => {
    return axios.get(`https://api.yelp.com/v3/businesses/${id}`,
      {
        headers: {
          Authorization: `Bearer ${"UZittz7h5GXfqGN6CtGVeBd9Slxryw_l5kvsV8fRpS4D3jT9Zk0GnLWhvUsziHOoI52fl290Sg3JqCmJXPFxk3ooFdqTgSzja1AtBMQjTRQbXz2bDNEoc6TqZVBwXnYx"}`
        }
      }
    );

};


module.exports.getYelpCafeById = getYelpCafeById;