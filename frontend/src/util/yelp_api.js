import axios from 'axios';

const apiKey = require("../keys/keys").YELP_API_KEY;


const getYelpCafeById = (id) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`

        },
    })
    .then(res => {
        console.log(res)

    })
    .catch(error => console.log(error))

};


export default getYelpCafeById;