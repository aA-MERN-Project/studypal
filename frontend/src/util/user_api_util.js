import axios from 'axios';

export const getUser = email => {
    return axios.get(`/api/users/${email}`);
};

export const updateUserPreferences = (email, data) => {
    return axios.post(`api/users/${email}`, data);
};

export const updateZipcode = (email, zipcode) => {
    return axios.post(`api/users/${email}/zipcode`, zipcode);
};

