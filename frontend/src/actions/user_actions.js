import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = 'UPDATE_USER';const receiveUser = (user) =>{
    return({
        type:RECEIVE_USER,
        user
    });
};

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
    return(
        UserAPIUtil.updateProfile(id, data)
            .then((user) => dispatch(receiveUser(user)),
            err => (dispatch(receiveErrors(err.response.data))))
    );
};

