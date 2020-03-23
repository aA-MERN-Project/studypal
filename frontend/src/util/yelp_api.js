import axios from 'axios';

const apiKey = require("../keys/keys").YELP_API_KEY;


export const getYelpCafeById = (id) => {
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`

        },
    })

};


export default getYelpCafeById;