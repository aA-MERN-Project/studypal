import axios from 'axios';

export const getUser = id => {
    return axios.get(`/api/users/${id}`)
};

//getting user by id
// export const getUser = email => {
//     return axios.get(`/api/users/${email}`);
// };

// export const updateUserPreferences = (id, data) => {
//     return axios.patch(`api/users/${id}`, data);
// };

export const updateProfile = (id, data) => {
    //  ;
    return axios.patch(`api/users/${id}/profile`, data);
};

