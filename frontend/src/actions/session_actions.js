import * as SessionAPIUtil from "../util/session_api_util";
import * as UserAPIUtil from "../util/user_api_util";
import jwt_decode from 'jwt-decode';
import { updateCafe } from "../util/cafe_api_util";
// import SessionErrorsReducer from "../reducers/session_errors_reducer";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const START_LOADING_LOGIN = "START_LOADING_LOGIN";
export const RECEIVE_PREFERENCES = "RECEIVE_PREFERENCES";
export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";

export const startLoadingLogin = () => ({
    type: START_LOADING_LOGIN
})

const receiveCurrentUser = (currentUser) => {
    return({
        type: RECEIVE_CURRENT_USER,
        currentUser
    });
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

//added by Fei
const receiveUserSignIn = (currentUser) => {
    //  ; 
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

const receivePreferences = (preferences) => {
    return ({
    type: RECEIVE_PREFERENCES,
    preferences})
}

export const signup  = (user) => dispatch => {
     
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
     
    return SessionAPIUtil.login(user).then(res => {
        const {token} = res.data;
        localStorage.setItem('jwtToken', token);

        SessionAPIUtil.setAuthToken(token); 
        const decoded = jwt_decode(token);
         
        dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {dispatch(receiveErrors(err.response.data));
    });
};

export const logout = () => dispatch => {
     
    localStorage.removeItem('jwtToken');
    SessionAPIUtil.setAuthToken(false);
    dispatch(logoutCurrentUser());
};

export const updateProfileAct = (id, data) => dispatch => {
    //  ;
    return(
        UserAPIUtil.updateProfile(id, data)
            .then((user) => dispatch(receiveUserSignIn(user)))
            // .then(user => dispatch(login({email:user.currentUser.data.email, password: user.currentUser.data.password})))
            .catch(err=> dispatch(receiveErrors(err.response.data)))
            // err => (dispatch(receiveErrors(err.response.data))))
    );
   
};

export const RECEIVE_UPDATED_USER_ERRORS = 'RECEIVE_UPDATED_USER_ERRORS';
const receiveUpdatedUserErrors = errors => ({
    type: RECEIVE_UPDATED_USER_ERRORS,
    errors
});


export const updateUserPreferences = (id, preferences) => dispatch => {
    return (
        SessionAPIUtil.updateUserPreferences(id, preferences)
            .then((preferences) => dispatch(receivePreferences(preferences)),
                // err => dispatch(receiveErrors(err.response.data))
                err => dispatch(receiveUpdatedUserErrors(err.response.data))

            ))
}


const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
})

export const fetchFavorites = userId => dispatch => {
    // debugger
     return UserAPIUtil.getUser(userId)
       .then((user) => {
           dispatch(receiveFavorites(user.data.favorites))
        })
       .catch((err) => console.log(err));
    

}

export const updateFavorites = (id, favorites) => dispatch => {
    // debugger;
    let cafeId = favorites.cafe.id;
    let type = favorites.type;

    updateCafe(cafeId, { updateType: type }).then(() =>
        console.log("Favorites Updated")
    );

    return (
        SessionAPIUtil.updateFavorites(id, favorites)
            .then( favorites => dispatch(receiveFavorites(favorites.data))
            )
            .catch(err => console.log(err))
    )
    
}

// export const demoLogin = (user) => dispatch => {
//     dispatch(startLoadingLogin());

// return SessionAPIUtil.login(user)
//   .then(res => {
//     const { token } = res.data;
//     localStorage.setItem("jwtToken", token);

//     SessionAPIUtil.setAuthToken(token);
//     const decoded = jwt_decode(token);

//     dispatch(receiveCurrentUser(decoded));
//   })
//   .catch(err => {
//     dispatch(receiveErrors(err.response.data));
//   });
// }
