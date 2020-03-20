// testing out yelp api fusion

const apiKey = require('../../../config/keys').YELP_API_KEY;

const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);


let defaultSearchParams = {
    location: 'San Francisco, CA',
    zip_code: '94134',
}


// testing out api 
const getFusionYelpId = id => client.business(id)
    .then(response => {
        console.log(response.jsonBody);
    })
    .catch(error => {
        console.log(e);
    });


export default getFusionYelpId;