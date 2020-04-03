import {UPDATED_USER} from '../actions/updated_user_actions';


const updatedUserReducer = (state={}, action) => {
    Object.freeze({},state);
    let nextState = Object.assign({},state);
    switch(action.type){
        case UPDATED_USER:
            return action.user;
        default:
            return state;
    }

};

export default updatedUserReducer;