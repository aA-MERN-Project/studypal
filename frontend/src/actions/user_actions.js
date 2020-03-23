import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER = "RECEIVE_USER";

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

export const getUser = (email) => dispatch => {
    return(
        UserAPIUtil.getUser(email)
            .then((user) => dispatch(receiveUser(user)),
            err => (dispatch(receiveErrors(err.reponse.data))))
    );
};

