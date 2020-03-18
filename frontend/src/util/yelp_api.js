import axios from 'axios';

const apiKey = require("../keys/keys").YELP_API_KEY;


const getCafes = (filter = {}) => {
    axios.get(`https://api.yelp.com/v3/businesses/search`, {
        headers: {
            Authorization: `Bearer ${apiKey}`

        },

        params: {
            limit: 10,
				categories: 'coffee,coffeeroasteries,coffeeshops,cafe',
				location: 'San Francisco, CA'

        }
    })
    .then(res => 
        res.data.businesses.map( business => { return {
                name: business.name,
                coords: business.coordinates
            };
            })
        )
    .catch(error => console.log(error))


};


export default getCafes;