import * as SessionAPIUtil from "../util/session_api_util";
import jwt_decode from 'jwt-decode';
// import SessionErrorsReducer from "../reducers/session_errors_reducer";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    // debugger;
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

//added by Fei
const receiveUserSignIn = () => {
     ;
    return({
    type: RECEIVE_USER_SIGN_IN,
    currentUser
});
};

export const clearErrors = () => {
    return({
        type:CLEAR_ERRORS
    })
}

//Fei added different login function
//Wilson's login function
// export const login = user => dispatch => (
//     SessionAPIUtil.login(user) 
//         .then(user => dispatch(receiveCurrentUser(user))),
//         err => dispatch(receiveErrors(err.responseJSON))
// );

//Wilson's sighup function
// export const signup = () => dispatch =>  (
//     SessionAPIUTil.signup(user)
//         .then(user => dispatch(receiveCurrentUser(user))),
//         err => dispatch(receiveErrors(err.responseJSON))
// );

//Fei added a different logout function
//Wilson's logout function
// export const logout = user => (
//     SessionAPIUtil.logout(user) 
//         .then(() => dispatch(logoutCurrentUser())),
//         err => dispatch(receiveErrors(err.responseJSON))
// );

//added by fei
export const signup  = (user) => dispatch => {
    // debugger;
    return(
        SessionAPIUtil.signup(user)
            .then((user) => dispatch(receiveUserSignIn(user)),
            err => (dispatch(receiveErrors(err.response.data)))
            // .catch(err => dispatch(receiveErrors(err.response.data)))
        )
    );
};

//added by fei
export const login = (user) => dispatch => {
    // debugger;
    return SessionAPIUtil.login(user).then(res => {
        //in axios, all of our json data is in data key of response
        //response carries lot of information
        const {token} = res.data;
        //localStorage allows us to save something on client side, so if user refreshes page, loads it in from localStor
        // if close page, jwtToken still stores there
        localStorage.setItem('jwtToken', token);

        //set header for future axios requests to pass along that json web token to backend to be authenticated
        SessionAPIUtil.setAuthToken(token); 
        //decoded contains all the data we get back from API
        //res.data.token is the => is the json web token we are passing into jwt decode function
        const decoded = jwt_decode(token);
        //  ;
        dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {dispatch(receiveErrors(err.response.data))
    });
};

//added by fei
// 1) remove jwtkey from localstorage 2) need to take jwt authHeader off of axios as a default
// 3) get user out of redux store
export const logout = () => dispatch => {
    // debugger;
    localStorage.removeItem('jwtToken');
    SessionAPIUtil.setAuthToken(false);
    dispatch(logoutCurrentUser());
};
