import axios from 'axios';

export const getCafes = () => {

    return axios.get('/api/cafes')

};


export const getCafe = id => {

    return axios.get(`/api/cafes/yelp_id/${id}`);

};