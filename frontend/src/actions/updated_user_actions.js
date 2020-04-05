import * as UserAPIUtil from "../util/user_api_util";

export const UPDATED_USER = 'UPDATED_USER';
export const RECEIVE_UPDATED_USER_ERRORS = 'RECEIVE_UPDATED_USER_ERRORS';

const receiveUpdatedUser = (user)  => {
    return({
        type: UPDATED_USER,
        user
    });
}


const receivehmmErrors = errors => ({
    type: RECEIVE_UPDATED_USER_ERRORS,
    errors
});


export const updatedUser = (id) => dispatch => {
    debugger;
    UserAPIUtil.getUser(id)
        .then(user => dispatch(receiveUpdatedUser(user)),
        err => (dispatch(receiveErrors(err.reponse.data))));
};