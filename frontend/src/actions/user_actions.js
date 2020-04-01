import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_PREFERENCES = "RECEIVE_PREFERENCES"

const receiveUser = (user) =>{
    return({
        type:RECEIVE_USER,
        user
    });
};

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

// const receivePreferences = (id, preferences) => ({
//     type: RECEIVE_PREFERENCES,
//     preferences
// })

export const getUser = (id) => dispatch => {
    return(
        UserAPIUtil.getUser(id)
            .then((user) => dispatch(receiveUser(user)),
            err => (dispatch(receiveErrors(err.reponse.data))))
    );
};

// export const updateUserPreferences = (id, data) => dispatch => {
//     return (
//         UserAPIUtil.updateUserPreferences(id, data)
//         // .then(user => console.log(user))
//             .then ((id, data) => dispatch(receivePreferences(id, data)),
//             err => dispatch(receiveErrors(err.response.data))
//     ))
// }
