import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = 'UPDATE_USER';
// export const RECEIVE_UPDATE_PROFILE_ERRORS = 'RECEIVE_UPDATE_PROFILE_ERRORS';

const receiveUser = (user) =>{
    return({
        type:RECEIVE_USER,
        user
    });
};


//not going this route for now
const updateUser = (currentUser) =>{
    return({
        type:UPDATE_USER,
        currentUser
    });
};


const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});


export const getUser = (id) => dispatch => {

    return(
        UserAPIUtil.getUser(id)
            .then((user) => dispatch(receiveUser(user)),
            err => (dispatch(receiveErrors(err.reponse.data))))
    );
};


export const updateProfileAct = (id, data) => dispatch => {
<<<<<<< HEAD
=======
    //  ;
>>>>>>> newFeatures
    return(
        UserAPIUtil.updateProfile(id, data)
            .then((user) => dispatch(receiveUser(user)),
            err => (dispatch(receiveErrors(err.response.data))))
    );
};

// const receiveUpdateProfileErrors = errors => ({
//     type: RECEIVE_UPDATE_PROFILE_ERRORS,
//     errors
// });

// export const updateProfileAct = (id, data) => dispatch => {
//     // debugger;
//     return(
//         UserAPIUtil.updateProfile(id, data)
//             .then((user) => dispatch(receiveUser(user)),
//             err => (dispatch(receiveUpdateProfileErrors(err.response.data))))
//     );
// };

