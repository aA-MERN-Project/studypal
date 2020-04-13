import {RECEIVE_PREFERENCES, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_SIGN_IN, RECEIVE_FAVORITES } from '../actions/session_actions'
import {UPDATE_USER} from '../actions/user_actions';
import {UPDATED_USER} from '../actions/updated_user_actions'

const initialState = {
    isAuthenticated: false,
    user: {}
};

const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER:
          return{
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };


        case LOGOUT_CURRENT_USER:
             
            return{
                isAuthenticated: false,
                user:undefined
            };
        case RECEIVE_USER_SIGN_IN:
            return{
                ...state,
                isSignedIn: true,
                user: action.currentUser.data
            };
        case UPDATED_USER: 
            return{
                ...state,
                updatedUser: action.user.data
            }
        
        case RECEIVE_FAVORITES:
            return {
                ...state,
                favorites: action.favorites
            }

    
        
        case RECEIVE_PREFERENCES:
            return Object.assign({}, state)
        default: 
            return state;
    }

};



export default sessionReducer;