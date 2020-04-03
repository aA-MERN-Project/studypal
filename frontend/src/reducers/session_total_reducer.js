import {combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import updatedUserReducer from './updated_user_reducer';

const sessionTotReducer = combineReducers({
    user:sessionReducer,
    updatedUser: updatedUserReducer
})

export default sessionTotReducer;