import axios from 'axios';

export const getUser = id => {
    return axios.get(`/api/users/${id}`)
};

export const updateProfile = (id, data) => {
    return axios.patch(`api/users/${id}/profile`, data);
};

