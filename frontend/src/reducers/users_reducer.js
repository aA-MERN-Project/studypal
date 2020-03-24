


import {RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const usersReducer = (state={}, action) => {
    Object.freeze({},state);
    let nextState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_USER: 
            return Object.assign({},state, {[action.user.id]: action.user});
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_USER_SIGN_IN:
             
            // return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
            return Object.assign({}, state, {[action.currentUser.data._id]: action.currentUser.data});
            //at this point, action.currentUser is much more complex
                    // {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
                    // data: {_id: "5e73f3e4d97617728ed28a9c", handle: "user16", email: "user16@gmail.com", password: "$2a$10$GCb2zkH35TETm/9UCpEVuuT8l.qAiNTePECM9xbNLnrja7sL5hpqa", date: "2020-03-19T22:36:20.518Z", …}
                    // status: 200
                    // statusText: "OK"
                    // headers: {connection: "close", content-length: "195", content-type: "application/json; charset=utf-8", date: "Thu, 19 Mar 2020 22:36:20 GMT", etag: "W/"c3-8RRL+TdUXZOox58A/KyzL354iDM"", …}
                    // config: {url: "api/users/register", method: "post", data: "{"email":"user16@gmail.com","handle":"user16","pas…ssword","password2":"password","zipcode":"32343"}", headers: {…}, transformRequest: Array(1), …}
                    // request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
                    // __proto__: Object

        default:
            return state;
    }
};

export default usersReducer;
