import axios from 'axios';

export const getUser = id => {
    return axios.get(`/api/users/${id}`);
};

//getting user by id
// export const getUser = email => {
//     return axios.get(`/api/users/${email}`);
// };

export const updateUserPreferences = (id, data) => {
    return axios.post(`api/users/${email}`, data);
};

export const updateZipcode = (email, zipcode) => {
    return axios.post(`api/users/${email}/zipcode`, zipcode);
};

