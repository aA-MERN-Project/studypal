import axios from 'axios';

// unused
export const getCafes = () => {
    return axios.get('/api/cafes')
};

export const getCafe = id => {
    return axios.get(`/api/cafes/${id}`);
};

export const getYelpCafeById = id => {
    return axios.get(`/api/cafes/yelp_id/${id}`);

};

export const getFavorites = (id) => {
    return axios.get(`/api/favorites/${id}`)
}


export const getCafeByZipcode = zipcode => {
    return axios.get(`/api/cafes/zip_code/${zipcode}`);
};

export const getCafeByFilters = filters => {
    return axios.post(`/api/cafes/filters`, filters)
};

export const updateCafe = (id, data) => {
    return axios.patch(`api/cafes/update/${id}`, data);
}