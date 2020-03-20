import axios from 'axios';

export const setAuthToken = token => {
    if(token){ //then set as default authorization header
        axios.defaults.headers.common['Authorization'] = token;
    }else{ //delete token from headers
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
}

export const signup = (userData) => {
    //  ;
    return axios.post('api/users/register',userData);
} 

//not using 
// export const logout = () => {
//     return null
// }