// testing out yelp api fusion


const yelp = require('yelp-fusion');
const client = yelp.client("UZittz7h5GXfqGN6CtGVeBd9Slxryw_l5kvsV8fRpS4D3jT9Zk0GnLWhvUsziHOoI52fl290Sg3JqCmJXPFxk3ooFdqTgSzja1AtBMQjTRQbXz2bDNEoc6TqZVBwXnYx");


let defaultSearchParams = {
    location: 'San Francisco, CA',
    zip_code: '94134',
}


// testing out api 
export const getFusionYelpId = id => client.business(id);


export default getFusionYelpId;