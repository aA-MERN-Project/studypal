import axios from 'axios';

export const setAuthToken = token => {
    if(token){ 

        axios.defaults.headers.common['Authorization'] = token;
    }else{
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
}

export const signup = (userData) => {
    return axios.post('api/users/register', userData);
} 

export const updateUserPreferences = (id, preferences) => {
    return axios.patch(`api/users/${id}`, preferences);
};


export const updateFavorites = (id, data) => {
  return axios.patch(`/api/users/favorites/${id}`, data);
};
