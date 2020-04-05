import {RECEIVE_UPDATED_USER_ERRORS} from '../actions/updated_user_actions';
import {RECEIVE_UPDATE_PROFILE_ERRORS} from '../actions/user_actions'
const _nullErrors = []; 

const UpdatedUserErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_UPDATED_USER_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default UpdatedUserErrorsReducer;
