


import {RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN} from '../actions/session_actions';
import {RECEIVE_USER,UPDATE_USER} from '../actions/user_actions';

const usersReducer = (state={}, action) => {
    Object.freeze({},state);
    let nextState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_USER: 
            return Object.assign({},state, {[action.user.id]: action.user});
        case RECEIVE_CURRENT_USER:
           
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case UPDATE_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_USER_SIGN_IN:
            return Object.assign({}, state, {[action.currentUser.data._id]: action.currentUser.data});
        default:
            return state;
    }
};

export default usersReducer;
