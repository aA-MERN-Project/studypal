import axios from 'axios';

export const setAuthToken = token => {
    if(token){ //then set as default authorization header
        //any requests we make after we set the token will have this authorization header in it auto
        //won't have to declare it every time
        axios.defaults.headers.common['Authorization'] = token;
    }else{ //delete token from headers
        //delete whatever is at the key
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const login = (userData) => {
    //  ;
    return axios.post('/api/users/login', userData);
}

export const signup = (userData) => {
    return axios.post('api/users/register', userData);
} 

export const updateUserPreferences = (id, preferences) => {
    return axios.patch(`api/users/${id}`, preferences);
};

//not using 
// export const logout = () => {
//     return null
// }