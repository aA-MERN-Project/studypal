import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_SIGN_IN } from '../actions/session_actions'
import {UPDATE_USER} from '../actions/user_actions';
import {UPDATED_USER} from '../actions/updated_user_actions'

const initialState = {
    isAuthenticated: false,
    user: {}
};

const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        //LOGIN
        case RECEIVE_CURRENT_USER:
        debugger;
          return{
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };

        // case UPDATE_USER:
        //     return{
        //         ...state,
        //         isAuthenticated: !!action.currentUser,
        //         user: action.currentUser
        //     };

        case LOGOUT_CURRENT_USER:
            // debugger;
            return{
                isAuthenticated: false,
                user:undefined
            };
        //when user has newly signed up, this is the action.type
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
        default: 
            return state;
    }

};


//Wilson's code
// const sessionReducer = (state = { id: null }, action) => {
//     Object.freeze(state)
//     let newState = Object.assign({}, state)
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             newState.id = action.currentUser.id;
//             return newState;
//         case LOGOUT_CURRENT_USER:
//             // return{ isAuthenticated: false, user: undefined};
//             newState.id = null;
//             return newState;
//         default:
//             return state;
//     }
// }

export default sessionReducer;