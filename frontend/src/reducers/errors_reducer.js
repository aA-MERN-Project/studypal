import {combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import UpdatedUserErrorsReducer from './updated_user_errors_reducer';

const errorsReducer = combineReducers({
    session: SessionErrorsReducer,
    updatedUser: UpdatedUserErrorsReducer
});

export default errorsReducer;